import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const i18n: Handle = async ({ event, resolve }) => {
	const locale = 'en';
	event.locals.locale = locale;
	return resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replace('%lang%', locale);
		}
	});
};

export const handle: Handle = sequence(i18n);
