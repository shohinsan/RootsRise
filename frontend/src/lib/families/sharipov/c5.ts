import type { Base } from '$customTypes';
import { Icons } from '$assets';

const c5: Base[] = [
	{
		id: 'C5A',
		name: 'Zarina ...',
		dependant: 'C1E',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'C5B',
		name: 'Add name here',
		dependant: 'C5A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default c5;
