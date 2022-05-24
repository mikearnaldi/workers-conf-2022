import "@slidev/cli";
import { setupForFile, transformAttributesToHTML } from "remark-shiki-twoslash";
import { defineConfig } from "vite";

export default defineConfig(async () => {
  const { highlighters, settings } = await setupForFile({
    theme: "vitesse-dark",
    includeJSDocInHover: true
  });
  return {
    slidev: {
      markdown: {
        markdownItSetup(md) {
          md.use((markdownit) => {
            markdownit.options.highlight = (code, lang, attrs) =>
              transformAttributesToHTML(code, [lang, attrs].join(" "), highlighters, settings);
          });
        }
      }
    }
  };
});
