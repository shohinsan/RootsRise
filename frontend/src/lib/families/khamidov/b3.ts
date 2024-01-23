import type { Base } from '$customTypes';
import { Icons } from '$assets';

const b3: Base[] = [
	{
		id: 'B3A',
		name: '✶ Malika Khamidova',
		dependant: 'B2B',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B3B',
		name: 'Bezhan Khamidov',
		dependant: 'B3A',
		image: Icons.default,
		information: {
			birth: '1941'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B3C',
		name: 'Amila Khamidova',
		dependant: 'B3A',
		image: Icons.default,
		information: {
			birth: '1963'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default b3;
