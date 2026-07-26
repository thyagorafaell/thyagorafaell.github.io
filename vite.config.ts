import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
    server: {
        host: "::",
        port: 8080,
    },
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        ssr: 'src/server.jsx',
        rollupOptions: {
            input: {
                client: './index.html',
                server: 'src/server.jsx'
            }
        }
    }
}));
