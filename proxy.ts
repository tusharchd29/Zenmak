import { NextResponse, type NextRequest } from "next/server";
import { decodeSession, SESSION_COOKIE_NAME } from "@/lib/session";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const session = decodeSession(token);

  const isLoginPage = pathname === "/login";

  if (!session && !isLoginPage) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // No "already logged in → /dashboard" redirect from /login here: the
  // cookie can be validly signed yet no longer accepted (user deactivated —
  // see getSession), and bouncing /login → /dashboard → /login would loop.
  // "/" sends a genuinely logged-in user to the dashboard instead.

  return NextResponse.next();
}

export const config = {
  // Public, no-login paths: /docs/* (the brochure and product PDFs in
  // public/docs) and /p/* (the customer-facing product page) — both are
  // opened by customers from a WhatsApp link, who have no session.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/logout|docs/|p/).*)"],
};
