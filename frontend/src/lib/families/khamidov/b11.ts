import type { Base } from '$customTypes';

const b11: Base[] = [
	{
		id: 'B11A',
		name: 'Huseyn ...',
		dependant: 'B8D',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
        id: 'B11B',
        name: 'Iskandar ...',
        dependant: 'B11A',
        information: {
            birth: '1933'
        },
        description: {
            details: ['A short description', 'Another description']
        }
    },
    {
        id: 'B11C',
        name: 'Rushona ...',
        dependant: 'B11A',
        information: {
            birth: '1933'
        },
        description: {
            details: ['A short description', 'Another description']
        }
    },
    {
        id: 'B11D',
        name: 'Abubakr ...',
        dependant: 'B11A',
        information: {
            birth: '1933'
        },
        description: {
            details: ['A short description', 'Another description']
        }
    },
    
];

export default b11;
