"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Edit,
  ChevronLeft,
  CheckCircle2,
  AlertCircle,
  Clock,
  X,
  ChevronDown,
  ShieldCheck,
  MapPin,
  MapPinned,
  BriefcaseBusiness,
  Sparkles,
  Camera,
  ContactRound,
} from "lucide-react";
import { toast } from "sonner";
import PoliranStrip from "@/components/PoliranStrip";
import HelpPopup from "@/components/HelpPopup";
import { getInterestLabel } from "@/lib/profile-options";

interface PelamarProfile {
  id: string;
  nik: string;
  provinsi: string;
  kota: string;
  district: string;
  village: string;
  rt: string;
  rw: string;
  address: string;
  educationLevel: string | null;
  educationMajor: string | null;
  skills: string[];
  interests: string[];
  desiredWorkField: string | null;
  employmentStatus: string | null;
  jobSeekingStatus: string | null;
  verificationStatus: string;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  hasProfile: boolean;
  profileComplete: boolean;
  profile: PelamarProfile | null;
}

type ProfileEditData = Partial<PelamarProfile> & { name?: string; email?: string; phone?: string };

interface ProfileField {
  key: string;
  label: string;
  type?: "text" | "textarea";
  colSpan?: 2;
  options?: readonly string[];
}

interface ProfileSection {
  id: string;
  label: string;
  fields: ProfileField[];
}

const SECTIONS: ProfileSection[] = [
  {
    id: "identitas",
    label: "Identitas",
    fields: [
      { key: "name", label: "Nama Lengkap" },
      { key: "nik", label: "NIK" },
      { key: "email", label: "Email", type: "text" },
      { key: "phone", label: "Telepon" },
    ],
  },
  {
    id: "domisili",
    label: "Domisili",
    fields: [
      { key: "address", label: "Alamat Lengkap", type: "textarea", colSpan: 2 },
      { key: "provinsi", label: "Provinsi" },
      { key: "kota", label: "Kota / Kabupaten" },
      { key: "district", label: "Kecamatan" },
      { key: "village", label: "Kelurahan" },
      { key: "rt", label: "RT" },
      { key: "rw", label: "RW" },
    ],
  },
];

const VERIFICATION_ITEMS = [
  { key: "nik", label: "Data Identitas", icon: ContactRound, check: (p: PelamarProfile | null) => !!p?.nik },
  { key: "domisili", label: "Data Domisili", icon: MapPinned, check: (p: PelamarProfile | null) => !!p?.provinsi && !!p?.kota },
  { key: "keahlian", label: "Keahlian & Minat", icon: Sparkles, check: (p: PelamarProfile | null) => (p?.skills?.length ?? 0) + (p?.interests?.length ?? 0) > 0 },
];

