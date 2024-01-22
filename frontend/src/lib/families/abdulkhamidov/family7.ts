import type { Base } from '$customTypes';

const family7: Base[] = [
	{
		id: '7A',
		name: 'Farangis Karimova',
		dependant: '2B',
		information: {
			birth: '1988'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: '6B',
		name: 'Samina Abdulkhamidova',
		dependant: '7A',
		information: {
			birth: '2013'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: '6C',
		name: 'Tabris Abdulkhamidov',
		dependant: '7A',
		information: {
			birth: '2018'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default family7;