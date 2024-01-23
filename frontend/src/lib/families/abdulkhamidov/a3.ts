import type { Base } from '$customTypes';

const a3: Base[] = [
	{
		id: 'A3A',
		name: 'Sharifa Abdulkhamidova',
		dependant: 'A1D',
		information: {
			birth: '1988'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A3B',
		name: 'Abdulhamid Abdulkhamidov',
		dependant: 'A3A',
		information: {
			birth: '1988'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A3C',
		name: 'Shukrona Abdulkhamidov',
		dependant: 'A3A',
		information: {
			birth: '1991'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'A3D',
		name: 'Sarvar Abdulkhamidov',
		dependant: 'A3A',
		information: {
			birth: '1997'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default a3;
