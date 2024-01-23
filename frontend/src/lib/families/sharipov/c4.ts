import type { Base } from '$customTypes';
import { Icons } from '$assets';

const c4: Base[] = [
	{
		id: 'C4A',
		name: 'Nodira ...',
		dependant: 'C1E',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'C4B',
		name: 'Orosta Sharipova',
		dependant: 'C4A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'C4C',
		name: 'Abdukarim Sharipov',
		dependant: 'C4A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'C4D',
		name: 'Hasan Sharipov',
		dependant: 'C4A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},
	{
		id: 'C4E',
		name: 'Husein Sharipov',
		dependant: 'C4A',
		image: Icons.default,
		information: {
			birth: '1933'
		},
		description: {
			details: ['A short description', 'Another description']
		}
	},

];

export default c4;
