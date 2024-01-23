import type { Base } from '$customTypes';
import { Icons } from '$assets';

const c10: Base[] = [
    {
		id: 'C10A',
		name: 'Shuhrat ...',
		dependant: 'C2B',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'C10B',
		name: 'Omilhon ...',
		dependant: 'C10A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
];

export default c10;
