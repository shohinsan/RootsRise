import { createClient } from '@sanity/client';
import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false,
	apiVersion: '2023-03-20'
});

export async function getMembers() {
	return await client.fetch(/* groq */ `*[
        _type == "person"
    ]{
        id,
        name,
		dependant,
		birth,
		death,
		details,
	}`);
}

export default client;
