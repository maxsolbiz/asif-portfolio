import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ar", "ur", "ro"],
  defaultLocale: "en",
  localeDetection: true,
  localePrefix: "as-needed",
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
