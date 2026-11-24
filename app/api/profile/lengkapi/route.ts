import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type CompleteProfileBody = {
  userId?: string;
  nik?: string;
  provinsi?: string;
  kota?: string;
  kecamatan?: string;
  kelurahan?: string;
  rt?: string;
  rw?: string;
  alamat?: string;
  interests?: number[];
};

export async function POST(request: Request) {
  let body: CompleteProfileBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Format permintaan tidak valid" },
      { status: 400 },
    );
  }

  const {
    userId,
    nik,
    provinsi,
    kota,
    kecamatan,
    kelurahan,
    rt,
    rw,
    alamat,
    interests,
  } = body;

  if (!userId) {
    return NextResponse.json(
      { error: "User ID tidak ditemukan. Silakan daftar ulang." },
      { status: 400 },
    );
  }

  if (!nik || nik.length !== 16) {
    return NextResponse.json(
      { error: "NIK harus 16 digit." },
      { status: 400 },
    );
  }

  if (!interests || interests.length === 0) {
    return NextResponse.json(
      { error: "Pilih minimal satu bidang minat." },
      { status: 400 },
    );
  }

  try {
    // Cek apakah profile sudah ada
    const existingProfile = await prisma.jobSeekerProfile.findFirst({
      where: { userId },
    });

    if (existingProfile) {
      // Update profile existing
      const profile = await prisma.jobSeekerProfile.update({
        where: { userId },
        data: {
          nik,
          provinsi,
          kota,
          district: kecamatan,
          village: kelurahan,
          rt,
          rw,
          address: alamat,
          interests: interests.map(String),
        },
        select: { id: true, nik: true },
      });
      return NextResponse.json(
        { message: "Profil berhasil diperbarui", profile },
        { status: 200 },
      );
    } else {
      // Create new profile
      const profile = await prisma.jobSeekerProfile.create({
        data: {
          userId,
          nik,
          provinsi,
          kota,
          district: kecamatan,
          village: kelurahan,
          rt,
          rw,
          address: alamat,
          skills: [],
          interests: interests.map(String),
          verificationStatus: "PENDING",
        },
        select: { id: true, nik: true },
      });
      return NextResponse.json(
        { message: "Profil berhasil disimpan", profile },
        { status: 200 },
      );
    }
  } catch (error) {
    console.error("Profile completion error:", error);
    const errMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: `Gagal menyimpan profil: ${errMessage}` },
      { status: 500 },
    );
  }
}