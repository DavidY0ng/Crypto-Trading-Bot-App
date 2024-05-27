<script lang='ts'>
    import Icon from "@iconify/svelte";
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
    import { t } from '$lib/i18n';
    import BackHeader from "$lib/components/BackHeader.svelte"
    import { storeUserInfo } from "$lib/stores/storeUser";
    import { getWithdrawInfo, withdrawInfo, rewardWalletBalance, getRewardWalletBalance } from "$lib/stores/store";
	import { onMount } from "svelte";
	import { truncateString } from "$lib/utils/helper";
    

    let amountValue:number | null = null
    let confirmCheck:boolean = false
    let withdrawAmount:number

    onMount(async() => {
        await getWithdrawInfo()
        await getRewardWalletBalance()
    })

    $: if(confirmCheck) {
        withdrawAmount = amountValue - (amountValue * $withdrawInfo.fee/100)
    }
    
</script>

<BackHeader path='/wallet' layout='flex items-center bg-white pb-2'>
    <div class="flex justify-center flex-1 h3">
        Withdraw
    </div>
    
    <div class="flex-1">
        
    </div>
</BackHeader>
<div class="flex flex-col p-3">
    <div class="flex flex-col gap-5 p-5 shadow-md card">
        <div class="flex flex-col gap-1">
            <div class="flex text-sm text-gray-400">
                Select Coin
            </div>
            <div class="flex flex-grow">
                <select class="flex flex-grow p-2 bg-white border rounded-md select outline-primary-500" >
                    <option class="" value="USDT">
                        USDT
                    </option>
                </select>
            </div>
        </div>
    
        <div class="flex flex-col gap-1">
            <div class="flex text-sm text-gray-400">
                Address
            </div>
            <input class="p-2 px-3 overflow-hidden text-sm bg-white border rounded-md" value={$storeUserInfo.address} readonly>           
        </div>
    
        <div class="flex flex-col gap-1">
            <div class="flex text-sm text-gray-400">
                Network
            </div>
            <div class="p-2 px-3 bg-white border rounded-md">
                {$withdrawInfo.network}
            </div>
        </div>
        
        <div class="flex flex-col gap-1">
            <div class="flex text-sm text-gray-400">
                Amount
            </div>
            <div>
                <input type="number" pattern="[0-9]*" class="p-2 px-3 bg-white border rounded-md shadow-sm" bind:value={amountValue} placeholder="Enter an amount" readonly={confirmCheck}>
            </div>
            <div class="flex justify-between text-xs">
                <div class="text-gray-400">
                    Available 
                </div>
                <div class="font-semibold">
                    {$rewardWalletBalance} USDT
                </div>
            </div>
            
        </div>
    
        <label class="flex items-center ml-2 space-x-3">
            <input
            
                class="checkbox w-[15px] h-[15px]"
                type="checkbox"
                disabled = {amountValue === null || amountValue < $withdrawInfo.min}
                bind:checked={confirmCheck}
            />
            <p class="text-sm text-gray-500">
                {$t('withdraw.confirm')}
            </p>
        </label>

        <div class="my-2 address">
            <div
                class="flex justify-center w-full h-full px-4 py-4 overflow-x-auto bg-gray-300 rounded-lg shadow-inner dark:bg-gray-700"
            >
                <table class="w-full dark:text-[--font-color] text-sm md:text-md">
                    <tbody>
                        <tr>
                            <th class="text-left">Minimum Withdraw</th>
                            <td class="text-right">{$withdrawInfo.min} {$withdrawInfo.currency}</td>
                        </tr>
                        <tr>
                            <th class="text-left">Withdrawal Fee</th>
                            <td class="text-right">
                                {truncateString($withdrawInfo.fee,5,5)}%
                            </td>
                        </tr>
                        <tr>
                            <th class="text-left">Withdrawal Amount</th>
                            <td class="text-right">
                                {withdrawAmount == undefined ? '--' : withdrawAmount +' '+ 'USDT'} 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- </div> -->
        </div>
    
        <div class="flex flex-grow">
            <button  class="flex justify-center flex-grow text-white rounded-md shadow-md btn bg-primary-500" disabled={!confirmCheck}>
                Withdraw
            </button>
        </div>
    </div>
    
</div>
