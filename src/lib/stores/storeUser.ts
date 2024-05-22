import { persisted } from 'svelte-persisted-store';
import { zeroAddress, type Address } from 'viem';

interface IUserInfo {
	uid: string;
	address: Address;
	chainid: string;
	has_address: number;
	membership: number;
	upline: number;
}

export const emptyUserInfo: IUserInfo = {
	uid: '',
	address: zeroAddress,
	chainid: '',
	has_address: 0,
	membership: 0,
	upline: 0
};

export const storeUserInfo = persisted<IUserInfo>('storeUserInfo', emptyUserInfo);

export type { IUserInfo };
