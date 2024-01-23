import type { Base } from '$customTypes';
import { Icons } from '$assets';

const d6: Base[] = [
	{
		id: 'D6A',
		name: '✶ Bibisoro ...',
		image: Icons.default,
        dependant: 'D4D',
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	}
];

export default d6;
