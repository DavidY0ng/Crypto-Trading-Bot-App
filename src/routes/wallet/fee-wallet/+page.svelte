<script>
    import BackHeader from "$lib/components/BackHeader.svelte"
    import Icon from "@iconify/svelte";
    import { getFeeWalletBalance, getRewardWalletBalance, feeWalletBalance, rewardWalletBalance } from "$lib/stores/store";
	import { onMount } from "svelte";
    import DepositsHistory from "$lib/components/transaction-history/Deposits.svelte";
    import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
    import BotHistory from "$lib/components/transaction-history/Bot.svelte";
    
    let tabSet = 0
    onMount(() => {
        getFeeWalletBalance()
        // getRewardWalletBalance()
    })
    
</script>

<BackHeader path='/wallet' layout='flex items-center pb-2 bg-white'>
    <div class="flex justify-center flex-1 font-semibold h3">
        Fee Wallet
    </div>
    
    <div class="flex-1">
        
    </div>
</BackHeader>

<div class="p-3 pb-5 bg-white">
    <div class="flex flex-col shadow-md  rounded-md bg-gradient-to-r from-[#821dd4] to-[#b452ea] bg-cover h-[200px]">
        <div class="flex justify-between flex-grow p-5 text-white h-2/3">
            <div class="flex flex-col gap-2">
                <div class="text-base">
                    Total Asset
                </div>
               
                <div class="font-bold text-white h1">
                    {$feeWalletBalance} <span class="h5">USDT</span>
                </div>
            </div>
            <div class="h2">
                <Icon icon="bxs:wallet" width="1.2em" height="1.2em" />
            </div>
        </div>
        
        <div class="flex flex-grow overflow-hidden rounded-b-xl h-1/3">
            <div class="flex items-center justify-end flex-grow pr-5">
                <a class="font-bold border bg-[#821dd4] bg-gradient-to-r from-[#821dd4] to-[#b452ea] rounded-lg btn text-white" href='/wallet/fee-wallet/deposit'>
                    Deposit
                </a>
            </div>
        </div>
    </div>

</div>

<div class="flex flex-grow bg-white">
	<TabGroup
		border="border-b"
		justify="justify-start"
		class="flex flex-col w-full"
		active="border-primary-500 border-b-2 text-black"
	>
		<div class="flex flex-grow text-sm font-semibold text-gray-400/70">
			<Tab
				bind:group={tabSet}
				name="tab1"
				value={0}
				class="flex justify-center flex-1 px-2"
			>
				Deposits
			</Tab>
			<Tab
				bind:group={tabSet}
				name="tab2"
				value={1}
				class="flex justify-center flex-1 px-2">Bot</Tab
			>
		</div>

		<!-- Tab Panels --->
		<svelte:fragment slot="panel">
			<div class="flex flex-col flex-grow">
				{#if tabSet === 0}
                    <DepositsHistory />
                {:else if tabSet === 1}
                    <BotHistory />
                {/if}
			</div>
		</svelte:fragment>
	</TabGroup>
</div>
