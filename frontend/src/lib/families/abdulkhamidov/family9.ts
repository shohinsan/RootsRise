import type { Base } from '$customTypes';

const family9: Base[] = [
	{
		id: '9A',
		name: 'Nilufar Abdulkhamidova',
		dependant: '5B',
		information: {
			birth: '1993'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
    {
		id: '9B',
		name: 'Nushofarin Abdulkhamidova',
		dependant: '9A',
		information: {
			birth: '2021'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
];

export default family9;