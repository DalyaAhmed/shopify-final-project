import { defineConfig } from 'vite';
import path from 'path';

const ROOT = path.resolve('../../../');

export default defineConfig(() => ({
    base: '/',
    server: {
        protocol: 'ws',
        host: 'localhost',
        port: 5173,
    },
    build: {
        emptyOutDir: false,
        manifest: true,
        outDir: 'assets',
        minify: true, // Enable minification
        rollupOptions: {
            input: [
                'resources/js/app.js',
                'resources/scss/app.scss',
            ],
            output: {
                entryFileNames: `[name].js`,
                chunkFileNames: `[name].js`,
                assetFileNames: `[name].[ext]`,
            },
        },
    },
    resolve: {
        alias: [
            {
                find: /~(.+)/,
                replacement: path.join(process.cwd(), 'node_modules', '$1'),
            },
        ],
    },
}));
