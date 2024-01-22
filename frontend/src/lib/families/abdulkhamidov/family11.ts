import type { Base } from '$customTypes';

const family11: Base[] = [
	{
		id: '11A',
		name: 'Iqboliddin Boboev',
		dependant: '3C',
		information: {
			birth: '1990'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
    {
		id: '11B',
		name: 'Yasmina Abdulkhamidova',
		dependant: '11A',
		information: {
			birth: '2021'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
    {
		id: '11C',
		name: 'Badriddin Abdulkhamidova',
		dependant: '11A',
		information: {
			birth: '2021'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
];

export default family11;