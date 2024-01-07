import type { Base } from '$customTypes';

export const family6: Base[] = [
	{
		id: '6A',
		name: 'Khusrav Muminov',
		dependant: '1G',
		information: {
			birth: '1997'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: '6B',
		name: 'Farukh Abdulhamidov',
		dependant: '6A',
		information: {
			birth: '2001'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: '6C',
		name: 'Maryam Abdulhamidov',
		dependant: '6A',
		information: {
			birth: '2013'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: '6D',
		name: 'Dovud Abdulkhamidov',
		dependant: '6A',
		information: {
			birth: '2020'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];
