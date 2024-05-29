<script>
	import BackHeader from '$lib/components/BackHeader.svelte';
	import Icon from '@iconify/svelte';
	import {
		getFeeWalletBalance,
		getRewardWalletBalance,
		feeWalletBalance,
		rewardWalletBalance
	} from '$lib/stores/store';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import Deposits from '$lib/components/transaction-history/Deposits.svelte';
    import Withdrawals from '$lib/components/transaction-history/Withdrawals.svelte'
    import Transfer from '$lib/components/transaction-history/Transfer.svelte';
    import Bot from '$lib/components/transaction-history/Bot.svelte';
    import Referral from '$lib/components/transaction-history/Referral.svelte';
	import { storeLocal } from '$lib/stores/storeLocal';

	let tabSet = 0 ;
	let tabSetFromWithdrawalDetails = false;
	
	onMount(() => {
		
	});

	$:if ($storeLocal.prevUrl == '/profile/transaction-history/withdrawal-details') {
		// Set the tab to withdrawal tab only if it hasn't been set before
		if (!tabSetFromWithdrawalDetails) {
			tabSet = 1;
			tabSetFromWithdrawalDetails = true; // Set the flag to true to indicate tab has been set
		}
		// Reset currentTab if needed
	
	}

	

	
	
</script>

<BackHeader path="/profile" layout="flex items-center bg-white pb-2">
	<div class="flex justify-start flex-grow font-semibold flex-2 h4">Transaction History</div>
</BackHeader>

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
				class="flex justify-center flex-1 px-2">Withdrawals</Tab
			>
            <Tab
				bind:group={tabSet}
				name="tab2"
				value={2}
				class="flex justify-center flex-1 px-2">Transfer</Tab
			>
            <Tab
				bind:group={tabSet}
				name="tab2"
				value={3}
				class="flex justify-center flex-1 px-2">Bot</Tab
			>
            <Tab
				bind:group={tabSet}
				name="tab2"
				value={4}
				class="flex justify-center flex-1 px-2">Referral</Tab
			>
		</div>

		<!-- Tab Panels --->
		<svelte:fragment slot="panel">
			<div class="flex flex-col flex-grow">
				{#if tabSet === 0}
                    <Deposits />
                {:else if tabSet === 1}
                    <Withdrawals />

                {:else if tabSet === 2}
                    <Transfer />
                {:else if tabSet === 3}
                    <Bot />
                {:else if tabSet === 4}
                    <Referral />
                {/if}
			</div>
		</svelte:fragment>
	</TabGroup>
</div>
