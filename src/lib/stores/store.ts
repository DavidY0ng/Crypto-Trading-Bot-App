import { api, apiWithToken } from "$lib/utils/http";
import { get, writable } from "svelte/store";
import { storeUserInfo, type IUserInfo } from "./storeUser";
import { walletActions } from "viem";
import { showToast } from "$lib/components/toasts/toast";
import { goto } from "$app/navigation";

export const isLoading = writable(false)
export const showModal = writable(false)
export const noReferralCode = writable(false)
export const showReferralModal = writable(false)
export const userInfo = writable({})
export const referralCode = writable('')
export const feeWalletBalance = writable(0)
export const rewardWalletBalance = writable({})

export async function getUserInfo () {
    const res = await apiWithToken ('GET', '/user/account/info')
    if(!res) {
        return
    } else {
        userInfo.set(res.data)
        const currentUserData = get(userInfo)
        // store user info into local
        storeUserInfo.update((item: any): IUserInfo => {
            return {
                ...item,
                uid: currentUserData.user_id,
                membership: currentUserData.membership,
                upline: currentUserData.upline
                
            };
        });
    }
    
}

export async function getReferralCode () {
    const res = await apiWithToken ('GET', '/user/account/referral')
    if(!res) {
        return
    } else {
        referralCode.set(res.data.code)
    }
    
}

export async function getFeeWalletBalance () {
    const res = await apiWithToken ('GET', '/user/wallet/balance', {
        wallet: 'fee',
        symbol: 'USDT'
    })
    if(!res) {
        return
    } else {
        feeWalletBalance.set(res.data.amount)
    }
}

export async function getRewardWalletBalance () {
    const res = await apiWithToken ('GET', '/user/wallet/balance', {
        wallet: 'earn',
        symbol: 'USDT'
    })
    if(!res) {
        return
    } else {
        rewardWalletBalance.set(res.data.amount)
    }
}

