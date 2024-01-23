import type { Base } from '$customTypes';
import { Icons } from '$assets';

const c11: Base[] = [
    {
		id: 'C11A',
		name: '✶ Alisher ...',
		dependant: 'C2C',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
	{
		id: 'C11B',
		name: 'Safiya ...',
		dependant: 'C11A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
    {
		id: 'C11C',
		name: 'Omina ...',
		dependant: 'C11A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['more info on khamidov page', 'Another description']
		}
	},
    {
        id: 'C11D',
        name: 'Imron ...',
        dependant: 'C11A',
        image: Icons.default,
        information: {
            birth: '1933'
        },
        description: {
            details: ['more info on khamidov page', 'Another description']
        }
    },
    

];

export default c11;
