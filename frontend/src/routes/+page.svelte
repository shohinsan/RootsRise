<script lang="ts">
	import About from '$components/About.svelte';
	import Tree from '$components/Tree.svelte';
	import { info, dataset } from '$stores';
	import { family } from '$lib/seed';
	import { addedNew } from '$lib/utils';
	import type { Base } from '$customTypes';

	dataset.set(addedNew(family));

	let tab: Base | undefined;

	info.subscribe((value) => {
		tab = value;
	});
</script>

<main>
	<Tree dataset={$dataset} />
	<About {...tab} />
</main>

<style>
	main {
		text-align: center;
		position: relative;
		overflow-y: hidden;
		overflow-x: scroll;
		padding: 2rem;
	}
</style>
