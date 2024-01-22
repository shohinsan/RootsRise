import type { Base } from '$customTypes';

const a6: Base[] = [
	{
		id: 'A6A',
		name: 'Khusrav Muminov',
		dependant: 'A1G',
		information: {
			birth: '1997'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A6B',
		name: 'Farukh Muminov',
		dependant: 'A6A',
		information: {
			birth: '2001'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A6C',
		name: 'Maryam Muminova',
		dependant: 'A6A',
		information: {
			birth: '2013'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A6D',
		name: 'Dovud Muminov',
		dependant: 'A6A',
		information: {
			birth: '2020'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default a6;
