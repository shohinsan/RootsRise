<script lang="ts">
	import type { Base } from '$customTypes';
	import { InfoTab, Tree } from '$components';
	import { info, dataset } from '$stores';
	import { seed } from '$lib';
	import { utils } from '$lib';

	const abdulkhamidov: Base[] = seed.allAbdulkhamidov();
	const valiev: Base[] = seed.allValiev();
	const sharipov: Base[] = seed.allSharipov();
	const khamidov: Base[] = seed.allKhamidov();

	dataset.set(utils.addedNew([...valiev, ...abdulkhamidov, ...sharipov, ...khamidov]));

	let tab: Base | undefined;

	info.subscribe((value) => {
		tab = value;
	});
</script>

<Tree dataset={$dataset} />
<InfoTab {...tab} />
