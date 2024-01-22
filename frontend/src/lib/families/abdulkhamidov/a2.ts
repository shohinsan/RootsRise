import type { Base } from '$customTypes';

const a2: Base[] = [
	{
		id: 'A2A',
		name: 'Nasiba Abdulkhamidov',
		dependant: 'A1C',
		information: {
			birth: '1967'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A2B',
		name: 'Sokhib Abdulkhamidov',
		dependant: 'A2A',
		information: {
			birth: '1988'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A2C',
		name: 'Shokhrukh Abdulkhamidov',
		dependant: 'A2A',
		information: {
			birth: '1991'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A2D',
		name: 'Shohin Abdulkhamidov',
		dependant: 'A2A',
		information: {
			birth: '1997'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default a2;
