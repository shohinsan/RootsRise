<script>
	import '$styles/app.css';
	import { onNavigate } from '$app/navigation';
	import Metadata from '$components/Metadata.svelte';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<nav>
	<a href="/">abdulkhamidov</a> ✦
	<a href="/sharipov">sharipov</a>
</nav>

<Metadata />

<slot />

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		padding: 10px; 
		z-index: 1000; /* Set a higher z-index to ensure it's above other elements */
	}
</style>
