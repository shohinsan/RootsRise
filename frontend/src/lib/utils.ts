import type { Base } from '$customTypes';

const addedNew = (
	data: Base[],
	id: string | undefined = undefined,
	type: string = 'dependant'
): Base[] => {
	const result: Base[] = [];

	data.forEach((member) => {
		const isDependant = member.dependant === id;
		if (type === 'dependant' && isDependant) {
			const node: Base = { ...member };

			const children = addedNew(data, member.id, type);

			if (children.length > 0) {
				node.children = children;
			}

			result.push(node);
		}
	});

	return result;
};

const format = (date: Date): string => {
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
};

const unknown = (date: Date): string => {
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		timeZone: 'UTC'
	});
};

export default { addedNew, format, unknown };
