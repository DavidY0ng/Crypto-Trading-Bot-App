import { api, apiWithToken } from "$lib/utils/http";
import { writable } from "svelte/store";

export const isLoading = writable(false)
export const userInfo = writable([])

export async function getUserInfo () {
    const res = await apiWithToken ('GET', '/user/info')
    if(!res) {
        return
    } else {
        userInfo.set(res.data)
    }
    
}