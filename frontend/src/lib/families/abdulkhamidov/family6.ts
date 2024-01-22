import type { Base } from '$customTypes';

const family6: Base[] = [
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
		name: 'Farukh Muminov',
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
		name: 'Maryam Muminova',
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
		name: 'Dovud Muminov',
		dependant: '6A',
		information: {
			birth: '2020'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default family6;