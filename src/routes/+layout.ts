import { browser } from '$app/environment';
import { loadTranslations, locale } from '$lib/i18n';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url }) => {
	const { pathname } = url;

	let defaultLocale = 'en';
	if (browser) {
		const getLocal = JSON.parse(localStorage.getItem('storeLocal') || '{}');
		defaultLocale = getLocal.lang;
	}

	const initLocale = locale.get() || defaultLocale;

	await loadTranslations(initLocale, pathname);

	return {};
};
