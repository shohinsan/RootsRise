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

<Metadata />

<main>
	<slot />
</main>

<style>
	main {
		text-align: center;
		position: relative;
		overflow-y: hidden;
		overflow-x: scroll;
		padding: 2rem;
		font-family: 'SFProFont', sans-serif;
	}
</style>
