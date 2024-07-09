/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  semi: true,
  trailingComma: "all",
  singleQuote: false,
  printWidth: 120,
  tailwindConfig: "./tailwind.config.mjs",
};
