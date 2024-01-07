import { writable, type Writable } from 'svelte/store';
import type { Base } from '$customTypes';
import { Icons } from '$assets';

const values: Base = {
	name: 'Name',
	information: {
		birth: 'birth - death'
	},
	description: { 
        details: 'A short description about the person' 
    },
	image: Icons.default,
};

export const info: Writable<Base> = writable(values);
export const dataset: Writable<Base[]> = writable([]);
