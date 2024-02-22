import { Icons } from '$assets';
import { utils } from '$lib';

const abdulkhamidov = [
	{
		id: 'A1B',
		name: '✶ Sharofatoi Abdulkhamidova',
		dependant: 'D5B',
		image: Icons.default,
		birth: utils.unknown(new Date('1938')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A1C',
		name: 'Abduvali Abdulkhamidov',
		dependant: 'A1B',
		image: Icons.default,
		birth: utils.format(new Date('03-05-1963')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A1D',
		name: 'Abdumalik Abdulkhamidov',
		dependant: 'A1B',
		birth: utils.format(new Date('03-05-1963')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A1E',
		name: 'Dilshod Abdulkhamidov',
		dependant: 'A1B',
		birth: utils.format(new Date('01-04-1974')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A1F',
		name: 'Jamshed Abdulkhamidov',
		dependant: 'A1B',
		birth: utils.unknown(new Date('1970')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A1G',
		name: 'Lola Abdulkhamidova',
		dependant: 'A1B',
		birth: utils.unknown(new Date('1982')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'A2A',
		name: '✶ Nasiba Abdulkhamidov',
		dependant: 'A1C',
		birth: utils.format(new Date('03-20-1967')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A2B',
		name: 'Sokhib Abdulkhamidov',
		dependant: 'A2A',
		birth: utils.format(new Date('05-17-1988')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A2C',
		name: 'Shokhrukh Abdulkhamidov',
		dependant: 'A2A',
		birth: utils.format(new Date('10-02-1991')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A2D',
		name: 'Shohin Abdulkhamidov',
		dependant: 'A2A',
		birth: utils.format(new Date('02-08-1997')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'A3A',
		name: '✶ Sharifa Abdulkhamidova',
		dependant: 'A1D',
		birth: utils.unknown(new Date('1988')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A3B',
		name: 'Abdulhamid Abdulkhamidov',
		dependant: 'A3A',
		birth: utils.format(new Date('10-02-1991')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A3C',
		name: 'Shukrona Abdulkhamidov',
		dependant: 'A3A',
		birth: utils.format(new Date('12-31-1993')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A3D',
		name: 'Sarvar Abdulkhamidov',
		dependant: 'A3A',
		birth: utils.format(new Date('01-21-2001')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'A4A',
		name: '✶ Shohida Abdulhamidova',
		dependant: 'A1E',
		birth: utils.format(new Date('01-22-1970')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A4B',
		name: 'Ahror Abdulhamidov',
		dependant: 'A4A',
		birth: utils.format(new Date('08-26-1997')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A4C',
		name: 'Romuz Abdulhamidov',
		dependant: 'A4A',
		birth: utils.format(new Date('07-16-2002')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A4D',
		name: 'Ansor Abdulhamidov',
		dependant: 'A4A',
		birth: utils.format(new Date('05-16-2013')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A4E',
		name: 'Matin Abdulkhamidov',
		dependant: 'A4A',
		birth: utils.unknown(new Date('2020')),
		description: ['A short description', 'Another description']
	},
	//
	{
		id: 'A5A',
		name: '✶ Nasiba Abdulhamidova',
		dependant: 'A1F',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A5B',
		name: 'Osim Abdulhamidov',
		dependant: 'A5A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A5C',
		name: 'Oisha Abdulhamidov',
		dependant: 'A5A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'A6A',
		name: '✶ Khusrav Muminov',
		dependant: 'A1G',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A6B',
		name: 'Farukh Muminov',
		dependant: 'A6A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A6C',
		name: 'Maryam Muminova',
		dependant: 'A6A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A6D',
		name: 'Dovud Muminov',
		dependant: 'A6A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'A7A',
		name: '✶ Farangis Karimova',
		dependant: 'A2B',
		birth: utils.format(new Date('09-14-1988')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A7B',
		name: 'Samina Abdulkhamidova',
		dependant: 'A7A',
		birth: utils.format(new Date('07-05-2013')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A7C',
		name: 'Tabris Abdulkhamidov',
		dependant: 'A7A',
		birth: utils.format(new Date('08-23-2018')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'A8A',
		name: '✶ Zulola Ubaydulloeva',
		dependant: 'A2C',
		birth: utils.format(new Date('09-29-1997')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A8B',
		name: 'Nadine Abdulkhamidova',
		dependant: 'A8A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'A9A',
		name: '✶ Nilufar Abdulkhamidova',
		dependant: 'A5B',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A9B',
		name: 'Nushofarin Abdulkhamidova',
		dependant: 'A9A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'A10A',
		name: '✶ Parvina Ikromova',
		dependant: 'A3B',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A10B',
		name: 'Imron Abdulkhamidov',
		dependant: 'A10A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'A11A',
		name: '✶ Iqboliddin Boboev',
		dependant: 'A3C',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A11B',
		name: 'Yasmina Abdulkhamidova',
		dependant: 'A11A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'A11C',
		name: 'Badriddin Abdulkhamidova',
		dependant: 'A11A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	}
];

export default abdulkhamidov;
