import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim();
  if (!query) return NextResponse.json({ error: "Query is required" }, { status: 400 });

  const url = new URL("https://nominatim.openstreetmap.org/search");
  url.searchParams.set("q", query);
  url.searchParams.set("format", "jsonv2");
  url.searchParams.set("limit", "1");

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "POLIRAN/1.0 (local development; contact project owner)",
    },
  });
  if (!response.ok) return NextResponse.json({ error: "Geocoding service unavailable" }, { status: 502 });
  const results = (await response.json()) as Array<{ lat: string; lon: string }>;
  if (!results[0]) return NextResponse.json(null);
  return NextResponse.json({ latitude: Number(results[0].lat), longitude: Number(results[0].lon) });
}
