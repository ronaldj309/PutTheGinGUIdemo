import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    server: {
      host: true,
      // Same port on host and in the container so Vite's "Local:" line
      // is the URL that actually works (http://localhost:5188).
      port: 5188,
      strictPort: true,
      allowedHosts: true,
      // Native fs events do not propagate into Linux containers.
      watch: env.DOCKER
        ? { usePolling: true, interval: 300 }
        : undefined,
    },
  };
});
