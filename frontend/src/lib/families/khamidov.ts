import { Icons } from '$assets';
import { utils } from '$lib';

const khamidov = [
	{
		id: 'B1B',
		name: '✶ Rano Khamidova',
		dependant: 'D5D',
		image: Icons.default,
		birth: utils.unknown(new Date('1941')),
		death: utils.unknown(new Date('2015')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B1C',
		name: 'Saidjon Khamidov',
		dependant: 'B1B',
		image: Icons.default,
		birth: utils.format(new Date('04-01-1954')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B1D',
		name: 'Takhmina Khamidova',
		dependant: 'B1B',
		birth: utils.format(new Date('08-28-1978')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B1E',
		name: 'Nasiba Abdulkhamidova',
		dependant: 'B1B',
		birth: utils.format(new Date('03-20-1967')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B1F',
		name: 'Matluba Khamidova',
		dependant: 'B1B',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B1G',
		name: 'Manzura Khamidova',
		dependant: 'B1B',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B1H',
		name: 'Zarina Khamidova',
		dependant: 'B1B',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'B2A',
		name: '✶ Gulchehra Khamidova',
		dependant: 'B1C',
		birth: utils.format(new Date('05-15-1963')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B2B',
		name: 'Nasim Khamidov',
		dependant: 'B2A',
		image: Icons.default,
		birth: utils.format(new Date('05-04-1984')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B2C',
		name: 'Mahbuba Khamidova',
		dependant: 'B2A',
		image: Icons.default,
		birth: utils.format(new Date('06-19-1988')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B2D',
		name: 'Zulfiya Khamidova',
		dependant: 'B2A',
		birth: utils.format(new Date('10-14-1991')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B2E',
		name: 'Aziz Khamidov',
		dependant: 'B2A',
		birth: utils.format(new Date('01-29-1992')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'B3A',
		name: '✶ Malika Khamidova',
		dependant: 'B2B',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B3B',
		name: 'Bezhan Khamidov',
		dependant: 'B3A',
		image: Icons.default,
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B3C',
		name: 'Amila Khamidova',
		dependant: 'B3A',
		image: Icons.default,
		birth: utils.format(new Date('01-22-2014')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'B4A',
		name: '✶ Sanat Ayubi',
		dependant: 'B2C',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B4B',
		name: 'Aida Ayubi',
		dependant: 'B4A',
		image: Icons.default,
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B4C',
		name: 'Amir Ayubi',
		dependant: 'B4A',
		image: Icons.default,
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'B5A',
		name: '✶ Nekruz Khamidov',
		dependant: 'B2D',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B5B',
		name: 'Masrur Khamidov',
		dependant: 'B5A',
		image: Icons.default,
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B5C',
		name: 'Komil Khamidov',
		dependant: 'B5A',
		image: Icons.default,
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'B6A',
		name: '✶ Shukhrat Khamidov',
		dependant: 'B1D',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B6B',
		name: 'Anisa Khamidova',
		dependant: 'B6A',
		image: Icons.default,
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B6C',
		name: 'Shirin Khamidova',
		dependant: 'B6A',
		image: Icons.default,
		birth: utils.format(new Date('08-14-2007')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B6D',
		name: 'Abubakr Khamidov',
		dependant: 'B6A',
		image: Icons.default,
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'B7A',
		name: '✶ Abduvali Abdulkhamidov',
		dependant: 'B1E',
		birth: utils.format(new Date('05-03-1963')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'B8A',
		name: '✶ Burhonjon Khamidov',
		dependant: 'B1F',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B8B',
		name: 'Khuseyn Khamidov',
		dependant: 'B8A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B8C',
		name: 'Parvina Khamidova',
		dependant: 'B8A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B8D',
		name: 'Robiya Khamidova',
		dependant: 'B8A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'B9A',
		name: '✶ Zulfiya ...',
		dependant: 'B8B',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B9B',
		name: 'Noziya Khamidova',
		dependant: 'B9A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B9C',
		name: 'Aziza Khamidova',
		dependant: 'B9A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B9D',
		name: 'Anisa Khamidova',
		dependant: 'B9A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B9E',
		name: 'Saidamir Khamidov',
		dependant: 'B9A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'B10A',
		name: '✶ Boirjon ...',
		dependant: 'B8C',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B10B',
		name: 'Munisa ...',
		dependant: 'B10A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B10C',
		name: 'Shahlo ...',
		dependant: 'B10A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B10D',
		name: 'Bahodur ...',
		dependant: 'B10A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B10E',
		name: 'Mashhura ...',
		dependant: 'B10A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'B11A',
		name: '✶ Huseyn ...',
		dependant: 'B8D',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B11B',
		name: 'Iskandar ...',
		dependant: 'B11A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B11C',
		name: 'Rushona ...',
		dependant: 'B11A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B11D',
		name: 'Abubakr ...',
		dependant: 'B11A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'B12A',
		name: '✶ Abdusami ...',
		dependant: 'B1G',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B12B',
		name: 'Nargis ...',
		dependant: 'B12A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B12C',
		name: 'Abduvohid ...',
		dependant: 'B12A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B12D',
		name: 'Bahodur ...',
		dependant: 'B12A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'B13A',
		name: '✶ Sherzod ...',
		dependant: 'B12B',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B13B',
		name: 'Nozanin ...',
		dependant: 'B13A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B13C',
		name: 'Javohir ...',
		dependant: 'B13A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B13D',
		name: 'Aminjon ...',
		dependant: 'B13A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'B14A',
		name: '✶ Nilufar ...',
		dependant: 'B12C',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B14B',
		name: 'Rano ...',
		dependant: 'B14A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B14C',
		name: 'Amid ...',
		dependant: 'B14A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'B15A',
		name: '✶ Abduvosid Sharipov',
		dependant: 'B1H',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B15B',
		name: 'Adiba Sharipova',
		dependant: 'B15A',
		birth: utils.format(new Date('09-08-1993')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B15C',
		name: 'Abdukodir Sharipov',
		dependant: 'B15A',
		birth: utils.format(new Date('08-04-1994')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B15D',
		name: 'Kamol Sharipov',
		dependant: 'B15A',
		birth: utils.format(new Date('09-28-1997')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'B15E',
		name: 'Safiya Sharipov',
		dependant: 'B15A',
		birth: utils.format(new Date('05-08-2010')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'B16A',
		name: '✶ Somon Boboaliev',
		dependant: 'B6B',
		birth: utils.format(new Date('11-27-1997')),
		description: ['A short description', 'Another description']
	}
];

export default khamidov;
