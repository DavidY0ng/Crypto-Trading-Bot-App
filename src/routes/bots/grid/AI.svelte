<script>
    import { getFeeWalletBalance, feeWalletBalance } from "$lib/stores/store";
	import Icon from "@iconify/svelte";
	import { onMount } from "svelte";
	import { get } from "svelte/store";

    let investmentInput = ''
    let feeInput = ''

    $: isSubmitDisabled = investmentInput === '' || feeInput === '';

    const parameters = [
        {
            name: "Price Range",
            value: "67,505.06 - 73,477.16 USDT"

        },
        {
            name: "Number of Grids",
            value: "24"

        },
        {
            name: "Profit/Grid (fees deducted)",
            value: "0.13% - 0.16%"

        },
    ]

    onMount(() => {
        getFeeWalletBalance()
    })
</script>

<div class="flex flex-col flex-grow gap-6">
    <div>
        <div class="mb-2 font-semibold">
            1. Parameters
        </div>
        <div class="flex flex-col gap-2">
            {#each parameters as parameter}
            <div class="flex justify-between text-sm">
                <div class="text-gray-400">
                    {parameter.name}
                </div>
                <div class="font-semibold">
                    {parameter.value}
                </div>
            </div>
            
            {/each}
        </div>
    </div>
    
    <div>
        <div class="mb-2 font-semibold">
            2. Investment
        </div>
        <div class="flex items-center bg-gray-200 rounded-md">
            <input class="p-2 rounded-md" type="number" placeholder="Total investment (USDT)" bind:value={investmentInput}>
        </div>
    </div>

    <div>
        <div class="mb-2 font-semibold">
            2. Trading Bot Fee
        </div>
        <div class="flex items-center mb-1 bg-white rounded-md">
            <input class="p-2 rounded-md" type="number" placeholder="Fee (USDT)" bind:value={feeInput}>
        </div>
        <div class="flex justify-between text-xs">
            <div class="text-gray-400">
                Available balance
            </div>
            <div class="flex items-center gap-2">
                <div class="font-semibold ">
                    {$feeWalletBalance} USDT 
                </div>
                <a href="/wallet/fee-wallet/deposit">
                    <span class="text-purple-600"><Icon icon="octicon:feed-plus-16" width="1.2em" height="1.2em" /></span>
                </a>
            </div>
            
        </div>
       
    </div>

    <div class="flex flex-col justify-end flex-grow">
		<button
			on:click={() => submitTransfer(amount)}
			class="flex text-white rounded-md shadow-md btn bg-primary-500"
            disabled={isSubmitDisabled}
		>
			Confirm
		</button>
	</div>


</div>