import { api, apiWithToken } from "$lib/utils/http";
import { get, writable } from "svelte/store";
import { storeUserInfo, type IUserInfo } from "./storeUser";
import { walletActions } from "viem";
import { showToast } from "$lib/components/toasts/toast";
import { goto } from "$app/navigation";
import { authenticator } from "otplib";

export const isLoading = writable(false)
export const showModal = writable(false)
export const showGoogleModal = writable(false)
export const showAuthenticatorModal = writable(false)
export const noReferralCode = writable(false)
export const showReferralModal = writable(false)
export const userInfo = writable({})
export const referralCode = writable('')
export const feeWalletBalance = writable(0)
export const rewardWalletBalance = writable({})
export const depositInfo = writable('')
export const withdrawInfo = writable('')
export let depositCurrentPageInfo = writable({
    amount: 0,
    sn: '',
    currency: '',
    network: '',
    min: 0,
    address: '',
    token_address: ''
});
export const google2FACode = writable('')
export const google2FAKey = writable('')

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
                upline: currentUserData.upline,
                authenticator: currentUserData.authenticator
                
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
        wallet: 'reward',
        symbol: 'USDT'
    })
    if(!res) {
        return
    } else {
        rewardWalletBalance.set(res.data.amount)
    }
}

export async function getDepositInfo () {
    const res = await apiWithToken ('GET', '/info/deposit', {
    })
    if(!res) {
        return
    } else {
        depositInfo.set(res.data)
    }
}

export async function getWithdrawInfo () {
    const res = await apiWithToken ('GET', '/info/withdraw', {
    })
    if(!res) {
        return
    } else {
        withdrawInfo.set(res.data)
    }
}

export async function getGoogle2FACode () {
    const res = await apiWithToken ('GET', '/auth/twofa', {
    })
    if(!res) {
        return
    } else {
        google2FACode.set(res.data.code)
        google2FAKey.set(res.data.key)
    }
}

export async function enableGoogle2FA (code:string) {
    const res = await apiWithToken ('POST', '/auth/twofa/enable', {
        code: code
    })
    if (res.success) {
        showToast('Google Authenticator Enabled', 'green')
        getUserInfo()
    } else {
        showToast (res.data[0], 'red')
    }
}



