import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// ფაილისა და დირექტორიის paths განსაზღვრა
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// eslint კონფიგურაცია
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // სხვა წესები
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
