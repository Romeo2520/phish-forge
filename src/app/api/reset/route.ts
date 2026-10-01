import { NextRequest, NextResponse } from "next/server";
import { clearCaptures } from "@/lib/store";

export async function POST(req: NextRequest) {
  await clearCaptures();
  return NextResponse.redirect(new URL("/dashboard", req.url), { status: 303 });
}
