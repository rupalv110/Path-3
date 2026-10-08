import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { host: '0.0.0.0', port: 3000, strictPort: true, allowedHosts: ['3000-icmghf723oucdd9xotffk-3efdf3cd.sg2.manus.computer'] },
  preview: { host: '0.0.0.0', port: 3000, strictPort: true, allowedHosts: ['3000-icmghf723oucdd9xotffk-3efdf3cd.sg2.manus.computer'] },
});
