declare global {
	namespace App {
		interface Error {
			code?: string;
			errorId?: string;
		}
		interface Locals {
			locale?: string;
		}
	}

	declare interface Document {
		startViewTransition(callback: () => void): void;
	}
}

interface Base {
	id?: string;
	name?: string;
	description?: string | string[];
	birth?: string;
	death?: string;
	image?: string;
	dependant?: string;
	children?: Base[];
}

export { Document, Base };
