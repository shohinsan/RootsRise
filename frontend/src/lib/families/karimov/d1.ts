import type { Base } from '$customTypes';
import { Icons } from '$assets';

const b1: Base[] = [
	{
		id: 'D1A',
		name: 'Someone Karimov',
		image: Icons.default,
		information: {
			birth: '1933',
			death: '2023'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'D1B',
		name: 'Someone Karimova',
		dependant: 'D1A',
		image: Icons.default,
		information: {
			birth: '1941'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default b1;
