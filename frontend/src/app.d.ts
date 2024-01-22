// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			code?: string;
			errorId?: string;
		}
		interface Locals {
			locale?: string;
		}

		// interface PageData {}
		// interface Platform {}
	}

	declare interface Document {
		startViewTransition(callback: () => void): void;
	}
}

interface Base {
	id?: string;
	name?: string;
	dependant?: string;
	image?: string;
	information?: InformationTypes;
	description?: DescriptionType;
	children?: Base[];
}

type InformationTypes = {
	birth?: string;
	death?: string;
	place?: string;
};

type DescriptionType = {
	details?: string | string[];
};

export { Document, Base, InformationTypes, DescriptionType, RelationTypes };
