import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyPassword } from "@/lib/password";

export async function POST(request: Request) {
  try {
    const { identifier, password, rememberMe } = await request.json();

    if (!identifier || !password) {
      return NextResponse.json(
        { error: "Email/NIK dan kata sandi wajib diisi" },
        { status: 400 }
      );
    }

    // Cari user berdasarkan email, phone, atau NIK
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: identifier },
          { phone: identifier },
          { jobSeekerProfile: { nik: identifier } }
        ],
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        passwordHash: true,
        role: true,
      },
    });

    if (!user || !user.passwordHash) {
      return NextResponse.json(
        { error: "Email/NIK atau kata sandi salah" },
        { status: 401 }
      );
    }

    // Verifikasi password
    const passwordValid = await verifyPassword(password, user.passwordHash);

    if (!passwordValid) {
      return NextResponse.json(
        { error: "Email/NIK atau kata sandi salah" },
        { status: 401 }
      );
    }

    // Simpan user ke session storage dan redirect
    // Gunakan Next.js redirect dengan menyematkan user ID di URL/cookie
    // Untuk demo sederhana, kita set redirect dengan membawa user role
    const redirectUrl = user.role === "JOB_SEEKER" 
      ? "/" 
      : "/dashboard";

    const headers = new Headers();
    if (rememberMe) {
      headers.set("Set-Cookie", `poliran_remember_me=yes; Max-Age=2592000; Path=/; HttpOnly`); // 30 days
    }

    return NextResponse.json(
      { 
        success: true, 
        user: { 
          id: user.id, 
          name: user.name, 
          email: user.email, 
          phone: user.phone, 
          role: user.role 
        },
        redirectUrl 
      },
      { status: 200, headers }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat login. Silakan coba lagi." },
      { status: 500 }
    );
  }
}