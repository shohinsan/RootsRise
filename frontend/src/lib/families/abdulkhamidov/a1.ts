import type { Base } from '$customTypes';
import { Icons } from '$assets';

const a1: Base[] = [
	{
		id: 'A1B',
		name: '✶ Sharofatoi Abdulkhamidov',
		dependant: 'D5B',
		image: Icons.default,
		information: {
			birth: '1941'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A1C',
		name: 'Abduvali Abdulkhamidov',
		dependant: 'A1B',
		image: Icons.default,
		information: {
			birth: '1963'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A1D',
		name: 'Abdumalik Abdulkhamidov',
		dependant: 'A1B',
		information: {
			birth: '1760'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A1E',
		name: 'Dilshod Abdulkhamidov',
		dependant: 'A1B',
		information: {
			birth: '1760'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A1F',
		name: 'Jamshed Abdulkhamidov',
		dependant: 'A1B',
		information: {
			birth: '1760'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A1G',
		name: 'Lola Abdulkhamidova',
		dependant: 'A1B',
		information: {
			birth: '1760'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default a1;
