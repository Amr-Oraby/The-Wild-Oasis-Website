// import { NextRequest, NextResponse } from "next/server";

// export  function proxy(request: NextRequest) {
//   console.log(request);
//   return NextResponse.redirect(new URL("/about", request.url));
// }

import { auth } from "@/app/_lib/auth";
export const proxy = auth; // auth is used also a middleware
export const config = {
  matcher: ["/account"],
};
