import type { Base } from '$customTypes';
import { Icons } from '$assets';

const b4: Base[] = [
	{
		id: 'B4A',
		name: '✶ Sanat Ayubi',
		dependant: 'B2C',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B4B',
		name: 'Aida Ayubi',
		dependant: 'B4A',
		image: Icons.default,
		information: {
			birth: '1941'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B4C',
		name: 'Amir Ayubi',
		dependant: 'B4A',
		image: Icons.default,
		information: {
			birth: '1963'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default b4;
