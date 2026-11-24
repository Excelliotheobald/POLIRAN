"use client";

import { LocateFixed, MapPin, Search } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";

export interface SelectedLocation {
  latitude: number;
  longitude: number;
  displayName: string;
  province?: string;
  city?: string;
  district?: string;
  village?: string;
  postcode?: string;
  road?: string;
  houseNumber?: string;
  rt?: string;
  rw?: string;
}

interface LocationPickerProps {
  onLocationSelect: (location: SelectedLocation) => void;
}

const DEFAULT_CENTER: [number, number] = [-6.2, 106.816666];

export default function LocationPicker({ onLocationSelect }: LocationPickerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);
  const markerRef = useRef<import("leaflet").Marker | null>(null);
  const callbackRef = useRef(onLocationSelect);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("Klik peta untuk memilih titik rumah");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    callbackRef.current = onLocationSelect;
  }, [onLocationSelect]);

  useEffect(() => {
    let disposed = false;

    async function initializeMap() {
      const L = await import("leaflet");
      if (disposed || !containerRef.current || mapRef.current) return;

      const center: [number, number] = DEFAULT_CENTER;
      const map = L.map(containerRef.current, {
        center,
        zoom: 11,
        zoomControl: false,
        attributionControl: true,
        preferCanvas: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
        updateWhenIdle: true,
        updateWhenZooming: false,
        keepBuffer: 0,
        detectRetina: false,
      }).addTo(map);
      L.control.zoom({ position: "topright" }).addTo(map);

      const markerIcon = L.divIcon({
        className: "poliran-map-marker",
        html: '<span aria-hidden="true"></span>',
        iconSize: [26, 26],
        iconAnchor: [13, 26],
      });

      const reverseGeocode = async (latitude: number, longitude: number) => {
        setIsLoading(true);
        setStatus("Mengambil alamat lokasi...");
        try {
          const response = await fetch(`/api/reverse-geocode?lat=${latitude}&lon=${longitude}`);
          if (!response.ok) throw new Error("Reverse geocoding failed");
          const location = (await response.json()) as SelectedLocation;
          callbackRef.current(location);
          setStatus(location.displayName || "Lokasi berhasil dipilih");
        } catch {
          setStatus("Alamat belum ditemukan. Coba titik lain.");
        } finally {
          setIsLoading(false);
        }
      };

      const selectPoint = (latitude: number, longitude: number) => {
        map.setView([latitude, longitude], Math.max(map.getZoom(), 16), { animate: true });
        if (markerRef.current) markerRef.current.remove();
        markerRef.current = L.marker([latitude, longitude], { icon: markerIcon }).addTo(map);
        void reverseGeocode(latitude, longitude);
      };

      map.on("click", (event: import("leaflet").LeafletMouseEvent) => {
        selectPoint(event.latlng.lat, event.latlng.lng);
      });

      map.on("locationfound", (event: import("leaflet").LocationEvent) => {
        selectPoint(event.latlng.lat, event.latlng.lng);
      });

      map.on("locationerror", () => {
        setStatus("Lokasi perangkat tidak tersedia. Pilih titik di peta.");
      });

      mapRef.current = map;
    }

    void initializeMap().catch(() => {
      if (!disposed) setStatus("Peta gagal dimuat. Periksa koneksi internet.");
    });
    return () => {
      disposed = true;
      mapRef.current?.remove();
      mapRef.current = null;
      markerRef.current = null;
    };
  }, []);

  const useCurrentLocation = () => {
    if (!mapRef.current) return;
    setStatus("Meminta izin lokasi perangkat...");
    mapRef.current.locate({ setView: true, maxZoom: 17, enableHighAccuracy: true });
  };

  const searchLocation = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query.trim() || !mapRef.current) return;
    setIsLoading(true);
    setStatus("Mencari lokasi...");
    try {
      const response = await fetch(`/api/geocode?q=${encodeURIComponent(query.trim())}`);
      if (!response.ok) throw new Error("Geocoding failed");
      const result = (await response.json()) as { latitude: number; longitude: number } | null;
      if (!result) throw new Error("Location not found");
      mapRef.current.setView([result.latitude, result.longitude], 17, { animate: true });
      mapRef.current.fire("click", { latlng: { lat: result.latitude, lng: result.longitude } });
    } catch {
      setStatus("Lokasi tidak ditemukan. Coba nama jalan atau kota.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-primary">
          <MapPin className="w-4 h-4 text-secondary" />
          <h3 className="text-sm font-semibold">Tentukan Lokasi Rumah</h3>
        </div>
        <button
          type="button"
          onClick={useCurrentLocation}
          className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-primary hover:text-secondary transition-colors"
        >
          <LocateFixed className="w-3.5 h-3.5" />
          Lokasi saya
        </button>
      </div>

      <div className="relative h-60 sm:h-80 lg:h-96 overflow-hidden rounded-xl bg-[#e8edf4] shadow-sm" aria-busy={isLoading}>
        <div ref={containerRef} className="absolute inset-0 z-0" />
        <form onSubmit={searchLocation} className="absolute left-3 right-12 top-3 z-[500] flex items-center rounded-lg bg-white/95 shadow-md">
          <Search className="ml-3 w-4 h-4 shrink-0 text-on-surface-variant" />
          <input
            aria-label="Cari lokasi rumah"
            className="min-w-0 flex-1 bg-transparent px-2.5 py-2 text-xs text-primary outline-none placeholder:text-outline"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Cari jalan atau kota"
          />
        </form>
        <div className="absolute bottom-3 left-3 right-3 z-[500] flex items-center gap-2 rounded-lg bg-primary/90 px-3 py-2 text-[10px] text-white shadow-md backdrop-blur-sm">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-secondary-fixed" />
          <span className="truncate">{isLoading ? "Memproses lokasi..." : status}</span>
        </div>
      </div>
    </div>
  );
}
