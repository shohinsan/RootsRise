import type { Base } from '$customTypes';
import { Icons } from '$assets';

const c9: Base[] = [
	{
		id: 'C9A',
		name: 'Maftuna ...',
		dependant: 'C1J',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'C9B',
		name: 'Add name here',
		dependant: 'C9A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default c9;
