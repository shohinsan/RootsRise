import type { Base } from '$customTypes';

const b10: Base[] = [
	{
		id: 'B10A',
		name: 'Boirjon ...',
		dependant: 'B8C',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B10B',
		name: 'Munisa ...',
		dependant: 'B10A',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B10C',
		name: 'Shahlo ...',
		dependant: 'B10A',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
    {
        id: 'B10D',
        name: 'Bahodur ...',
        dependant: 'B10A',
        information: {
            birth: '1933'
        },
        description: {
            details: ['A short description', 'Another description']
        }
    },
    {
        id: 'B10E',
        name: 'Mashhura ...',
        dependant: 'B10A',
        information: {
            birth: '1933'
        },
        description: {
            details: ['A short description', 'Another description']
        }
    },
];

export default b10;
