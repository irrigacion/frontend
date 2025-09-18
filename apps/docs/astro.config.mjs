import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		starlight({
			title: 'Irrigación',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/irrigacion' }],
			sidebar: [
				{
					label: 'Home',
					link: '/',
				},
				{
					label: 'Inicio',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Componentes',
					items: [
						{
							label: 'React',
							autogenerate: { directory: 'react' },
						},
						{
							label: 'React Native',
							autogenerate: { directory: 'react-native' },
						},
					],
				},
			],
		}),
	],
});
