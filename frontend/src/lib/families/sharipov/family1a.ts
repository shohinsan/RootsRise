import type { Base } from '$customTypes';
import { Icons } from '$assets';

const family1: Base[] = [
	{
		id: '1AAA',
		name: 'Usmonali Abdulkhamidov',
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
		id: '1AB',
		name: 'Hurshedmoh Abdulkhamidov',
		dependant: '1AAA',
		image: Icons.default,
		information: {
			birth: '1941'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
];

export default family1;
