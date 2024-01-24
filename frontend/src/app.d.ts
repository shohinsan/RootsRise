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
	birth?: string;
	death?: string;
	place?: string;
	details?: string | string[];
	children?: Base[];
}

export { Document, Base };
