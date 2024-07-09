import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeSlug from "rehype-slug";
import { rehypeAutolink } from "./src/plugins/rehype-autolink";

// https://astro.build/config
export default defineConfig({
  site: "https://amosbastian.com",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    rehypePlugins: [rehypeSlug, ...rehypeAutolink()],
    drafts: true,
    shikiConfig: { theme: "css-variables" },
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true,
  },
});
