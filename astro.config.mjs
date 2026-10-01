import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://santiago-pourteau.santiago-pourteau-portfolio.workers.dev",
  output: "static",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
