import type { Base } from '$customTypes';

const family4: Base[] = [
	{
		id: '4A',
		name: 'Shohida Abdulhamidova',
		dependant: '1E',
		information: {
			birth: '1970'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: '4B',
		name: 'Ahror Abdulhamidov',
		dependant: '4A',
		information: {
			birth: '1997'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: '4C',
		name: 'Romuz Abdulhamidov',
		dependant: '4A',
		information: {
			birth: '2001'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: '4CD',
		name: 'Ansor Abdulhamidov',
		dependant: '4A',
		information: {
			birth: '2013'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: '4E',
		name: 'Matin Abdulkhamidov',
		dependant: '4A',
		information: {
			birth: '2020'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default family4;