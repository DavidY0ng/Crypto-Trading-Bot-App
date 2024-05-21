const lang = 'en';

export default [
	{
		locale: lang,
		key: 'common',
		loader: async () => (await import('./common.json')).default
	},
	{
		locale: lang,
		key: 'deposit',
		loader: async () => (await import('./deposit.json')).default
	},
	{
		locale: lang,
		key: 'error',
		loader: async () => (await import('./error.json')).default
	}
];
