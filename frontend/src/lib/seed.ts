import type { Base } from '$customTypes';
import { family1 } from './families/family1';
import { family2 } from './families/family2';
import { family3 } from './families/family3';
import { family4 } from './families/family4';
import { family5 } from './families/family5';
import { family6 } from './families/family6';


export const family: Base[] = [
	...family1, 
	...family2,
	...family3,
	...family4,
	...family5,
	...family6,
];
