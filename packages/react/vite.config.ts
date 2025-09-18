import { defineConfig } from 'vite';
import { createViteConfig } from '@irrigacion/config/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(
	createViteConfig(__dirname, {
		name: '@irrigacion/react',
		formats: ['es', 'cjs'],
	}),
);
