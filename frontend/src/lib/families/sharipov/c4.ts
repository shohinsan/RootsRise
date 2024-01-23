import type { Base } from '$customTypes';
import { Icons } from '$assets';

const c4: Base[] = [
	{
		id: 'C4A',
		name: 'Nodira ...',
		dependant: 'C1E',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'C4B',
		name: 'Add name here',
		dependant: 'C4A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default c4;
