import type { Base } from '$customTypes';

export const family5: Base[] = [
  {
    id: '5A',
    name: 'Nasiba Abdulhamidova',
    dependant: '1F',
    information: {
      birth: '1997'
    },
    description: {
      details: ['A short description', 'Another description']
    }
  },
  {
    id: '5B',
    name: 'Osim Abdulhamidov',
    dependant: '5A',
    information: {
      birth: '2001'
    },
    description: {
      details: ['A short description', 'Another description']
    }
  },
  {
    id: '5C',
    name: 'Oisha Abdulhamidov',
    dependant: '5A',
    information: {
      birth: '2013'
    },
    description: {
      details: ['A short description', 'Another description']
    }
  },
  
];
