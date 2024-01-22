import type { Base } from '$customTypes';

const family3: Base[] = [
	{
		id: '3A',
		name: 'Sharifa Abdulkhamidova',
		dependant: '1D',
		information: {
			birth: '1988'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: '3B',
		name: 'Abdulhamid Abdulkhamidov',
		dependant: '3A',
		information: {
			birth: '1988'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: '3C',
		name: 'Shukrona Abdulkhamidov',
		dependant: '3A',
		information: {
			birth: '1991'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: '3D',
		name: 'Sarvar Abdulkhamidov',
		dependant: '3A',
		information: {
			birth: '1997'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default family3;
