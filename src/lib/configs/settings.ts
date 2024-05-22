export let currentURL: any;

if (typeof window !== 'undefined') {
	currentURL = new URL(window.location.href).hostname;
}

export const urlList = {
	dev: {
		// domainURL: 'https://stagingdapp.iwinfund.com/',
		// baseUrl: 'https://stagingcore.iwinfund.com/dapp',
		// apiBase: 'https://stagingcore.iwinfund.com/dapp',
		domainURL: 'http://192.168.100.63:1234',
        baseUrl: 'http://192.168.100.111:8787',
		apiBase: 'http://192.168.100.111:8787/dapp',
		wsBase: 'ws://192.168.100.111:7272',
		apiLoginRequest: '/api/auth/request',
		apiLoginVerify: '/api/auth/verify',
		apiUserInfo: '/api/users/info',
		apiEditName: '/dapp/user/editname',
		apiStrategy: '/dapp/user/editname'
	},

	live: {
		// domainURL: 'https://dapp.iwinfund.com/',
		domainURL: 'http://192.168.100.63:1234',
		baseUrl: 'http://192.168.100.111:8787',
		apiBase: 'http://192.168.100.111:8787/dapp',
		wsBase: 'ws://192.168.100.111:7272',
		apiLoginRequest: '/api/auth/request',
		apiLoginVerify: '/api/auth/verify',
		apiUserInfo: '/api/users/info',
		apiEditName: '/dapp/user/editname',
		apiStrategy: '/dapp/user/editname'
	}
};

export const urls =
	currentURL === new URL(urlList.live.domainURL).hostname ? urlList.live : urlList.dev;

export const corsMode = process.env.NODE_ENV == 'development' ? 'no-cors' : 'cors';
