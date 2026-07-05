import { NextResponse } from "next/server";

export function middleware(request) {
  const siteUser = process.env.SITE_USER;
  const sitePassword = process.env.SITE_PASSWORD;

  if (!siteUser || !sitePassword) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization");

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(" ");

    if (scheme === "Basic" && encoded) {
      const decoded = atob(encoded);
      const separatorIndex = decoded.indexOf(":");
      const user = decoded.slice(0, separatorIndex);
      const password = decoded.slice(separatorIndex + 1);

      if (user === siteUser && password === sitePassword) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
