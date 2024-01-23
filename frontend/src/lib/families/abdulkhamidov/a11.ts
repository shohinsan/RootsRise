import type { Base } from '$customTypes';

const a11: Base[] = [
	{
		id: 'A11A',
		name: '✶ Iqboliddin Boboev',
		dependant: 'A3C',
		information: {
			birth: '1990'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A11B',
		name: 'Yasmina Abdulkhamidova',
		dependant: 'A11A',
		information: {
			birth: '2021'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A11C',
		name: 'Badriddin Abdulkhamidova',
		dependant: 'A11A',
		information: {
			birth: '2021'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default a11;
