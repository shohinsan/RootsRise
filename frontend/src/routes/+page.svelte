<script lang="ts">
	import type { Base } from '$customTypes';
	import { InfoTab, Tree } from '$components';
	import { info, dataset } from '$stores';
	import { utils } from '$lib';
	import { abdulkhamidov, khamidov, sharipov, valiev } from '$lib/families';

	const data: Base[] = concatenate(abdulkhamidov, khamidov, sharipov, valiev);

	dataset.set(utils.addedNew(data));

	let activeTab: Base | undefined;

	info.subscribe((value) => {
		activeTab = value;
	});

	function concatenate(...arrays: Base[][]): Base[] {
		return arrays.reduce((result, array) => [...result, ...array], []);
	}
</script>

<Tree dataset={$dataset} />
<InfoTab {...activeTab} />
