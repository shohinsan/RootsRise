import type { Base } from '$customTypes';
import { Icons } from '$assets';

const c14: Base[] = [
	{
		id: 'C14A',
		name: 'Firdavs ...',
		dependant: 'C3C',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
    {
        id: 'C14B',
        name: 'Farzin ...',
        dependant: 'C14A',
        image: Icons.default,
        information: {
            birth: '1933'
        },
        description: {
            details: ['more info on khamidov page', 'Another description']
        }
    },
    {
        id: 'C14C',
        name: 'Farshed ...',
        dependant: 'C14A',
        image: Icons.default,
        information: {
            birth: '1933'
        },
        description: {
            details: ['more info on khamidov page', 'Another description']
        }
    },
    {
        id: 'C14D',
        name: 'Zainab ...',
        dependant: 'C14A',
        image: Icons.default,
        information: {
            birth: '1933'
        },
        description: {
            details: ['more info on khamidov page', 'Another description']
        }
    },
    
    

];

export default c14;
