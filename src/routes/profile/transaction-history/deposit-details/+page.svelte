<script>
	import BackHeader from '$lib/components/BackHeader.svelte';
	import Icon from '@iconify/svelte';
	import {
		getFeeWalletBalance,
		getRewardWalletBalance,
		feeWalletBalance,
		rewardWalletBalance
	} from '$lib/stores/store';
	import { onMount } from 'svelte';
    import { page } from '$app/stores';
	import { copyToClipboard } from '$lib/utils/helper';
	import { goto } from '$app/navigation';

	let tabSet = 0;
	onMount(() => {});
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
            <div class="font-semibold h1">
                +113.23232 USDT
            </div>
            <div class="flex items-center gap-2">
                <div class="text-green-500">
                    <Icon icon="mdi:tick-circle" width="1.2em" height="1.2em" />
                </div>
                <div class="text-green-500">
                    Completed
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
                Bsc
            </div>
        </div>

        <div class="flex justify-between">
            <div class="text-gray-400">
                Address
            </div>
            <div class="flex w-[60%] gap-2">
                <div class="text-right break-all ">
                    0x39f4c638f78110119AD9B1eeaB73832332E0D75F
                </div>
                <div class="text-primary-500">
                    <button on:click={() => copyToClipboard(' 0x39f4c638f78110119AD9B1eeaB73832332E0D75F')}>
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
                    0x39f4c638f78110119AD9B1eeaB73832332E0D75F
                </div>
                <div class="text-primary-500">
                    <button on:click={() => copyToClipboard(' 0x39f4c638f78110119AD9B1eeaB73832332E0D75F')}>
                        <Icon icon="solar:copy-line-duotone" width="1em" height="1em" />
                    </button>
                    
                </div>
            </div>
        </div>
        
        <div class="flex justify-between">
            <div class="text-gray-400">
                Deposit Wallet
            </div>
            <div>
                Fee Wallet
            </div>
        </div>

        <div class="flex justify-between">
            <div class="text-gray-400">
                Date
            </div>
            <div>
                2024-03-07 14:14:14
            </div>
        </div>
        
    </div>
    
    
   
</div>