import type { Base } from '$customTypes';

const a4: Base[] = [
	{
		id: 'A4A',
		name: '✶ Shohida Abdulhamidova',
		dependant: 'A1E',
		information: {
			birth: '1970'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A4B',
		name: 'Ahror Abdulhamidov',
		dependant: 'A4A',
		information: {
			birth: '1997'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A4C',
		name: 'Romuz Abdulhamidov',
		dependant: 'A4A',
		information: {
			birth: '2001'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A4D',
		name: 'Ansor Abdulhamidov',
		dependant: 'A4A',
		information: {
			birth: '2013'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A4E',
		name: 'Matin Abdulkhamidov',
		dependant: 'A4A',
		information: {
			birth: '2020'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default a4;
