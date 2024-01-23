import type { Base } from '$customTypes';
import { Icons } from '$assets';

const c12: Base[] = [
	{
		id: 'C12A',
		name: 'Shuhrat ...',
		dependant: 'C1D',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'C12B',
		name: 'Omilhon ...',
		dependant: 'C10A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	}
];

export default c12;
