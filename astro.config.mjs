import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeSlug from "rehype-slug";
import { rehypeAutolink } from "./src/plugins/rehype-autolink";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://amosbastian.com",
  integrations: [
    expressiveCode({
      themes: ["min-dark"],
      shikiConfig: {
        theme: "css-variables",
        wrap: true,
        skipInline: false,
        drafts: true,
      },
    }),
    mdx(),
    sitemap(),
    tailwind(),
  ],
  markdown: {
    rehypePlugins: [rehypeSlug, ...rehypeAutolink()],
    drafts: true,
  },
});
