import type { Base } from '$customTypes';

const b14: Base[] = [
	{
		id: 'B14A',
		name: '✶ Nilufar ...',
		dependant: 'B12C',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
        id: 'B14B',
        name: 'Rano ...',
        dependant: 'B14A',
        information: {
            birth: '1933'
        },
        description: {
            details: ['A short description', 'Another description']
        }
    },
    {
        id: 'B14C',
        name: 'Amid ...',
        dependant: 'B14A',
        information: {
            birth: '1933'
        },
        description: {
            details: ['A short description', 'Another description']
        }
    }
];

export default b14;
