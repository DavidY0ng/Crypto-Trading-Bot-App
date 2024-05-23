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
	},
	{
		locale: lang,
		key: 'withdraw',
		loader: async () => (await import('./withdraw.json')).default
	},
	{
		locale: lang,
		key: 'login',
		loader: async () => (await import('./Login.json')).default
	}
];
