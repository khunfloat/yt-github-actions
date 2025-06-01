import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ใช้ compat เพื่อใช้ config แบบเก่าในระบบใหม่
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // แปลง config เก่ามาใช้งาน
  ...compat.extends([
    "next/core-web-vitals",
    "next/typescript",
    "prettier", // เพิ่ม prettier ที่คุณเคยใช้ใน .eslintrc
  ]),

  // Custom rules (แบบ flat config)
  {
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },
];
