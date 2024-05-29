<script>
	import BackHeader from '$lib/components/BackHeader.svelte';
	import Icon from '@iconify/svelte';
	import {
		getDepositHistoryDetails, depositHistoryDetails
	} from '$lib/stores/store';
	import { onMount } from 'svelte';
    import { page } from '$app/stores';
	import { copyToClipboard } from '$lib/utils/helper';
	import { goto } from '$app/navigation';
    import { short_number_format } from '$lib/utils/helper'

	onMount(() => {
        let sn = $page.url.searchParams.get('sn')
        getDepositHistoryDetails(sn)
    });
</script>

<div class="flex items-center px-3 pt-3 pb-2 bg-white">
    <div class="flex flex-1">
        <button on:click={() => window.history.back()}>
            <Icon icon="gravity-ui:arrow-left" width="1.2em" height="1.2em" />
        </button>
    </div>

    <div class="flex justify-start flex-grow font-semibold flex-2 h4">
        Deposit Details
    </div>
</div>

<div class="flex flex-col flex-grow bg-white">
    <div>
        <div class="flex flex-col items-center flex-grow gap-2 p-3">
            <div class="font-semibold text-green-500 h1">
                +{short_number_format($depositHistoryDetails.amount)} {$depositHistoryDetails.assets}
            </div>
            <div class="flex items-center gap-2">
                <div class="text-green-500 {$depositHistoryDetails.status == 'success' ? 'flex' : 'hidden' }">
                    <Icon icon="mdi:tick-circle" width="1.2em" height="1.2em" />
                </div>
                <div class=" capitalize {$depositHistoryDetails.status == 'success' ? 'text-green-500' : '' }">
                    {$depositHistoryDetails.status}
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
                {$depositHistoryDetails.network}
            </div>
        </div>

        <div class="flex justify-between">
            <div class="text-gray-400">
                Address
            </div>
            <div class="flex w-[60%] gap-2">
                <div class="text-right break-all ">
                    {$depositHistoryDetails.address}
                </div>
                <div class="text-primary-500">
                    <button on:click={() => copyToClipboard($depositHistoryDetails.address)}>
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
                    {$depositHistoryDetails.txid}
                </div>
                <div class="text-primary-500">
                    <button on:click={() => copyToClipboard($depositHistoryDetails.txid)}>
                        <Icon icon="solar:copy-line-duotone" width="1em" height="1em" />
                    </button>
                    
                </div>
            </div>
        </div>
        
        <div class="flex justify-between">
            <div class="text-gray-400">
                Deposit Wallet
            </div>
            <div class="capitalize">
                {$depositHistoryDetails.wallet} Wallet
            </div>
        </div>

        <div class="flex justify-between">
            <div class="text-gray-400">
                Date
            </div>
            <div>
                {$depositHistoryDetails.created_at}
            </div>
        </div>
        
    </div>
    
    
   
</div>