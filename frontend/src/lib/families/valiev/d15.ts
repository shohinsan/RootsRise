import type { Base } from '$customTypes';
import { Icons } from '$assets';

const d15: Base[] = [
	{
		id: 'D15A',
		name: '✶ Bonujon ...',
		image: Icons.default,
		dependant: 'D3E',
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
    {
        id: 'D15B',
        name: '✶ Anzurat ...',
        image: Icons.default,
        dependant: 'D3E',
        information: {
            birth: '1933'/*  */
        },
        description: {
            details: ['more info on khamidov page', 'Another description']
        }
    }
];

export default d15;
