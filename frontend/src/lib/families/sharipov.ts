import { utils } from '$lib';

const sharipov = [
	{
		id: 'C1B',
		name: '✶ Usmonali Sharipov',
		dependant: 'D5C',
		birth: utils.format(new Date('11-28-1934')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C1C',
		name: 'Zoidjon Sharipov',
		dependant: 'C1B',
		birth: utils.unknown(new Date('1941')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C1D',
		name: 'Abdumajid Sharipov',
		dependant: 'C1B',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C1E',
		name: 'Abdugafur Sharipov',
		dependant: 'C1B',
		birth: utils.format(new Date('10-06-1965')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C1F',
		name: 'Abduvosid Sharipov',
		dependant: 'C1B',
		birth: utils.format(new Date('03-03-1968')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C1G',
		name: 'Abdujabbor Sharipov',
		dependant: 'C1B',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C1H',
		name: 'Pulod Sharipov',
		dependant: 'C1B',
		birth: utils.format(new Date('12-13-1974')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C1I',
		name: 'Mazokir Sharipov',
		dependant: 'C1B',
		birth: utils.format(new Date('06-13-1977')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C1J',
		name: 'Askar Sharipov',
		dependant: 'C1B',
		birth: utils.format(new Date('11-10-1980')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'C2A',
		name: '✶ Tuyguloy Sharipova',
		dependant: 'C1C',
		birth: utils.format(new Date('08-03-1962')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C2B',
		name: 'Komila Sharipova',
		dependant: 'C2A',
		birth: utils.format(new Date('03-08-1987')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C2C',
		name: 'Habiba Sharipova',
		dependant: 'C2A',
		birth: utils.format(new Date('07-14-1989')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'C3A',
		name: '✶ Mavluda Sharipova',
		dependant: 'C1D',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C3B',
		name: 'Bahodur Sharipov',
		dependant: 'C3A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C3C',
		name: 'Ziyodamoh Sharipova',
		dependant: 'C3A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C3D',
		name: 'Anushervon Sharipov',
		dependant: 'C3A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C3E',
		name: 'Zevara Sharipova',
		dependant: 'C3A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'C4A',
		name: '✶ Nodira Sharipova',
		dependant: 'C1E',
		birth: utils.format(new Date('02-22-1971')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C4B',
		name: 'Orosta Sharipova',
		dependant: 'C4A',
		birth: utils.format(new Date('02-17-1990')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C4C',
		name: 'Abdukarim Sharipov',
		dependant: 'C4A',
		birth: utils.format(new Date('02-14-1995')),
		death: utils.unknown(new Date('2023')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C4D',
		name: 'Hasan Sharipov',
		dependant: 'C4A',
		birth: utils.format(new Date('09-14-2008')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C4E',
		name: 'Husein Sharipov',
		dependant: 'C4A',
		birth: utils.format(new Date('09-14-2008')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'C5A',
		name: '✶ Zarina Khamidova',
		dependant: 'C1F',
		birth: utils.format(new Date('04-10-1970')),
		description: ['more info on khamidov page', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'C6A',
		name: '✶ Yanvaroy Sharipova',
		dependant: 'C1G',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'C6B',
		name: 'Okil Sharipov',
		dependant: 'C6A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C6C',
		name: 'Kirom Sharipov',
		dependant: 'C6A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C6D',
		name: 'Shahlo Sharipova',
		dependant: 'C6A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'C7A',
		name: '✶ Zainura Sharipova',
		dependant: 'C1H',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'C7C',
		name: 'Sabrina Sharipova',
		dependant: 'C7A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C7D',
		name: 'Safina Sharipova',
		dependant: 'C7A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C7E',
		name: 'Ato Sharipov',
		dependant: 'C7A',
		birth: utils.format(new Date('08-25-2010')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'C8A',
		name: '✶ Manzura Sharipova',
		dependant: 'C1I',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'C8B',
		name: 'Muzaffar Sharipov',
		dependant: 'C8A',
		birth: utils.format(new Date('02-01-2004')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C8C',
		name: 'Muhsin Sharipov',
		dependant: 'C8A',
		birth: utils.format(new Date('07-06-2006')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C8D',
		name: 'Muhlisa Sharipova',
		dependant: 'C8A',
		birth: utils.format(new Date('10-16-2009')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C8E',
		name: 'Muso Sharipov',
		dependant: 'C8A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C8F',
		name: 'Fotima Sharipova',
		dependant: 'C8A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C8G',
		name: 'Husein Sharipov',
		dependant: 'C8A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'C9A',
		name: '✶ Maftuna Sharipova',
		dependant: 'C1J',
		birth: utils.format(new Date('01-19-1986')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'C9B',
		name: 'Bahtiyor Sharipov',
		dependant: 'C9A',
		birth: utils.format(new Date('11-12-2006')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C9C',
		name: 'Afzalshoh Sharipov',
		dependant: 'C9A',
		birth: utils.format(new Date('10-31-2008')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C9D',
		name: 'Doston Sharipov',
		dependant: 'C9A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C9E',
		name: 'Hasan Sharipov',
		dependant: 'C9A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	{
		id: 'C9F',
		name: 'Husein Sharipov',
		dependant: 'C9A',
		birth: utils.unknown(new Date('1933')),
		description: ['A short description', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'C10A',
		name: '✶ Shuhrat Sharipova',
		dependant: 'C2B',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'C10B',
		name: 'Omilhon Sharipov',
		dependant: 'C10A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'C11A',
		name: '✶ Alisher Sharipova',
		dependant: 'C2C',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'C11B',
		name: 'Safiya Sharipova',
		dependant: 'C11A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'C11C',
		name: 'Omina Sharipova',
		dependant: 'C11A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'C11D',
		name: 'Imron Sharipov',
		dependant: 'C11A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'C12A',
		name: '✶ Jonona Sharipova',
		dependant: 'C3B',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'C12B',
		name: 'Faroz Sharipov',
		dependant: 'C12A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: 'C13A',
		name: '✶ Sharaf Sharipova',
		dependant: 'C4B',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'C13B',
		name: 'Shahboz Sharipov',
		dependant: 'C13A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'C13C',
		name: 'Zulfiyamoh Sharipova',
		dependant: 'C13A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'C13D',
		name: 'Muhammadamin Sharipov',
		dependant: 'C13A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'C13E',
		name: 'Zakiramoh Sharipov',
		dependant: 'C13A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: '✶ C14A',
		name: 'Firdavs Sharipov',
		dependant: 'C3C',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'C14B',
		name: 'Farzin Sharipov',
		dependant: 'C14A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'C14C',
		name: 'Farshed Sharipov',
		dependant: 'C14A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'C14D',
		name: 'Zainab Sharipova',
		dependant: 'C14A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	// ------------------------------------------------------------
	{
		id: '✶ C15A',
		name: 'Faridun Sharipov',
		dependant: 'C3E',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'C15B',
		name: 'Mubina Sharipova',
		dependant: 'C15A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'C15C',
		name: 'Muboriz Sharipov',
		dependant: 'C15A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	},
	{
		id: 'C15D',
		name: 'Add name here',
		dependant: 'C15A',
		birth: utils.unknown(new Date('1933')),
		description: ['more info on khamidov page', 'Another description']
	}
];

export default sharipov;
