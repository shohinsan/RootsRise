import type { Base } from '$customTypes';
import { Icons } from '$assets';

const c1: Base[] = [
	{
		id: 'C1B',
		name: '✶ Usmonali Sharipov',
		dependant: 'D5C',
		image: Icons.default,
		information: {
			birth: '1941'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'C1C',
		name: 'Zoidjon Sharipov',
		dependant: 'C1B',
		image: Icons.default,
		information: {
			birth: '1941'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'C1D',
		name: 'Abdumajid Sharipov',
		dependant: 'C1B',
		information: {
			birth: '1760'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'C1E',
		name: 'Abdugafur Sharipov',
		dependant: 'C1B',
		information: {
			birth: '1760'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'C1F',
		name: 'Abduvosid Sharipov',
		dependant: 'C1B',
		information: {
			birth: '1760'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'C1G',
		name: 'Abdujabbor Sharipov',
		dependant: 'C1B',
		information: {
			birth: '1760'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},

	{
		id: 'C1H',
		name: 'Pulod Sharipov',
		dependant: 'C1B',
		information: {
			birth: '1760',
			death: '2023'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'C1I',
		name: 'Mazokir Sharipov',
		dependant: 'C1B',
		information: {
			birth: '1760',
			death: '2023'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'C1J',
		name: 'Askar Sharipov',
		dependant: 'C1B',
		information: {
			birth: '1760',
			death: '2023'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	}
];

export default c1;
