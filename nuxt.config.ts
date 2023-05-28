import path from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    output: {
      publicDir: path.join(__dirname, "docs"),
    },
  },
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, intial-scale=1" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css",
          integrity:
            "sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "/css/application.css",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
    },
  },
  experimental: {
    payloadExtraction: false,
  },
});
