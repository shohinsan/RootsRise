<script>
	import '$styles/app.css';
	import { onNavigate } from '$app/navigation';
	import { Metadata } from '$components';

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
	<a href="/">abdulkhamidov</a> •
	<a href="/khamidov">khamidov</a> •
	<!-- <a href="/karimov">karimov</a> • -->
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
		z-index: 100;
		backdrop-filter: blur(10px);
		font-family: 'SFProFont', sans-serif; 
	}
</style>
