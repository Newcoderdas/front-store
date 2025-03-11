import { NextResponse } from "next/server";
import type { NextRequest as OriginalNextRequest } from "next/server";
import { jwtVerify } from "jose"; // Use jose for JWT verification

interface NextRequest extends OriginalNextRequest {
  userId?: string;
}

export async function middleware(request: NextRequest) {
  try {
    const token = request.headers.get("Authorization")?.split(" ")[1];

    if (!token) {
      return NextResponse.json("failed to authenticate", { status: 401 });
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);

    console.log("Decoded Payload:", payload); // Debugging log

    if (!payload.userId) {
      return NextResponse.json("failed to authenticate", { status: 401 });
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", payload.userId); // Use userId instead of _id

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error) {
    console.error("JWT Verification Error:", error);
    return NextResponse.json("failed to authenticate", { status: 401 });
  }
}



export const config = {
  matcher: ["/api/add-cart/","/api/addproduct/"],
};
