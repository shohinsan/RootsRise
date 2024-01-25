import { writable, type Writable } from 'svelte/store';
import type { Base } from '$customTypes';
import { Icons } from '$assets';

const values: Base[] = [
	{
		name: 'Name',
		description: 'A short description about the person',
		birth: 'birth',
		death: 'death',
		image: Icons.default
	}
];

const info: Writable<Base> = writable(values[0]); // Assuming you want to set the first element as the initial value
const dataset: Writable<Base[]> = writable([]);

export { values as default, info, dataset };
