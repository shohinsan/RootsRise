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

<div>
	<slot />
</div>

<style>
	div {
		position: relative;
		overflow-y: hidden;
	}
</style>
