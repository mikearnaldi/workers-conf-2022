import "@slidev/cli";
import ts from "typescript";
import { defineConfig } from "vite";

const tsCompilerOptions: ts.CompilerOptions = {
  target: ts.ScriptTarget.ES2015,
  strict: true
};

export default defineConfig(async () => {
  const { markdownItShikiTwoslashSetup } = await import("markdown-it-shiki-twoslash");

  const shiki = await markdownItShikiTwoslashSetup({
    theme: "vitesse-dark",
    includeJSDocInHover: true,
    defaultCompilerOptions: tsCompilerOptions
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
