import type { Base } from '$customTypes';
import { Icons } from '$assets';

const b6: Base[] = [
	{
		id: 'B6A',
		name: '✶ Shukhrat Khamidov',
		dependant: 'B1D',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B6B',
		name: 'Anisa Khamidova',
		dependant: 'B6A',
		image: Icons.default,
		information: {
			birth: '1941'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B6C',
		name: 'Shirin Khamidova',
		dependant: 'B6A',
		image: Icons.default,
		information: {
			birth: '1963'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B6D',
		name: 'Abubakr Khamidov',
		dependant: 'B6A',
		image: Icons.default,
		information: {
			birth: '1963'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default b6;
