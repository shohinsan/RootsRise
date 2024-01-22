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

export default { addedNew };
