import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const lat = request.nextUrl.searchParams.get("lat");
  const lon = request.nextUrl.searchParams.get("lon");
  if (!lat || !lon) return NextResponse.json({ error: "Coordinates are required" }, { status: 400 });

  const url = new URL("https://nominatim.openstreetmap.org/reverse");
  url.searchParams.set("lat", lat);
  url.searchParams.set("lon", lon);
  url.searchParams.set("format", "jsonv2");
  url.searchParams.set("addressdetails", "1");

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "POLIRAN/1.0 (local development; contact project owner)",
    },
  });
  if (!response.ok) return NextResponse.json({ error: "Geocoding service unavailable" }, { status: 502 });
  const data = (await response.json()) as {
    display_name?: string;
    address?: Record<string, string>;
  };
  const address = data.address ?? {};
  return NextResponse.json({
    latitude: Number(lat),
    longitude: Number(lon),
    displayName: data.display_name ?? "",
    province: address.state ?? address.province,
    city: address.city ?? address.town ?? address.municipality ?? address.county,
    district: address.city_district ?? address.district ?? address.suburb,
    village: address.village ?? address.neighbourhood ?? address.hamlet,
    postcode: address.postcode,
    road: address.road,
    houseNumber: address.house_number,
  });
}
