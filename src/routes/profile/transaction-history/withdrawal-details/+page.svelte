<script>
	import BackHeader from '$lib/components/BackHeader.svelte';
	import Icon from '@iconify/svelte';
	import {
		getWithdrawHistoryDetails,
        withdrawHistoryDetails
	} from '$lib/stores/store';
	import { onMount } from 'svelte';
    import { page } from '$app/stores';
	import { copyToClipboard } from '$lib/utils/helper';
    import { short_number_format } from '$lib/utils/helper'

	let tabSet = 0;
	onMount(() => {
        let sn = $page.url.searchParams.get('sn')
        getWithdrawHistoryDetails(sn)
    });
</script>

<div class="flex items-center px-3 pt-3 pb-2 bg-white">
    <div class="flex flex-1">
        <button on:click={() => window.history.back()}>
            <Icon icon="gravity-ui:arrow-left" width="1.2em" height="1.2em" />
        </button>
    </div>

    <div class="flex justify-start flex-grow font-semibold flex-2 h4">
        Withdrawal Details
    </div>
</div>

<div class="flex flex-col flex-grow bg-white">
    <div>
        <div class="flex flex-col items-center flex-grow gap-2 p-3">
            <div class="font-semibold h1">
                -{short_number_format($withdrawHistoryDetails.actual_amount)} {$withdrawHistoryDetails.assets}
            </div>
            <div class="flex items-center gap-2">
                <div class="text-green-500 {$withdrawHistoryDetails.status == 'success' ? 'flex' : 'hidden' }">
                    <Icon icon="mdi:tick-circle" width="1.2em" height="1.2em" />
                </div>
                <div class="capitalize {$withdrawHistoryDetails.status == 'success' ? 'text-green-500' : '' }">
                    {$withdrawHistoryDetails.status}
                </div>
            </div>
            
    
        </div>
        <hr class="my-4 divider"/>
    </div>

    <div class="flex flex-col gap-4 p-3 text-sm">
        <div class="flex justify-between">
            <div class="text-gray-400">
                Network
            </div>
            <div class="px-2 rounded-sm bg-secondary-500/50 text-secondary-700">
                {$withdrawHistoryDetails.network}
            </div>
        </div>

        <div class="flex justify-between">
            <div class="text-gray-400">
                Address
            </div>
            <div class="flex w-[60%] gap-2">
                <div class="text-right break-all ">
                    {$withdrawHistoryDetails.address}
                </div>
                <div class="text-primary-500">
                    <button on:click={() => copyToClipboard($withdrawHistoryDetails.address)}>
                        <Icon icon="solar:copy-line-duotone" width="1em" height="1em" />
                    </button>
                    
                </div>
            </div>
            
        </div>

        <div class="flex justify-between">
            <div class="text-gray-400">
                Txid
            </div>
            <div class="flex w-[60%] gap-2">
                <div class="text-right break-all ">
                    {$withdrawHistoryDetails.txid}
                </div>
                <div class="text-primary-500">
                    <button on:click={() => copyToClipboard($withdrawHistoryDetails.txid)}>
                        <Icon icon="solar:copy-line-duotone" width="1em" height="1em" />
                    </button>
                    
                </div>
            </div>
        </div>
        
        <div class="flex justify-between">
            <div class="text-gray-400">
                Withdrawal Amount
            </div>
            <div>
                {$withdrawHistoryDetails.withdrawal_amount}
            </div>
        </div>

        <div class="flex justify-between">
            <div class="text-gray-400">
                Withdrawal Fee
            </div>
            <div>
                {$withdrawHistoryDetails.fee} {$withdrawHistoryDetails.assets}
            </div>
        </div>

        <div class="flex justify-between">
            <div class="text-gray-400">
                Withdrawal Wallet
            </div>
            <div class="capitalize">
                {$withdrawHistoryDetails.wallet} Wallet
            </div>
        </div>

        <div class="flex justify-between">
            <div class="text-gray-400">
                Date
            </div>
            <div>
                {$withdrawHistoryDetails.created_at}
            </div>
        </div>
        
    </div>
    
    
   
</div>