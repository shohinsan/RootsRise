import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/lib/components',
			$lib: 'src/lib',
			$stores: 'src/lib/stores',
			$customTypes: 'src/app.d.ts',
			$assets: 'src/lib/assets',
			$family: 'src/lib/families',
			$styles: 'src/styles'
		}
	}
};

export default config;
