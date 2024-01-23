import type { Base } from '$customTypes';
import { Icons } from '$assets';

const c12: Base[] = [
	{
		id: 'C12A',
		name: '✶ Jonona ...',
		dependant: 'C3B',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'C12B',
		name: 'Faroz ...',
		dependant: 'C12A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	}
];

export default c12;
