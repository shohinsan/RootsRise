import type { PageServerLoad } from './$types';
import { abdulkhamidov, khamidov, sharipov, valiev } from '$lib/families';
import type { Base } from '$customTypes';

function concatenate(...arrays: Base[][]): Base[] {
	return arrays.reduce((result, array) => [...result, ...array], []);
}

export const load = (async () => {
	const data = concatenate(abdulkhamidov, khamidov, sharipov, valiev);
	return {
		member: data || []
	};
}) satisfies PageServerLoad;
