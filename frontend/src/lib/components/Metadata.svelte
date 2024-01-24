<script lang="ts">
	import { page } from '$app/stores';
	import { site } from '$lib';

	export let title: string = site.createSite.name;

	$: title = $page.data?.title
		? `${$page.data.title} - ${site.createSite.name}`
		: site.createSite.name;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={site.createSite.description} />
	<meta name="keywords" content={site.createSite.keywords} />
	<meta name="author" content={site.createSite.name} />
	<meta name="twitter:card" content={site.createSite.ogImage} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={site.createSite.description} />
	<meta name="twitter:image" content={site.createSite.ogImage} />
	<meta name="twitter:image:alt" content={site.createSite.name} />
	<meta name="twitter:creator" content={site.createSite.name} />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={site.createSite.url + $page.url.pathname} />
	<meta property="og:image" content={site.createSite.ogImage} />
	<meta property="og:image:alt" content={site.createSite.name} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:description" content={site.createSite.description} />
	<meta property="og:site_name" content={site.createSite.name} />
	<meta property="og:locale" content="EN_US" />
	<link rel="icon" type="image/svg+xml" href="%sveltekit.assets%/favicon.svg" />
	<link rel="apple-touch-icon" href="%sveltekit.assets%/favicon.svg" />
</svelte:head>
