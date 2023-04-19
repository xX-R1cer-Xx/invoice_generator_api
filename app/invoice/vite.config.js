import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import Path from "path";
import { checker } from "vite-plugin-checker";

export default defineConfig({
    server: {
        host: true,
        hmr: {
            host: "localhost",
        },
    },
    plugins: [
        laravel({
            input: "resources/ts/app.tsx",
            refresh: true,
        }),
        checker({
            typescript: true,
            prettier: { prittierCommand: "--write ./resources" },
            eslint: {
                lintCommand: 'eslint "./resources"',
            },
        }),
        react(),
    ],
});
