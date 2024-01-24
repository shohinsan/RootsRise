import { getMembers } from '$lib/sanity'; // Adjust the path as needed
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const person = await getMembers();
	return {
		person: person || []
	};
}) satisfies PageServerLoad;