export default function ProfilPelamarPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState<ProfileEditData>({});
  const [saving, setSaving] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    identitas: true,
    domisili: true,
    "keahlian-minat": true,
  });

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.user && data.user.role === "JOB_SEEKER") {
          setUser(data.user);
        } else {
          router.push("/");
        }
      })
      .catch(() => router.push("/"))
      .finally(() => setLoading(false));
  }, [router]);

  useEffect(() => {
    if (!user?.id) return;

    const photoKey = `poliran-profile-photo-${user.id}`;
    const syncPhoto = () => {
      try {
        setProfilePhoto(window.localStorage.getItem(photoKey));
      } catch {
        setProfilePhoto(null);
      }
    };
    const frame = window.requestAnimationFrame(syncPhoto);

    return () => window.cancelAnimationFrame(frame);
  }, [user?.id]);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Pilih file gambar yang valid.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Ukuran foto maksimal 2 MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== "string" || !user?.id) return;

      try {
        window.localStorage.setItem(`poliran-profile-photo-${user.id}`, reader.result);
        setProfilePhoto(reader.result);
        toast.success("Foto profil berhasil diperbarui.");
      } catch {
        toast.error("Foto belum bisa disimpan. Coba gunakan gambar yang lebih kecil.");
      }
    };
    reader.readAsDataURL(file);
  };

  const handleEdit = (field: string, value: string | string[]) => {
    setEditData((prev) => ({ ...prev, [field]: value }));
  };

  const saveProfile = async () => {
    if (!user?.profile) return;

    setSaving(true);
    try {
      const res = await fetch("/api/profile/lengkapi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          nik: editData.nik ?? user.profile.nik,
          provinsi: editData.provinsi ?? user.profile.provinsi,
          kota: editData.kota ?? user.profile.kota,
          district: editData.district ?? user.profile.district,
          village: editData.village ?? user.profile.village,
          rt: editData.rt ?? user.profile.rt,
          rw: editData.rw ?? user.profile.rw,
          address: editData.address ?? user.profile.address,
          educationLevel: editData.educationLevel ?? user.profile.educationLevel,
          educationMajor: editData.educationMajor ?? user.profile.educationMajor,
          desiredWorkField: editData.desiredWorkField ?? user.profile.desiredWorkField,
          employmentStatus: editData.employmentStatus ?? user.profile.employmentStatus,
          jobSeekingStatus: editData.jobSeekingStatus ?? user.profile.jobSeekingStatus,
          skills: editData.skills ?? user.profile.skills,
          interests: editData.interests ?? user.profile.interests,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Gagal menyimpan profil");
        return;
      }

      toast.success("Profil berhasil diperbarui");
      setEditing(false);
      setEditData({});
      router.refresh();
    } catch (err) {
      console.error(err);
      toast.error("Terjadi kesalahan jaringan");
    } finally {
      setSaving(false);
    }
  };

  const cancelEdit = () => {
    setEditData({});
    setEditing(false);
  };

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getVerificationStatus = (status: string) => {
    switch (status) {
      case "VERIFIED":
        return { label: "Terverifikasi", color: "bg-emerald-50 text-emerald-700 border-emerald-100", dot: "bg-emerald-400", text: "text-emerald-600", icon: CheckCircle2 };
      case "PENDING":
        return { label: "Menunggu Verifikasi", color: "bg-amber-50 text-amber-700 border-amber-100", dot: "bg-amber-400", text: "text-amber-600", icon: Clock };
      case "NEEDS_REVISION":
        return { label: "Perlu Revisi", color: "bg-blue-50 text-blue-700 border-blue-100", dot: "bg-blue-400", text: "text-blue-600", icon: AlertCircle };
      case "REJECTED":
        return { label: "Ditolak", color: "bg-red-50 text-red-700 border-red-100", dot: "bg-red-400", text: "text-red-600", icon: X };
      default:
        return { label: "Belum Diverifikasi", color: "bg-slate-50 text-slate-700 border-slate-100", dot: "bg-slate-400", text: "text-slate-600", icon: ShieldCheck };
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen flex flex-col bg-[#f8fafc] relative overflow-x-hidden">
        <PoliranStrip />
        <div className="flex-1 flex items-center justify-center px-4 py-10">
          <div className="w-8 h-8 border-4 border-[#132238] border-t-transparent rounded-full animate-spin" />
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen flex flex-col bg-[#f8fafc] relative overflow-x-hidden">
        <PoliranStrip />
        <div className="flex-1 flex items-center justify-center px-4 py-10">
          <div className="text-center">
            <AlertCircle className="w-16 h-16 mx-auto text-slate-300" />
            <h1 className="mt-4 text-xl font-bold text-slate-700">Akses Ditolak</h1>
            <p className="mt-2 text-slate-500">Halaman ini hanya untuk pelamar kerja.</p>
            <Link href="/" className="mt-4 inline-block text-[#132238] hover:underline">
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const profile = user.profile;
  const verification = profile ? getVerificationStatus(profile.verificationStatus) : getVerificationStatus("");
  const VerificationIcon = verification.icon;

  const getValue = (key: string) => {
    if (key === "name") return user.name;
    if (key === "email") return user.email;
    if (key === "phone") return user.phone;
    return profile?.[key as keyof PelamarProfile] as string | undefined;
  };

  const getEditValue = (key: string): string | undefined => {
    const value = (editData as Record<string, string | string[] | undefined>)[key];
    return typeof value === "string" ? value : undefined;
  };

  const getArrayValue = (key: "skills" | "interests") => {
    const value = editData[key];
    return Array.isArray(value) ? value : profile?.[key] ?? [];
  };

  const displayInterest = (interest: string) => /^\d+$/.test(interest) ? getInterestLabel(interest) : interest;

  const initials = user.name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <main className="min-h-screen flex flex-col bg-[#f4f7fb] relative overflow-x-hidden">
      <PoliranStrip />

      <div className="flex-1 flex flex-col relative">
        <Image
          src="/gel-atas.png"
          alt=""
          width={1536}
          height={681}
          priority
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-0 h-auto w-[min(30rem,60vw)] object-contain object-right-top opacity-90"
        />
        

<div className="w-full px-4 sm:px-6 py-4">
  <Link
            aria-label="Kembali ke Beranda"
            className="inline-flex min-h-11 w-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-0 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors duration-150 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:w-auto sm:px-4"
    href="/"
  >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
            <span className="hidden sm:inline">Kembali ke Beranda</span>
  </Link>
</div>



        <div className="relative z-10 flex-1 px-4 sm:px-6 pb-10 w-full">
          <div className="w-full max-w-6xl mx-auto">
            <div className="relative isolate mb-6 min-h-[200px] overflow-hidden rounded-[18px] bg-[linear-gradient(112deg,#0e1d35_0%,#152b4c_62%,#10213d_100%)] shadow-[0_18px_45px_-28px_rgba(19,34,56,0.8)] md:min-h-[204px]">
              <Image
                src="/tas-biru.png"
                alt=""
                width={1434}
                height={1097}
                aria-hidden="true"
                className="pointer-events-none absolute -right-5 bottom-[-60px] z-0 h-auto w-[19rem] object-contain opacity-45 sm:-right-2 sm:bottom-[-88px] sm:w-[27rem] md:right-[8.5rem] md:bottom-[-155px] md:w-[31rem]"
              />
              <Image
                src="/gel-bawah.png"
                alt=""
                width={1536}
                height={396}
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-1 -right-10 z-0 h-auto w-[28rem] max-w-none object-contain object-right-bottom opacity-95 sm:w-[34rem] md:-right-4 md:w-[38rem]"
              />

              <div className="relative z-10 flex min-h-[200px] flex-col items-start gap-5 p-5 sm:p-7 md:min-h-[204px] md:flex-row md:items-center md:gap-6 md:px-9">
                <div className="flex w-full min-w-0 items-center gap-4 md:w-auto md:shrink-0 md:gap-6">
                  <div className="relative h-[92px] w-[92px] shrink-0 sm:h-[112px] sm:w-[112px] md:h-[128px] md:w-[128px]">
                    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border-4 border-white/25 bg-[#f59b2f] text-3xl font-extrabold text-white shadow-[0_8px_18px_rgba(0,0,0,0.18)] sm:text-4xl">
                      {profilePhoto ? (
                        <Image
                          src={profilePhoto}
                          alt={`Foto profil ${user.name}`}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      ) : initials}
                    </div>
                    <button
                      type="button"
                      onClick={() => photoInputRef.current?.click()}
                      aria-label="Ganti foto profil"
                      className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#132238] bg-white text-[#132238] shadow-md transition-colors hover:bg-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#132238]"
                    >
                      <Camera className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <input
                      ref={photoInputRef}
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={handlePhotoChange}
                      className="sr-only"
                      aria-label="Pilih foto profil"
                    />
                  </div>

                  <div className="min-w-0 text-left md:hidden">
                    <h1 className="truncate text-xl font-extrabold tracking-tight text-white">{user.name}</h1>
                    <p className="mt-2 text-sm text-slate-300">Pelamar Kerja</p>
                  </div>
                </div>

                <div className="hidden min-w-0 flex-1 pr-0 text-left md:block md:pr-44">
                  <h1 className="truncate text-2xl font-extrabold tracking-tight text-white lg:text-[30px]">{user.name}</h1>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="inline-flex min-h-8 items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 text-xs font-semibold text-white">
                      <BriefcaseBusiness className="h-3.5 w-3.5" aria-hidden="true" />
                      Pelamar Kerja
                    </span>
                    <span className={`inline-flex min-h-8 items-center gap-1.5 rounded-full border px-3 text-xs font-semibold ${user.profileComplete ? "border-emerald-300/35 bg-emerald-400/15 text-emerald-100" : "border-amber-300/35 bg-amber-300/15 text-amber-100"}`}>
                      <VerificationIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      {user.profileComplete ? "Profil Lengkap" : "Profil Belum Lengkap"}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-300">Siap untuk melamar pekerjaan impianmu! ✨</p>
                </div>

                <div className="w-full shrink-0 md:absolute md:right-9 md:top-7 md:z-20 md:w-auto">
                    {editing ? (
                      <>
                        <button type="button"
                          onClick={cancelEdit}
                          className="px-3.5 py-1.5 text-xs sm:text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/30 rounded-md transition-colors whitespace-nowrap sm:flex-1 sm:text-center focus-visible:ring-2 focus-visible:ring-white outline-none"
                        >
                          Batal
                        </button>
                        <button type="button"
                          onClick={saveProfile}
                          disabled={saving}
                          className="min-h-11 px-4 text-xs sm:text-sm font-bold text-[#132238] bg-amber-500 hover:bg-amber-400 active:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-60 rounded-lg transition-all duration-150 whitespace-nowrap sm:flex-1 sm:text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#132238] shadow-sm"
                        >
                          {saving ? "Menyimpan…" : "Simpan perubahan"}
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setEditing(true)}
                        className="min-h-11 w-full rounded-full border border-white/75 bg-transparent px-6 text-sm font-bold text-white transition-colors duration-150 hover:bg-white hover:text-[#132238] active:bg-white/85 md:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#132238]"
                      >
                        <span className="inline-flex items-center gap-2"><Edit className="h-4 w-4" aria-hidden="true" />Edit Profil</span>
                      </button>
                    )}
                </div>

                <div className="w-full text-left md:hidden">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex min-h-8 items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 text-xs font-semibold text-white">
                      <BriefcaseBusiness className="h-3.5 w-3.5" aria-hidden="true" />
                      Pelamar Kerja
                    </span>
                    <span className={`inline-flex min-h-8 items-center gap-1.5 rounded-full border px-3 text-xs font-semibold ${user.profileComplete ? "border-emerald-300/35 bg-emerald-400/15 text-emerald-100" : "border-amber-300/35 bg-amber-300/15 text-amber-100"}`}>
                      <VerificationIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      {user.profileComplete ? "Profil Lengkap" : "Profil Belum Lengkap"}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-300">Siap untuk melamar pekerjaan impianmu! ✨</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.65fr)_minmax(280px,0.85fr)] gap-6 items-start">
              <div className="space-y-5" role="region" aria-label="Informasi Profil">
                <div className="space-y-5">
                  {SECTIONS.map((section) => {
                    const isOpen = openSections[section.id];
                    return (
                      <div key={section.id} className="bg-white rounded-lg border border-slate-200 shadow-sm">
                        <button
                          type="button"
                          onClick={() => toggleSection(section.id)}
                          className="w-full min-h-14 px-5 py-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber-500"
                          aria-expanded={isOpen}
                          aria-controls={`section-${section.id}`}
                        >
                          <div className="flex items-center gap-3 text-left">
                            {section.id === "identitas" && <ShieldCheck className="w-5 h-5 text-amber-600" aria-hidden="true" />}
                            {section.id === "domisili" && <MapPin className="w-5 h-5 text-amber-600" aria-hidden="true" />}
                            <h3 className="font-bold text-slate-900 text-sm">{section.label}</h3>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ease-out ${isOpen ? "rotate-180" : ""}`}
                            aria-hidden="true"
                          />
                        </button>

                        <div id={`section-${section.id}`} className={`overflow-hidden transition-all duration-200 ease-out ${isOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"}`}>
                          <div className="px-5 pb-5 pt-3 border-t border-slate-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
                              {section.fields.map((field: ProfileField) => (
                                <div key={field.key} className={field.colSpan === 2 ? "md:col-span-2" : ""}>
                                  <div className="py-2 last:pb-0">
                                    {editing ? (
                                      <>
                                        {field.type === "textarea" ? (
                                          <textarea
                                            value={getEditValue(field.key) || getValue(field.key) || ""}
                                            onChange={(e) => handleEdit(field.key, e.target.value)}
                                            rows={3}
                                            aria-label={field.label}
                                            className="w-full min-h-11 bg-white text-slate-900 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-100 transition-colors"
                                          />
                                        ) : (
                                          <input
                                            type="text"
                                            value={getEditValue(field.key) || getValue(field.key) || ""}
                                            onChange={(e) => handleEdit(field.key, e.target.value)}
                                            aria-label={field.label}
                                            className="w-full min-h-11 bg-white text-slate-900 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-100 transition-colors"
                                          />
                                        )}
                                      </>
                                    ) : (
                                      <>
                                        <p className="text-xs font-semibold text-slate-500">{field.label}</p>
                                        <p className={`mt-1 text-sm font-medium leading-relaxed ${getValue(field.key) ? "text-slate-900" : "text-slate-400"}`}>
                                          {getValue(field.key) || "Belum diisi"}
                                        </p>
                                      </>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Keahlian & Minat */}
                  <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm">
                    <button
                      type="button"
                      onClick={() => toggleSection("keahlian-minat")}
                      className="w-full min-h-14 px-5 py-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber-500"
                      aria-expanded={openSections["keahlian-minat"]}
                    >
                      <div className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-amber-600" aria-hidden="true" /><h3 className="font-bold text-slate-900 text-sm">Keahlian & Minat</h3></div>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ease-out ${openSections["keahlian-minat"] ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>

                    <div className={`overflow-hidden transition-all duration-200 ease-out ${openSections["keahlian-minat"] ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="px-5 pb-5 pt-4 border-t border-slate-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                          <div>
                            <h4 className="font-semibold text-slate-900 text-xs leading-none mb-3 tracking-wide uppercase">Keahlian</h4>
                            {editing && <input aria-label="Keahlian, pisahkan dengan koma" value={getArrayValue("skills").join(", ")} onChange={(e) => handleEdit("skills", e.target.value.split(",").map((item) => item.trim()).filter(Boolean))} placeholder="Contoh: Microsoft Office, komunikasi" className="mb-3 w-full min-h-11 rounded-lg border border-slate-300 px-3 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-100" />}
                            {(getArrayValue("skills").length ?? 0) > 0 ? (
                              <div className="flex flex-wrap gap-1.5">
                                {getArrayValue("skills").map((skill: string, i: number) => (
                                  <span key={`${skill}-${i}`} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 text-xs font-medium">
                                    {skill}
                                    {editing && (
                                      <button
                                        type="button"
                                        onClick={() => handleEdit("skills", getArrayValue("skills").filter((_, idx) => idx !== i))}
                                        className="ml-0.5 min-h-6 min-w-6 text-slate-400 hover:text-slate-700 transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                                        aria-label={`Hapus ${skill}`}
                                      >
                                        <X className="w-3 h-3" />
                                      </button>
                                    )}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <p className="text-xs text-slate-400 italic">Belum ada keahlian</p>
                            )}
                          </div>

                          <div>
                            <h4 className="font-semibold text-slate-900 text-xs leading-none mb-3 tracking-wide uppercase">Minat Pekerjaan</h4>
                            {editing && <input aria-label="Minat pekerjaan, pisahkan dengan koma" value={getArrayValue("interests").map(displayInterest).join(", ")} onChange={(e) => handleEdit("interests", e.target.value.split(",").map((item) => item.trim()).filter(Boolean))} placeholder="Contoh: Teknologi & IT" className="mb-3 w-full min-h-11 rounded-lg border border-slate-300 px-3 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-100" />}
                            {(getArrayValue("interests").length ?? 0) > 0 ? (
                              <div className="flex flex-wrap gap-1.5">
                                {getArrayValue("interests").map((interest: string, i: number) => (
                                  <span key={`${interest}-${i}`} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 text-xs font-medium">
                                    {displayInterest(interest)}
                                    {editing && (
                                      <button
                                        type="button"
                                        onClick={() => handleEdit("interests", getArrayValue("interests").filter((_, idx) => idx !== i))}
                                        className="ml-0.5 min-h-6 min-w-6 text-slate-400 hover:text-slate-700 transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                                        aria-label={`Hapus ${interest}`}
                                      >
                                        <X className="w-3 h-3" />
                                      </button>
                                    )}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <p className="text-xs text-slate-400 italic">Belum ada minat pekerjaan</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-5 lg:sticky lg:top-5">
                {/* Status Akun — navy panel */}
                <div className="bg-[#132238] rounded-2xl border border-[#132238]/30 overflow-hidden shadow-sm">
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-5 h-5 text-white" />
                      <h3 className="font-bold text-white text-base">Status akun</h3>
                    </div>

                    <div className="rounded-xl bg-white/5 p-4 border border-white/10 mb-4">
                      <p className="text-[10px] text-slate-400 leading-none mb-1.5 uppercase tracking-wide">Verifikasi Profil</p>
                      <div className="flex items-center gap-2.5">
                        <div className={`w-2 h-2 rounded-full ${verification.dot.replace("bg-", "")}`} aria-hidden="true" />
                        <span className={`text-sm font-medium text-white ${verification.text}`}>
                          {verification.label}
                        </span>
                      </div>
                      <p className="mt-2 text-[10px] text-slate-400 leading-relaxed">
                        Kelengkapan dan keaslian data profil Anda.
                      </p>
                    </div>

                    <div className="space-y-1.5 border-t border-white/10 pt-3">
                      {VERIFICATION_ITEMS.map((item) => {
                        const isComplete = item.check(profile);
                        const ItemIcon = item.icon;
                        return (
                          <div
                            key={item.key}
                            className="flex items-center justify-between gap-3 px-3 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                          >
                            <span className="flex min-w-0 items-center gap-2 text-[11px] text-slate-300 leading-none">
                              <ItemIcon className={`h-4 w-4 shrink-0 ${isComplete ? "text-emerald-300" : "text-slate-400"}`} aria-hidden="true" />
                              <span className="truncate">{item.label}</span>
                            </span>
                            <span className={`flex items-center gap-1.5 text-[11px] font-medium leading-none ${isComplete ? "text-emerald-400" : "text-slate-400"}`}>
                              <div className={`w-1.5 h-1.5 rounded-full ${isComplete ? "bg-emerald-400" : "bg-slate-600"}`} aria-hidden="true" />
                              {isComplete ? "Terisi" : "Belum diisi"}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Bantuan Edit Profil — neutral, aksen oranye terbatas */}
                <div className="bg-amber-50 rounded-2xl border border-amber-200 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Edit className="w-4 h-4 text-amber-600" aria-hidden="true" />
                    <h3 className="font-semibold text-slate-900 text-sm leading-none">Bantuan Edit Profil</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Ubah data profil melalui tombol Edit Profil di atas. Data yang diperbarui akan diverifikasi tim POLIRAN sebelum ditampilkan umum.
                  </p>
                </div>

                {/* Ringkasan Profil */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-sm mb-4">Ringkasan profil</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs border-b border-slate-50 pb-1.5 last:border-b-0 last:pb-0">
                      <span className="text-slate-500">NIK</span>
                      <span className="font-medium text-slate-900 truncate md:max-w-[120px]">{profile?.nik || "—"}</span>
                    </div>
                    <div className="flex justify-between text-xs border-b border-slate-50 pb-1.5 last:border-b-0 last:pb-0">
                      <span className="text-slate-500">Domisili</span>
                      <span className="font-medium text-slate-900 truncate md:max-w-[120px]">{profile?.kota || "—"}</span>
                    </div>
                    <div className="flex justify-between text-xs border-b border-slate-50 pb-1.5 last:border-b-0 last:pb-0">
                      <span className="text-slate-500">Keahlian</span>
                      <span className="font-medium text-slate-900">{profile?.skills?.length ?? 0} item</span>
                    </div>
                    <div className="flex justify-between text-xs last:border-b-0 last:pb-0">
                      <span className="text-slate-500">Minat</span>
                      <span className="font-medium text-slate-900">{profile?.interests?.length ?? 0} item</span>
                    </div>
                  </div>
                </div>

                {profile?.verificationStatus === "NEEDS_REVISION" && (
                  <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-3 h-3 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-blue-800 text-[11px] leading-none">Profil Perlu Revisi</p>
                        <p className="mt-0.5 text-[10px] text-blue-700 leading-relaxed">
                          Tim verifikasi meminta perbaikan data. Perbarui lalu ajukan ulang.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {profile?.verificationStatus === "REJECTED" && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-3">
                    <div className="flex items-start gap-2">
                      <X className="w-3 h-3 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-red-800 text-[11px] leading-none">Verifikasi Ditolak</p>
                        <p className="mt-0.5 text-[10px] text-red-700 leading-relaxed">
                          Pengajuan ditolak. Hubungi tim POLIRAN atau perbaiki data.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <HelpPopup />
    </main>
  );
}
