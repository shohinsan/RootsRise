<script lang="ts">
	import { Cell } from '$components';
	import type { Base } from '$customTypes';
	import { info } from '$stores';
	import { page } from '$app/stores';

	export let dataset: Base[] = [];

	let person = $page.data.person;
	$: if (person) {
		dataset = person;
	}

	function handleClick(event: Event, member: Base) {
		event.preventDefault();
		info.set(member as Base);
	}
</script>

<Cell class="treeRoot" members={dataset} let:member>
	<a href={$page.url.pathname} on:click={(event) => handleClick(event, member)}>
		{member.name}
	</a>
</Cell>

<style>
	:global(.treeRoot) {
		text-align: center;
		overflow-x: scroll;
		padding: 2rem;
	}
</style>
