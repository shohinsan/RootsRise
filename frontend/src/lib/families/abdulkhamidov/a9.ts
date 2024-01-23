import type { Base } from '$customTypes';

const a9: Base[] = [
	{
		id: 'A9A',
		name: 'Nilufar Abdulkhamidova',
		dependant: 'A5B',
		information: {
			birth: '1993'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A9B',
		name: 'Nushofarin Abdulkhamidova',
		dependant: 'A9A',
		information: {
			birth: '2021'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default a9;
