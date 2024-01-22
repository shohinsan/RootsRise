import type { Base } from '$customTypes';
import { Icons } from '$assets';

const c3: Base[] = [
	{
		id: 'C3A',
		name: 'Mavluda ...',
		dependant: 'C1D',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'C3B',
		name: 'Add name here',
		dependant: 'C3A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default c3;