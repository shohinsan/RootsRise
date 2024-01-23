// {
// 	id: 'D1A',
// 	name: 'Abdulhamid Valiev',
// 	image: Icons.default,
// 	information: {
// 		birth: '1933'
// 	},
// 	description: {
// 		details: ['more info on khamidov page', 'Another description']
// 	}
// },

import type { Base } from '$customTypes';
import { Icons } from '$assets';

const d4: Base[] = [
	{
		id: 'D4A',
		name: '✶ Hurshedmoh ...',
		dependant: 'D3B',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'D4B',
		name: 'Abdulhamid Valiev',
		dependant: 'D4A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'D4C',
		name: 'Ashurmat Valiev',
		dependant: 'D4A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'D4D',
		name: 'Abdulaziz Valiev',
		dependant: 'D4A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'D4E',
		name: 'Hunzodamoh Valieva',
		dependant: 'D4A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'D4F',
		name: 'Anzuratmoh Valieva',
		dependant: 'D4A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'D4G',
		name: "Is'hok Valiev",
		dependant: 'D4A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	}
];

export default d4;
