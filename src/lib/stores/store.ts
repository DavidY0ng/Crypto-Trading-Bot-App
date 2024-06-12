import { api, apiWithToken } from "$lib/utils/http";
import { get, writable } from "svelte/store";
import { storeUserInfo, type IUserInfo } from "./storeUser";
import { walletActions } from "viem";
import { showToast } from "$lib/components/toasts/toast";
import { goto } from "$app/navigation";
import { authenticator } from "otplib";
import { storeLocal } from "./storeLocal";

export const previousUrl = writable(null)
export const isLoading = writable(false)
export const showModal = writable(false)
export const showGoogleModal = writable(false)
export const showAuthenticatorModal = writable(false)
export const noReferralCode = writable(false)
export const showReferralModal = writable(false)
export const userInfo = writable({})
export const referralCode = writable('')
export const feeWalletBalance = writable(0)
export const rewardWalletBalance = writable(0)
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
export const depositHistory = writable([])
export const depositHistoryDetails = writable({})
export const withdrawHistory = writable([])
export const withdrawHistoryDetails = writable({})
export const transferHistory = writable([])
export const referralHistory = writable([])
export const currentMembershipPlan = writable([])
export const membershipPlanHistory = writable([])
export const currentPage = writable(1)
export const hierarchyData = writable([])
export const rankData = writable([])

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
                authenticator: currentUserData.authenticator,
                api_synced: 0
                
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

export async function getDepositHistory(page: number) {
    const res = await apiWithToken('GET', '/transaction/history/deposit', {
        size: 10,
        page: page
    });

    if (!res) {
        return [];
    } else {
        if (page === 1) {
            depositHistory.set(res.data.data);
        } else {
            depositHistory.update(existingData => [...existingData, ...res.data.data]);
        }
        return res.data.data;
    }
}

export async function getDepositHistoryDetails (sn:string) {
    const res = await apiWithToken ('GET', '/transaction/history/deposit/detail', {
        sn: sn
    })
    if(!res) {
        return
    } else {
        depositHistoryDetails.set(res.data)
    }
}

export async function getWithdrawHistory (page:number) {
    const res = await apiWithToken ('GET', '/transaction/history/withdraw', {
        size: 10,
        page: page
    })
    if(!res) {
        return
    } else {
        if (page === 1) {
            withdrawHistory.set(res.data.data);
        } else {
            withdrawHistory.update(existingData => [...existingData, ...res.data.data]);
        }
        return res.data.data;
    }
}

export async function getWithdrawHistoryDetails (sn:string) {
    const res = await apiWithToken ('GET', '/transaction/history/withdraw/detail', {
        sn: sn
    })
    if(!res) {
        return
    } else {
        withdrawHistoryDetails.set(res.data)
    }
}

export async function getTransferHistory (page:number) {
    const res = await apiWithToken ('GET', '/transaction/history/transfer', {
        size: 10,
        page: page
    })
    if(!res) {
        return
    } else {
        if (page === 1) {
            transferHistory.set(res.data.data);
        } else {
            transferHistory.update(existingData => [...existingData, ...res.data.data]);
        }
        return res.data.data;
    }
}

export async function getReferralHistory (page:number) {
    const res = await apiWithToken ('GET', '/transaction/history/reward', {
        size: 10,
        page: page
    })
    if(!res) {
        return
    } else {
        if (page === 1) {
            referralHistory.set(res.data.data);
        } else {
            referralHistory.update(existingData => [...existingData, ...res.data.data]);
        }
        return res.data.data;
    }
}

export async function getCurrentMembershipPlan () {
    const res = await apiWithToken ('GET', '/membership/detail', {
        status: 'active'
    })
    if(!res) {
        return
    } else {
        // if (page === 1) {
        //     currentMembershipPlan.set(res.data.data);
        // } else {
        //     currentMembershipPlan.update(existingData => [...existingData, ...res.data.data]);
        // }
        // return res.data.data;
        currentMembershipPlan.set(res.data)
    }
}

export async function getMembershipPlanHistory () {
    const res = await apiWithToken ('GET', '/membership/detail', {
        status: 'expired'
    })
    if(!res) {
        return
    } else {
        // if (page === 1) {
        //     currentMembershipPlan.set(res.data.data);
        // } else {
        //     currentMembershipPlan.update(existingData => [...existingData, ...res.data.data]);
        // }
        // return res.data.data;
        membershipPlanHistory.set(res.data)
    }
}



//fetch different types of history
export async function fetchHistory(type:string, page:number) {
    let res;
    switch (type) {
        case 'deposit':
            res = await getDepositHistory(page);
            break;
        case 'withdraw':
            res = await getWithdrawHistory(page);
            break;
        case 'transfer':
            res = await getTransferHistory(page);
            break;
        case 'referral':
            res = await getReferralHistory(page);
            break;
        default:
            throw new Error('Invalid history type');
    }
    return res;
}

export async function getHierarchy (user_id) {
    const res = await apiWithToken ('GET', '/user/account/hierarchy', {
        user_id: user_id
    })
    if(!res) {
        return
    } else {
        hierarchyData.set(res.data)
    }
}

export async function getRank () {
    const res = await apiWithToken ('GET', '/user/account/rank', {
        
    })
    if(!res) {
        return
    } else {
        rankData.set(res.data)
    }
}

