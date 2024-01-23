import type { Base } from '$customTypes';
import { Icons } from '$assets';

const c7: Base[] = [
	{
		id: 'C7A',
		name: 'Zainura ...',
		dependant: 'C1H',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'C7B',
		name: 'Add name here',
		dependant: 'C7A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default c7;
