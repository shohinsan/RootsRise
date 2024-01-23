import type { Base } from '$customTypes';
import { Icons } from '$assets';

const b5: Base[] = [
	{
		id: 'B5A',
		name: '✶ Nekruz Khamidov',
		dependant: 'B2D',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B5B',
		name: 'Masrur Khamidov',
		dependant: 'B5A',
		image: Icons.default,
		information: {
			birth: '1941'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B5C',
		name: 'Komil Khamidov',
		dependant: 'B5A',
		image: Icons.default,
		information: {
			birth: '1963'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default b5;
