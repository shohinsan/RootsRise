import type { Base } from '$customTypes';

const family10: Base[] = [
	{
		id: '10A',
		name: 'Parvina Ikromova',
		dependant: '3B',
		information: {
			birth: '1993'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: '10B',
		name: 'Imron Abdulkhamidov',
		dependant: '10A',
		information: {
			birth: '2022'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default family10;