import type { Base } from '$customTypes';
import { Icons } from '$assets';

const c7: Base[] = [
	{
		id: 'C7A',
		name: 'Zainura ...',
		dependant: 'C1H',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'C7C',
		name: 'Sabrina Sharipova',
		dependant: 'C7A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'C7D',
		name: 'Safina Sharipova',
		dependant: 'C7A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'C7E',
		name: 'Ato Sharipov',
		dependant: 'C7A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default c7;
