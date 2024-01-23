import type { Base } from '$customTypes';
import { Icons } from '$assets';

const c8: Base[] = [
	{
		id: 'C8A',
		name: 'Manzura ...',
		dependant: 'C1I',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'C8B',
		name: 'Add name here',
		dependant: 'C8A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default c8;
