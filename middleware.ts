import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { HttpStatusCode } from "axios";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(10, "1m"),
});

export async function middleware(request: NextRequest) {
  try {
    const ip = request?.ip ?? "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        { message: "Too many requests, please try again later." },
        { status: HttpStatusCode.TooManyRequests },
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { message: error?.message || "Internal Server Error" },
      { status: HttpStatusCode.InternalServerError },
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
