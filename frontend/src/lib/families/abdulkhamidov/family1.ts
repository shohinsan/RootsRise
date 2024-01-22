import type { Base } from '$customTypes';
import { Icons } from '$assets';

const family1: Base[] = [
	{
		id: '1A',
		name: 'Sharifjon Abdulkhamidov',
		image: Icons.default,
		information: {
			birth: '1933',
			death: '2023'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: '1B',
		name: 'Sharofatoi Abdulkhamidov',
		dependant: '1A',
		image: Icons.default,
		information: {
			birth: '1941'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: '1C',
		name: 'Abduvali Abdulkhamidov',
		dependant: '1B',
		image: Icons.default,
		information: {
			birth: '1963'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: '1D',
		name: 'Abdumalik Abdulkhamidov',
		dependant: '1B',
		information: {
			birth: '1760'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: '1E',
		name: 'Dilshod Abdulkhamidov',
		dependant: '1B',
		information: {
			birth: '1760'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: '1F',
		name: 'Jamshed Abdulkhamidov',
		dependant: '1B',
		information: {
			birth: '1760'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: '1G',
		name: 'Lola Abdulkhamidova',
		dependant: '1B',
		information: {
			birth: '1760'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default family1;
