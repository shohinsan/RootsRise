import type { Base } from '$customTypes';

const b15: Base[] = [
	{
		id: 'B15A',
		name: '✶ Abduvosid Sharipov',
		dependant: 'B1H',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B15B',
		name: 'Adiba Sharipova',
		dependant: 'B15A',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B15C',
		name: 'Abdukodir Sharipov',
		dependant: 'B15A',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B15D',
		name: 'Kamol Sharipov',
		dependant: 'B15A',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'B15E',
		name: 'Safiya Sharipov',
		dependant: 'B15A',
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default b15;
