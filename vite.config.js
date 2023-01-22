import react from "@vitejs/plugin-react";

// vite.config.js
import { defineConfig } from "vite";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
    // omit
    plugins: [react()],
});
