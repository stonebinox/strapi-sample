// Function to generate preview pathname based on content type and document
const getPreviewPathname = (uid, { locale, document }): string => {
  const { slug } = document;

  // Handle different content types with their specific URL patterns
  switch (uid) {
    // Handle pages with predefined routes
    case "api::page.page":
      return slug;
    // Handle blog articles
    case "api::article.article": {
      if (!slug) {
        return "/blog"; // Blog listing page
      }
      return `/blog/${slug}`; // Individual article page
    }
    default: {
      return null;
    }
  }
};

export default ({ env }) => {
  // Get environment variables
  const clientBase = env("CLIENT_URL"); // e.g. http://prontopilates.com
  const clientPort = env("CLIENT_PORT") || null;
  const previewSecret = env("PREVIEW_SECRET"); // Secret key for preview authentication

  return {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
    apiToken: {
      salt: env("API_TOKEN_SALT"),
    },
    transfer: {
      token: {
        salt: env("TRANSFER_TOKEN_SALT"),
      },
    },
    secrets: {
      encryptionKey: env("ENCRYPTION_KEY"),
    },
    flags: {
      nps: env.bool("FLAG_NPS", true),
      promoteEE: env.bool("FLAG_PROMOTE_EE", true),
    },
    preview: {
      enabled: true, // Enable preview functionality
      config: {
        allowedOrigins: [
          "http://localhost:3000",
          "http://pronto.com.au:3000",
          "http://pronto.com.nz:3000",
          "https://pp-landing.netlify.app", // for au region
          "https://pp-landing-nz.netlify.app", // for nz region
        ], // we edit these depending on when we edit stuff
        async handler(uid, { documentId, locale, status }) {
          // Fetch the complete document from Strapi
          const document = await strapi.documents(uid).findOne({ documentId });

          // Generate the preview pathname based on content type and document
          const pathname = getPreviewPathname(uid, { locale, document });

          // Disable preview if the pathname is not found
          if (!pathname) {
            return null;
          }

          // Build clientUrl and allowedOrigins dynamically using domainSuffix
          const suffix = document.domainSuffix || "au";
          let clientUrl = `${clientBase}.${suffix}`;

          if (clientPort) {
            clientUrl += `:${clientPort}`;
          }

          // Use Next.js draft mode passing it a secret key and the content-type status
          const urlSearchParams = new URLSearchParams({
            url: pathname,
            secret: previewSecret,
            status,
          });

          return `${clientUrl}/api/preview?${urlSearchParams}`;
        },
      },
    },
  };
};
