import { writable, type Writable } from 'svelte/store';
import type { Base } from '$customTypes';
import { Icons } from '$assets';

const values: Base = {
	name: 'Name',
	birth: 'birth',
	death: 'death',
	details: 'A short description about the person',
	image: Icons.default
};

const info: Writable<Base> = writable(values);
const dataset: Writable<Base[]> = writable([]);

export { values as default, info, dataset };
