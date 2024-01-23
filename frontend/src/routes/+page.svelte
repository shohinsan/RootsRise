<script lang="ts">
	import type { Base } from '$customTypes';
	import { InfoTab, Tree } from '$components';
	import { info, dataset } from '$stores';
	import { seed } from '$lib';
	import { utils } from '$lib';

	const data: Base[] = [
		...seed.allAbdulkhamidov(),
		...seed.allValiev(),
		...seed.allSharipov(),
		...seed.allKhamidov()
	];

	dataset.set(utils.addedNew(data));

	let activeTab: Base | undefined;

	info.subscribe((value) => {
		activeTab = value;
	});
</script>

<Tree dataset={$dataset} />
<InfoTab {...activeTab} />
