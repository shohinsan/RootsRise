import { utils } from '$lib';

const valiev = [
	{
		id: 'D1A',
		name: 'Sokhibnazar Valiev',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'D2A',
		name: '✶ Nusratbonu ...',
		dependant: 'D1A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D2B',
		name: 'Toshikaro Valiev',
		dependant: 'D2A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D2C',
		name: 'Sobir Valiev',
		dependant: 'D2A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D2D',
		name: 'Olim Valiev',
		dependant: 'D2A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'D3A',
		name: '✶ Zinnat ...',
		dependant: 'D2D',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D3B',
		name: 'Abduvali Valiev',
		dependant: 'D3A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D3C',
		name: 'Madali Valiev',
		dependant: 'D3A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D3D',
		name: 'Mashariv Valiev',
		dependant: 'D3A',
		birth: '1933',
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D3E',
		name: 'Abdumumin Valiev',
		dependant: 'D3A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D3F',
		name: 'Fadojon Valiev',
		dependant: 'D3A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'D4A',
		name: '✶ Hurshedmoh ...',
		dependant: 'D3B',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D4B',
		name: 'Abdulhamid Valiev',
		dependant: 'D4A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D4C',
		name: 'Ashurmat Valiev',
		dependant: 'D4A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D4D',
		name: 'Abdulaziz Valiev',
		dependant: 'D4A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D4E',
		name: 'Hunzodamoh Valieva',
		dependant: 'D4A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D4F',
		name: 'Anzuratmoh Valieva',
		dependant: 'D4A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D4G',
		name: "Is'hok Valiev",
		dependant: 'D4A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'D5A',
		name: '✶ Zulfiyamoh Valieva',
		dependant: 'D4B',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D5B',
		name: 'Sharifjon Abdulkhamidov',
		dependant: 'D5A',
		birth: utils.format(new Date('10-10-1934')),
		death: utils.format(new Date('01-28-2023')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'D5C',
		name: 'Hurshedmoh Sharipova',
		dependant: 'D5A',
		birth: utils.format(new Date('10-10-1940')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D5D',
		name: 'Equbjon Khamidov',
		dependant: 'D5A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'D6A',
		name: '✶ Bibisoro ...',
		dependant: 'D4D',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'D7A',
		name: '✶ Edgoroy ...',
		dependant: 'D4C',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'D8A',
		name: '✶ Hamromat ...',
		dependant: 'D4E',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'D9A',
		name: '✶ Abduahad ...',
		dependant: 'D4F',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'D10A',
		name: '✶ Zainabbibi ...',
		dependant: 'D3B',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D10B',
		name: 'Muharramoy ...',
		dependant: 'D10A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D10C',
		name: 'Marhamatoy ...',
		dependant: 'D10A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D10D',
		name: 'Abduvohid Valiev',
		dependant: 'D10A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D10E',
		name: 'Karomatoy Valieva',
		dependant: 'D10A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'D11A',
		name: '✶ Nematjon ...',
		dependant: 'D10B',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'D12A',
		name: '✶ Karimjon ...',
		dependant: 'D10C',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'D13A',
		name: '✶ Hamida ...',
		dependant: 'D10D',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'D14A',
		name: '✶ Ruziboy Shermatov',
		dependant: 'D10E',
		birth: utils.unknown(new Date('1930')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D14B',
		name: 'Habiba Shermatova',
		dependant: 'D14A',
		birth: utils.unknown(new Date('1956')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D14C',
		name: 'Lola Shermatova',
		dependant: 'D14A',
		birth: utils.unknown(new Date('1960')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D14D',
		name: 'Sabohat Shermatova',
		dependant: 'D14A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D14E',
		name: 'Saodat Shermatova',
		dependant: 'D14A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D14F',
		name: 'Nasiba Abdulhamidova',
		dependant: 'D14A',
		birth: utils.unknown(new Date('1968')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D14G',
		name: 'Bahrom Shermatov',
		dependant: 'D14A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D14H',
		name: 'Maqsud Shermatov',
		dependant: 'D14A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'D15A',
		name: '✶ Bonujon ...',
		dependant: 'D3E',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D15B',
		name: '✶ Anzurat ...',
		dependant: 'D3E',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'D16A',
		name: '✶ Gulsummoh ...',
		dependant: 'D3F',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'D16B',
		name: '✶ Oshoba ...',
		dependant: 'D3F',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	}
	// ------------------------------------------------------------
];

export default valiev;
