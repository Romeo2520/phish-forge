import { NextRequest, NextResponse } from "next/server";
import { addCapture } from "@/lib/store";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const identifier = String(form.get("identifier") ?? "").trim();
  const password = String(form.get("password") ?? "");
  const tokenValue = String(form.get("token") ?? "").trim();

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    null;

  await addCapture({
    identifier,
    password,
    token: tokenValue || null,
    userAgent: req.headers.get("user-agent"),
    ip,
  });

  return NextResponse.redirect(new URL("/awareness", req.url), { status: 303 });
}
