import type { Base } from '$customTypes';
import { Icons } from '$assets';

const b2: Base[] = [
	{
		id: 'B2A',
		name: 'Gulchehra Khamidova',
		dependant: 'B1C',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B2B',
		name: 'Nasim Khamidov',
		dependant: 'B2A',
		image: Icons.default,
		information: {
			birth: '1941'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B2C',
		name: 'Mahbuba Khamidova',
		dependant: 'B2A',
		image: Icons.default,
		information: {
			birth: '1963'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B2D',
		name: 'Zulfiya Khamidova',
		dependant: 'B2A',
		information: {
			birth: '1760'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B2E',
		name: 'Aziz Khamidov',
		dependant: 'B2A',
		information: {
			birth: '1760'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default b2;
