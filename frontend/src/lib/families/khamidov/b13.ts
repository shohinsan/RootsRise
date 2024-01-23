import type { Base } from '$customTypes';

const b13: Base[] = [
	{
		id: 'B13A',
		name: '✶ Sherzod ...',
		dependant: 'B12B',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B13B',
		name: 'Nozanin ...',
		dependant: 'B13A',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
        id: 'B13C',
        name: 'Javohir ...',
        dependant: 'B13A',
        information: {
            birth: '1933'
        },
        description: {
            details: ['A short description', 'Another description']
        }
    },
    {
        id: 'B13D',
        name: 'Aminjon ...',
        dependant: 'B13A',
        information: {
            birth: '1933'
        },
        description: {
            details: ['A short description', 'Another description']
        }
    },
];

export default b13;
