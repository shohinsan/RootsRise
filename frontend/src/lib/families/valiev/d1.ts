import type { Base } from '$customTypes';
import { Icons } from '$assets';

const d1: Base[] = [
	{
		id: 'D1A',
		name: 'Abdulhamid Valiev',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'D1B',
		name: 'Zulfiyamoh Valieva',
		dependant: 'D1A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	}
];

export default d1;
