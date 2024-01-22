import type { Base } from '$customTypes';
import {
	family1,
	family2,
	family3,
	family4,
	family5,
	family6,
	family7,
	family8,
	family9,
	family10,
	family11
} from '$family/abdulkhamidov';
import { family1a, family2a } from '$family/sharipov';

const allAbdulkhamidov = (): Base[] => {
	const abdulkhamidov: Base[] = [
		...family1,
		...family2,
		...family3,
		...family4,
		...family5,
		...family6,
		...family7,
		...family8,
		...family9,
		...family10,
		...family11
	];

	return abdulkhamidov;
};

const allSharipov = (): Base[] => {
	const sharipov: Base[] = [...family1a, ...family2a];
	return sharipov;
};

export default { allAbdulkhamidov, allSharipov };
