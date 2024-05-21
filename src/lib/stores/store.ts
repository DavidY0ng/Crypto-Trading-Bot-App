import { api, apiWithToken } from "$lib/utils/http";
import { get, writable } from "svelte/store";
import { storeUserInfo, type IUserInfo } from "./storeUser";

export const isLoading = writable(false)
export const noReferralCode = writable(false)
export const showReferralModal = writable(false)
export const userInfo = writable({})
export const referralCode = writable('')

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
        referralCode.set(res.data)
        console.log(get(referralCode))
    }
    
}