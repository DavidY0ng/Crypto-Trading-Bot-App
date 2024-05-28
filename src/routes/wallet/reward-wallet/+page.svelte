<script>
    import BackHeader from "$lib/components/BackHeader.svelte"
    import Icon from "@iconify/svelte";
    import { getFeeWalletBalance, getRewardWalletBalance, feeWalletBalance, rewardWalletBalance } from "$lib/stores/store";
	import { onMount } from "svelte";
	import { Tab, TabGroup } from "@skeletonlabs/skeleton";
    import WithdrawalsHistory from "$lib/components/transaction-history/Withdrawals.svelte";
    import TransferHistory from "$lib/components/transaction-history/Transfer.svelte";
    import ReferralHistory from "$lib/components/transaction-history/Referral.svelte";
    
    let tabSet = 0
    onMount(() => {
        // getFeeWalletBalance()
        getRewardWalletBalance()
    })
</script>

<BackHeader path="/profile" layout="flex items-center bg-white pb-2">
	<div class="flex justify-start flex-grow font-semibold flex-2 h3">Reward Wallet</div>
</BackHeader>

<div class="p-3 pb-5 bg-white">
    <div class="flex flex-col shadow-md rounded-md bg-gradient-to-r from-[#7e4de0] to-[#8d84f6] h-[200px]">
        <div class="flex justify-between flex-grow p-5 text-white h-2/3">
            <div class="flex flex-col gap-2">
                <div class="text-base">
                    Total Asset
                </div>
               
                <div class="font-bold text-white h1">
                    {$rewardWalletBalance} <span class="h5">USDT</span>
                </div>
            </div>
            <div class="h2">
                <Icon icon="solar:money-bag-bold" width="1.2em" height="1.2em" />
            </div>
        </div>
        
        <div class="flex flex-grow overflow-hidden bg-transparent rounded-b-xl h-1/3">
            <div class="flex items-center justify-end flex-grow gap-3 pr-5 font-bold text-black">
                <a class="text-white border rounded-lg bg-gradient-to-r from-purple-500 to-violet-500 btn" href='/wallet/reward-wallet/transfer'>
                    Transfer
                </a>
                <a class="text-white bg-gradient-to-r from-[#7e4de0] to-[#8d84f6] rounded-lg border btn w-[95px]" href='/wallet/reward-wallet/withdraw'>
                    Withdraw
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
				Withdrawals
			</Tab>
			<Tab
				bind:group={tabSet}
				name="tab2"
				value={1}
				class="flex justify-center flex-1 px-2">Transfer</Tab
			>
            <Tab
				bind:group={tabSet}
				name="tab2"
				value={2}
				class="flex justify-center flex-1 px-2">Referral</Tab
			>
		</div>

		<!-- Tab Panels --->
		<svelte:fragment slot="panel">
			<div class="flex flex-col flex-grow">
				{#if tabSet === 0}
                    <WithdrawalsHistory />
                {:else if tabSet === 1}
                    <TransferHistory />
                {:else if tabSet === 2}
                    <ReferralHistory />
                {/if}
			</div>
		</svelte:fragment>
	</TabGroup>
</div>