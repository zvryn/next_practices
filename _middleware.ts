import { NextResponse } from "next/server";

export const middleware = (req: Request) => {
  console.log("Hello Middleware");
  return NextResponse.redirect(new URL("/", req.url));
};

export const config = {
  // matcher : '/counter'
  matcher: ["/about/:path*", "/counter/:path*"],
};
