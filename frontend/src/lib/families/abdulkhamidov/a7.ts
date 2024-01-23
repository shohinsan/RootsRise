import type { Base } from '$customTypes';

const a7: Base[] = [
	{
		id: 'A7A',
		name: '✶ Farangis Karimova',
		dependant: 'A2B',
		information: {
			birth: '1988'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A6B',
		name: 'Samina Abdulkhamidova',
		dependant: 'A7A',
		information: {
			birth: '2013'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A6C',
		name: 'Tabris Abdulkhamidov',
		dependant: 'A7A',
		information: {
			birth: '2018'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default a7;
