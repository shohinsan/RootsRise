import type { Base } from '$customTypes';
import { Icons } from '$assets';

const c15: Base[] = [
	{
		id: 'C15A',
		name: 'Faridun ...',
		dependant: 'C3E',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'C15B',
		name: 'Mubina ...',
		dependant: 'C15A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'C15C',
		name: 'Muboriz ...',
		dependant: 'C15A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'C15D',
		name: 'Add name here',
		dependant: 'C15A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	}
];

export default c15;
