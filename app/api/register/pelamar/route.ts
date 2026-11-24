import { NextResponse } from "next/server";
import { hashPassword } from "@/lib/password";

type RegisterBody = {
  fullname?: string;
  phone?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
};

function normalizePhone(value: string): string {
  const digits = value.replace(/\D/g, "");

  if (digits.startsWith("62")) return digits;
  if (digits.startsWith("0")) return `62${digits.slice(1)}`;
  if (digits.startsWith("8")) return `62${digits}`;

  return digits;
}

export async function POST(request: Request) {
  let body: RegisterBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Format permintaan tidak valid" },
      { status: 400 },
    );
  }

  const fullname = body.fullname?.trim() ?? "";
  const email = body.email?.trim().toLowerCase() ?? "";
  const phone = body.phone ? normalizePhone(body.phone) : "";
  const password = body.password ?? "";
  const passwordConfirm = body.passwordConfirm ?? "";

  if (!fullname || !phone || !email || !password || !passwordConfirm) {
    return NextResponse.json(
      { error: "Semua field wajib diisi" },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Format email tidak valid" },
      { status: 400 },
    );
  }

  if (!/^62\d{8,13}$/.test(phone)) {
    return NextResponse.json(
      { error: "Nomor WhatsApp tidak valid" },
      { status: 400 },
    );
  }

  if (password.length < 8) {
    return NextResponse.json(
      { error: "Kata sandi minimal 8 karakter" },
      { status: 400 },
    );
  }

  if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
    return NextResponse.json(
      {
        error:
          "Kata sandi harus mengandung minimal 1 huruf kapital dan 1 angka",
      },
      { status: 400 },
    );
  }

  if (password !== passwordConfirm) {
    return NextResponse.json(
      { error: "Kata sandi tidak cocok" },
      { status: 400 },
    );
  }

  const { prisma } = await import("@/lib/prisma");

  const existingUser = await prisma.user.findFirst({
    where: { OR: [{ phone }, { email }] },
    select: { phone: true, email: true },
  });

  if (existingUser) {
    return NextResponse.json(
      {
        error:
          existingUser.email === email
            ? "Email sudah terdaftar"
            : "Nomor WhatsApp sudah terdaftar",
      },
      { status: 409 },
    );
  }

  try {
    const passwordHash = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name: fullname,
        phone,
        email,
        passwordHash,
        role: "JOB_SEEKER",
        jobSeekerProfile: {
          create: {},
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
      },
    });

    return NextResponse.json(
      {
        message: "Pendaftaran berhasil",
        user,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Registration error:", error);

    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        { error: "Email atau nomor WhatsApp sudah terdaftar" },
        { status: 409 },
      );
    }

    return NextResponse.json(
      { error: "Terjadi kesalahan saat mendaftar. Silakan coba lagi." },
      { status: 500 },
    );
  }
}