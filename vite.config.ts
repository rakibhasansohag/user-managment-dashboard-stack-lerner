import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: ['babel-plugin-react-compiler'],
			},
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	css: {
		postcss: {
			plugins: [tailwindcss, autoprefixer],
		},
	},
});
