import type { Base } from '$customTypes';

const b8: Base[] = [
	{
		id: 'B8A',
		name: '✶ Burhonjon Khamidov',
		dependant: 'B1F',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B8B',
		name: 'Khuseyn Khamidov',
		dependant: 'B8A',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B8C',
		name: 'Parvina Khamidova',
		dependant: 'B8A',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B8D',
		name: 'Robiya Khamidova',
		dependant: 'B8A',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default b8;
