import { dev } from '$app/environment';
import { Icons } from './assets';

class Site {
	name: string;
	url: URL;
	ogImage: string;
	description: string;
	keywords: string;

	constructor(name: string, url: URL, ogImage: string, description: string, keywords: string) {
		this.name = name;
		this.url = url;
		this.ogImage = ogImage;
		this.description = description;
		this.keywords = keywords;
	}
}

const createSite = new Site(
	'Abdulkhamidov Family Tree',
	new URL(dev ? 'http://localhost:5173' : 'https://abdulkhamidov.pages.dev'),
	Icons.default,
	'This is a family tree of the Abdulkhamidov family.',
	'web development, svelte, portfolio'
);

const site = {
	createSite
};

export default site;
