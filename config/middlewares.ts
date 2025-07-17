export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      frameOptions: false,
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "frame-ancestors": [
            "'self'",
            "http://localhost:1337",
            "http://localhost:3000",
            "http://localhost:5173",
          ],
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
