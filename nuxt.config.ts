// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    config: {
      theme: {
        container: {
          padding: {
            DEFAULT: "1rem",
            sm: "2rem",
            lg: "4rem",
            xl: "5rem",
            "2xl": "6rem",
          },
          center: true,
          screens: {
            sm: "540px",
            // => @media (min-width: 640px) { ... }
            md: "668px",
            // => @media (min-width: 768px) { ... }
            lg: "924px",
            // => @media (min-width: 1024px) { ... }
            xl: "1180px",
            // => @media (min-width: 1280px) { ... }
            "2xl": "1336px",
            // => @media (min-width: 1536px) { ... }
          },
        },
      },
    },
  },
});
