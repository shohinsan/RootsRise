import type { Base } from '$customTypes';
import { Icons } from '$assets';

const d10: Base[] = [
	{
		id: 'D10A',
		name: '✶ Zainabbibi ...',
		image: Icons.default,
		dependant: 'D3B',
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'D10B',
		name: 'Muharramoy ...',
		image: Icons.default,
		dependant: 'D10A',
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'D10C',
		name: 'Marhamatoy ...',
		image: Icons.default,
		dependant: 'D10A',
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'D10D',
		name: 'Abduvohid Valiev',
		image: Icons.default,
		dependant: 'D10A',
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'D10E',
		name: 'Karomatoy Valieva',
		image: Icons.default,
		dependant: 'D10A',
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	}
];

export default d10;
