import "@slidev/cli";
import { defineConfig } from "vite";

export default defineConfig(async () => {
  const { markdownItShikiTwoslashSetup } = await import("markdown-it-shiki-twoslash");

  const shiki = await markdownItShikiTwoslashSetup({
    theme: "vitesse-dark",
    includeJSDocInHover: true
  });

  return {
    server: { hmr: { clientPort: process.env.GITPOD_WORKSPACE_ID ? 443 : undefined } },
    slidev: {
      markdown: {
        markdownItSetup(md) {
          md.use(shiki);
        }
      }
    }
  };
});
