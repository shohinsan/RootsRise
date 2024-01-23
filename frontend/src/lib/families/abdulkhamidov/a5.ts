import type { Base } from '$customTypes';

const a5: Base[] = [
	{
		id: 'A5A',
		name: '✶ Nasiba Abdulhamidova',
		dependant: 'A1F',
		information: {
			birth: '1997'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A5B',
		name: 'Osim Abdulhamidov',
		dependant: 'A5A',
		information: {
			birth: '2001'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A5C',
		name: 'Oisha Abdulhamidov',
		dependant: 'A5A',
		information: {
			birth: '2013'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default a5;
