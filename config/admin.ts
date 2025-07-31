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

  const getSuffix = (suffix: string) => {
    // If running locally (clientBase has a port), return suffix or 'au'
    try {
      const url = new URL(clientBase);
      if (url.port) {
        return suffix || "au";
      }
    } catch {
      // If clientBase is not a valid URL, fallback
      return suffix || "au";
    }
    // If domain, map suffix to Netlify domains
    if (suffix === "nz") {
      return "pp-landing-nz.netlify.app";
    }
    // Default to AU Netlify domain
    return "pp-landing.netlify.app";
  };

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
          let clientUrl;
          const resolved = getSuffix(suffix);

          // If running locally, resolved will be 'au' or 'nz', so use clientBase as base
          if (resolved === "au" || resolved === "nz") {
            clientUrl = `${clientBase}.${resolved}`;
            if (clientPort) {
              clientUrl += `:${clientPort}`;
            }
          } else {
            // Use the mapped Netlify domain
            clientUrl = `https://${resolved}`;
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
