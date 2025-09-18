/// <reference types="vitest" />
import path from 'node:path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function createViteConfig(
	packageRoot: string,
	opts?: {
		name?: string;
		formats?: Array<'es' | 'cjs' | 'umd'>;
	},
) {
	const name = opts?.name;
	const formats = opts?.formats ?? ['es', 'cjs'];

	return {
		plugins: [
			react(),
			dts({
				tsconfigPath: path.resolve(packageRoot, 'tsconfig.json'),
				insertTypesEntry: true,
			}),
			cssInjectedByJsPlugin(),
		],
		build: {
			emptyOutDir: true,
			sourcemap: true,
			lib: {
				entry: path.resolve(packageRoot, 'src/index.tsx'),
				formats,
				name: name ?? undefined,
				fileName: (format) => `index.${format === 'es' ? 'esm' : 'cjs'}.js`,
			},
			rollupOptions: {
				external: ['react', 'react-dom', 'react/jsx-runtime'],
			},
		},
		test: {
			globals: true,
			environment: 'jsdom',
			setupFiles: path.resolve(__dirname, './setup-tests.ts'),
			css: true,
			coverage: {
				provider: 'v8',
				reporter: ['text', 'json', 'html'],
			},
		},
	};
}
