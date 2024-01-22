import type { Base } from '$customTypes';
import { Icons } from '$assets';

const c6: Base[] = [
	{
		id: 'C6A',
		name: 'Yanvaroy ...',
		dependant: 'C1G',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'C6B',
		name: 'Okil Sharipov',
		dependant: 'C6A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'C6C',
		name: 'Kirom Sharipov',
		dependant: 'C6A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'C6D',
		name: 'Shahlo Sharipova',
		dependant: 'C6A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default c6;
