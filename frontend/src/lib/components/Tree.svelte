<script lang="ts">
	import { Cell } from '$components';
	import type { Base } from '$customTypes';
	import { info } from '$stores';

	export let dataset: Base[] = [];

	function handleClick(event: Event, member: Base) {
		event.preventDefault();
		info.set(member as Base);
	}
</script>

<Cell class="treeRoot" members={dataset} let:member>
	<a href="/" on:click={(event) => handleClick(event, member)}>
		{member.name}
	</a>
</Cell>

<style>
	:global(.treeRoot) {
		text-align: center;
		position: relative;
		overflow-y: hidden;
		overflow-x: scroll;
		padding: 2rem;
	}
</style>
