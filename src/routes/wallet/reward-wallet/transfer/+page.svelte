<script>

	import BackHeader from "$lib/components/BackHeader.svelte";
	import Icon from '@iconify/svelte';
	import { onMount } from "svelte";
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import {getRewardWalletBalance, rewardWalletBalance } from "$lib/stores/store";
	
	onMount(async() => {
        await getRewardWalletBalance()
    })
</script>

<BackHeader path="/wallet" layout="flex items-center bg-white pb-2">
	<div class="flex justify-start flex-grow flex-2 h3">Transfer</div>
</BackHeader>

<div class="flex flex-col flex-grow gap-4 p-3 bg-surface-100">
	<div class="flex flex-col p-3 card">
		<div class="flex items-center gap-2">
			<div class="flex flex-1 text-primary-500">
				<Icon icon="solar:money-bag-bold" width="1.2em" height="1.2em" />
			</div>
			<div class="flex w-[50px] text-gray-400">
				From
			</div>
			
			<select class="flex flex-grow font-semibold bg-white border-none rounded-md flex-2 select outline-primary-500">
                <option class="" value="">Reward Wallet</option>
            </select>
		</div>
		
		<div class="text-gray-300">
			<Icon icon="ph:arrow-down-bold" width="1.2em" height="1.2em" />
		</div>

		<div class="flex items-center gap-2">
			<div class="flex flex-1 text-primary-500">
				<Icon icon="bxs:wallet" width="1.2em" height="1.2em" />
			</div>
			<div class="flex w-[50px]  text-gray-400">
				To
			</div>
			<select class="flex flex-grow font-semibold bg-white border-none rounded-md flex-2 select outline-primary-500">
                <option class="" value="">Fee Wallet</option>
            </select>
		</div>
		
	</div>

	<div class="pr-3 card">
		<select class="flex flex-grow font-semibold bg-white border-none rounded-md flex-2 select outline-primary-500">
			<option class="" value="">
					USDT<Icon icon="cryptocurrency-color:usdt" width="1.2em" height="1.2em" />
			</option>
		</select>
	</div>

	<div class="p-3 py-5 card">
		<div class="text-sm text-gray-400">
			Amount
		</div>
		<div>
			<input class="py-2 bg-white border rounded-md" type='number' placeholder="Enter an amount">
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

	<div class="flex flex-col justify-end flex-grow">
		<button class="flex text-white rounded-md shadow-md btn bg-primary-500">
			Confirm
		</button>
	</div>
	
</div>
	
