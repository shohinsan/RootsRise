<script lang="ts">
	import type { Base } from '$customTypes';
	import { About, Tree } from '$components';
	import { info, dataset } from '$stores';
	import { seed } from '$lib';
	import { utils } from '$lib';

	const fam2: Base[] = seed.allSharipov();
	const fams: Base[] = [...fam2];

	dataset.set(utils.addedNew(fams));

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
