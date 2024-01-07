import type { Base } from '$customTypes';

export const family2: Base[] = [
	{
		id: '2A',
		name: 'Nasiba Abdulkhamidov',
		dependant: '1C',
		information: {
			birth: '1967'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: '2B',
		name: 'Sokhib Abdulkhamidov',
		dependant: '2A',
		information: {
			birth: '1988'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: '2C',
		name: 'Shokhrukh Abdulkhamidov',
		dependant: '2A',
		information: {
			birth: '1991'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: '2D',
		name: 'Shohin Abdulkhamidov',
		dependant: '2A',
		information: {
			birth: '1997'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];
