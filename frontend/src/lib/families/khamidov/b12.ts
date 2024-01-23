import type { Base } from '$customTypes';

const b12: Base[] = [
	{
		id: 'B12A',
		name: '✶ Abdusami ...',
		dependant: 'B1G',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B12B',
		name: 'Nargis ...',
		dependant: 'B12A',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B12C',
		name: 'Abduvohid ...',
		dependant: 'B12A',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B12D',
		name: 'Bahodur ...',
		dependant: 'B12A',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default b12;
