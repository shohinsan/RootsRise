import type { Base } from '$customTypes';
import { Icons } from '$assets';

const b1: Base[] = [
	{
		id: 'B1A',
		name: 'Ekubjon Khamidov',
		image: Icons.default,
		information: {
			birth: '1933',
			death: '2010'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B1B',
		name: 'Rano Khamidova',
		dependant: 'B1A',
		image: Icons.default,
		information: {
			birth: '1941',
			death: '2015'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B1C',
		name: 'Saidjon Khamidov',
		dependant: 'B1B',
		image: Icons.default,
		information: {
			birth: '1963'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B1D',
		name: 'Takhmina Khamidova',
		dependant: 'B1B',
		information: {
			birth: '1760'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B1E',
		name: 'Nasiba Abdulkhamidova',
		dependant: 'B1B',
		information: {
			birth: '1760'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B1F',
		name: 'Matluba Khamidova',
		dependant: 'B1B',
		information: {
			birth: '1760'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B1G',
		name: 'Manzura Khamidova',
		dependant: 'B1B',
		information: {
			birth: '1760'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B1H',
		name: 'Zarina Khamidova',
		dependant: 'B1B',
		information: {
			birth: '1760'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default b1;
