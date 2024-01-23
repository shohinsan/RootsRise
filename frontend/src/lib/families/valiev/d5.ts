import type { Base } from '$customTypes';
import { Icons } from '$assets';

const d5: Base[] = [
	{
		id: 'D5A',
		name: '✶ Zulfiyamoh Valieva',
		dependant: 'D4B',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'D5B',
		name: 'Sharifjon Abdulkhamidov',
		dependant: 'D5A',
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
		id: 'D5C',
		name: 'Hurshedmoh Sharipova',
		dependant: 'D5A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'D5D',
		name: 'Equbjon Khamidov',
		dependant: 'D5A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	}
];

export default d5;
