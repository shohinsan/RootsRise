import type { Base } from '$customTypes';

const a8: Base[] = [
	{
		id: 'A8A',
		name: '✶ Zulola Ubaydulloeva',
		dependant: 'A2C',
		information: {
			birth: '1997'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A8B',
		name: 'Nadine Abdulkhamidova',
		dependant: 'A8A',
		information: {
			birth: '2020'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default a8;
