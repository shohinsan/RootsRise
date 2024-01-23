import type { Base } from '$customTypes';

const a10: Base[] = [
	{
		id: 'A10A',
		name: 'Parvina Ikromova',
		dependant: 'A3B',
		information: {
			birth: '1993'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A10B',
		name: 'Imron Abdulkhamidov',
		dependant: 'A10A',
		information: {
			birth: '2022'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default a10;
