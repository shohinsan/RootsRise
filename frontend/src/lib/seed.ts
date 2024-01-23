import type { Base } from '$customTypes';
import { a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11 } from '$family/abdulkhamidov';
import { b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15 } from '$family/khamidov';
import { c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13 } from '$family/sharipov';
import { d1 } from '$family/valiev';

const allAbdulkhamidov = (): Base[] => {
	return [...a1, ...a2, ...a3, ...a4, ...a5, ...a6, ...a7, ...a8, ...a9, ...a10, ...a11];
};

const allKhamidov = (): Base[] => {
	return [
		...b1,
		...b2,
		...b3,
		...b4,
		...b5,
		...b6,
		...b7,
		...b8,
		...b9,
		...b10,
		...b11,
		...b12,
		...b13,
		...b14,
		...b15
	];
};

const allSharipov = (): Base[] => {
	return [
		...c1,
		...c2,
		...c3,
		...c4,
		...c5,
		...c6,
		...c7,
		...c8,
		...c9,
		...c10,
		...c11,
		...c12,
		...c13
	];
};

const allValiev = (): Base[] => {
	return [...d1];
};

export default { allAbdulkhamidov, allKhamidov, allSharipov, allValiev };
