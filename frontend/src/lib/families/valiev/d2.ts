import type { Base } from '$customTypes';
import { Icons } from '$assets';

const d2: Base[] = [
	{
		id: 'D2A',
		name: '✶ Nusratbonu ...',
		dependant: 'D1A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'D2B',
		name: 'Toshikaro Valiev',
		dependant: 'D2A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'D2C',
		name: 'Sobir Valiev',
		dependant: 'D2A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'D2D',
		name: 'Olim Valiev',
		dependant: 'D2A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	}
];

export default d2;
