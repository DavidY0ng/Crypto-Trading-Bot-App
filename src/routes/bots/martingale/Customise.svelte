<script lang="ts">
	import { getFeeWalletBalance, feeWalletBalance } from '$lib/stores/store';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { short_number_format } from '$lib/utils/helper';

	let investmentInput = '';
	let feeInput = '';
	let profitRatioInput = '';
	let tableData: any = [
		{ priceDeviation: '0', shares: '1' }, // 2^0 = 1
		{ priceDeviation: '1', shares: '2' }  // 2^1 = 2
	];
    let profitRatio = ['0.5', '1', '2']
    const newRow = { priceDeviation: '1', shares: '' };

    //disabled submit button
	$: isSubmitDisabled =
		investmentInput === '' ||
		feeInput === '' ||
		profitRatioInput == '' ||
        tableData.priceDeviation == '' ||
        tableData.shares == ''

    $: totalShares = tableData.reduce((sum, row) => sum + Number(row.shares), 0);
    $: maxDrawBack = tableData.reduce((cumulative, row) => {
		const priceDeviation = Number(row.priceDeviation);
		return cumulative * (1 - priceDeviation / 100);
	}, 100) - 100;

	function addRow() {
        // Calculate the shares based on the index (2^(n-1))
		const index = tableData.length;
		const shares = Math.pow(2, index);

		// Add a new row with the correct structure and calculated shares
		tableData = [...tableData, { priceDeviation: newRow.priceDeviation, shares: shares.toString() }];
		// console.log(tableData);
	}

	function deleteRow() {
		if (tableData.length > 1) {
			tableData.pop(); // Remove the last element (bottom row)
            tableData = [...tableData]
            // console.log(tableData)
		}
	}

    function selectRatio(ratio:'string') {
        profitRatioInput = ratio
    }

	onMount(() => {
		getFeeWalletBalance();
	});
</script>

<div class="flex flex-col flex-grow gap-6">
	<div>
        <div class="mb-2 font-semibold">1. Price Deviation</div>
		<!-- table header -->
		<div class="flex flex-grow mb-2 text-sm text-gray-400">
			<div class="flex flex-0">#</div>
			<div class="flex justify-center flex-1 pl-8">Price Deviation</div>
			<div class="flex justify-center flex-1 pl-1">Shares</div>
		</div>

		<!-- table content -->
        <div class="flex flex-col gap-2">
            {#each tableData as row, index}
			<div class="flex items-center justify-between">
				<div class="flex mr-5 text-gray-400 flex-0">
					{index + 1}
				</div>
				<div class="flex items-center flex-1 mx-1 border rounded-md {index == 0 ? "bg-gray-100" : ''}">
					<div>
						<input class="{index == 0 ? "bg-gray-100" : ''} border-none" bind:value={row.priceDeviation} readonly={index === 0}/>
					</div>
					<div class="p-2 text-sm">%</div>
				</div>
				<div class="flex items-center flex-1 ml-3 border rounded-md">
					<div>
						<input class="border-none" bind:value={row.shares} />
					</div>
					<div class="p-2 text-sm">share(s)</div>
				</div>
			</div>
		{/each}
        </div>
		

        <div class="flex justify-end gap-2 pt-3">
            <button on:click={addRow} class="p-2 bg-gray-100 rounded-full w-[100px] flex items-center gap-2 justify-center"> 
                <span><Icon icon="icons8:plus" width="1.2em" height="1.2em" /></span>
                Add
            </button>
            <button on:click={deleteRow} class="p-2 bg-gray-100 rounded-full w-[100px] flex items-center gap-2 justify-center">
                <span><Icon icon="icons8:minus" width="1.2em" height="1.2em" /></span>
                Delete
            </button>
          </div>
	</div>

    <div class="text-sm">
        <div class="flex justify-between">
            <div>
                Max drawback
            </div>
            <div class="font-semibold">
                {short_number_format(maxDrawBack)}%
            </div>
        </div>
        
        <div class="flex justify-between">
            <div>
                Total shares
            </div>
            <div class="font-semibold">
                {totalShares}
            </div>
        </div>
        
    </div>

	<div>
		<div class="mb-2 font-semibold">2. Profit Ratio</div>
		<div class="flex items-center gap-2 border rounded-md">
			<input
				class="border-none placeholder:text-sm"
				placeholder="Take profit ratio (≥0.2%)"
                type = "number"
				bind:value={profitRatioInput}
			/>
            <div class="flex gap-1 p-1">
                {#each profitRatio as ratio}
                    <button on:click={() => selectRatio(ratio)} class="bg-gray-100 rounded-md w-[40px] text-sm py-1">{ratio}%</button>
                {/each}
            </div>
		</div>
	</div>

	<div>
		<div class="mb-2 font-semibold">3. Investment</div>
		<div class="flex items-center bg-gray-200 rounded-md">
			<input
				class="p-2 rounded-md placeholder:text-sm"
				type="number"
				placeholder="Investment (Min ≥ 10 USDT)"
				bind:value={investmentInput}
			/>
		</div>
	</div>

	<div>
		<div class="mb-2 font-semibold">4. Trading Bot Fee</div>
		<div class="flex items-center mb-1 bg-gray-200 rounded-md">
			<input class="p-2 rounded-md" type="number" placeholder="Fee (USDT)" bind:value={feeInput} />
		</div>
		<div class="flex justify-between text-xs">
			<div class="text-gray-400">Available balance</div>
			<div class="flex items-center gap-2">
				<div class="font-semibold">
					{$feeWalletBalance} USDT
				</div>
				<a href="/wallet/fee-wallet/deposit">
					<span class="text-purple-600"
						><Icon icon="octicon:feed-plus-16" width="1.2em" height="1.2em" /></span
					>
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
