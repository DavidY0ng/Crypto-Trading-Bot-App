const lang = 'zh-tw';

export default [
	{
		locale: lang,
		key: 'common',
		loader: async () => (await import('./common.json')).default
	},
	{
		locale: lang,
		key: 'error',
		loader: async () => (await import('./error.json')).default
	}
];
