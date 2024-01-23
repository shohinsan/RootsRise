import type { Base } from '$customTypes';
import { Icons } from '$assets';

const c2: Base[] = [
	{
		id: 'C2A',
		name: 'Tuyguloy ...',
		dependant: 'C1C',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'C2B',
		name: 'Komila Sharipova',
		dependant: 'C2A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'C2C',
		name: 'Habiba Sharipova',
		dependant: 'C2A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default c2;
