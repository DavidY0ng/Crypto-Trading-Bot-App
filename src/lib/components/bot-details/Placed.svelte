<script>
	import { ProgressBar } from '@skeletonlabs/skeleton';

	let progressValue = 40;
	let buyData = [
		{
			index: '1',
			price: '70653.0',
			percentage: '-0.75%'
		},
		{
			index: '2',
			price: '70653.0',
			percentage: '-1.35%'
		},
		{
			index: '3',
			price: '70653.0',
			percentage: '-1.93%'
		},
		{
			index: '4',
			price: '70653.0',
			percentage: '-2.48%'
		}
	];

	let sellData = [
		{
			index: '1',
			price: '70653.0',
			percentage: '-0.75%'
		},
		{
			index: '2',
			price: '70653.0',
			percentage: '-1.35%'
		},
		{
			index: '3',
			price: '70653.0',
			percentage: '-1.93%'
		},
		{
			index: '4',
			price: '70653.0',
			percentage: '-2.48%'
		}
	];
</script>

<div class="flex flex-col gap-3 p-3">
	<div class="card !shadow-sm p-3 flex justify-between">
		<div>
			<div class="pb-2 text-xs text-gray-400/80">ETH holdings</div>
			<div class="font-bold">0.002098</div>
		</div>

		<div>
			<div class="pb-2 text-xs text-gray-400/80">USDT holdings</div>
			<div class="font-bold text-right">0.002098</div>
		</div>
	</div>

	<div>
		<div class="relative flex flex-col items-center p-3 mb-3 text-white bg-surface-600 rounded-xl">
			<div>
				<div>Quantity per grid 0.0003 ETH</div>
				<div>Current price ETH/USDT = 3850.01</div>
			</div>

			<div class="triangle" style="left: calc({progressValue}% - 10px);"></div>
		</div>

		<div class="overflow-hidden rounded-full">
			<ProgressBar
				bind:value={progressValue}
				max={100}
				meter={'bg-red-500'}
				track={'bg-green-500'}
				rounded={'rounded-none'}
			/>
		</div>
	</div>

	<div>  
		<div class="flex justify-between mb-4 text-xs text-gray-400">
			<div>Buy price</div>
			<div>How far to fill</div>
			<div>Sell price</div>
		</div>

		<div class="flex gap-5 font-semibold">
			<div class="flex flex-col flex-1 gap-2">
				{#each buyData as data, i}
					<div class="flex items-center justify-between flex-grow text-sm">
						<div class="flex items-center gap-3">
							<div
								class="flex items-center justify-center w-5 h-4 text-white bg-green-500 rounded-sm text-[9px]"
							>
								{data.index}
							</div>
							<div class="{i == 0 ? 'text-green-500' : ''}">
								{data.price}
							</div>
						</div>

						<div class="text-right {i == 0 ? 'text-green-500' : ''}">
							{data.percentage}
						</div>
					</div>
				{/each}
			</div>

			<div class="flex flex-col flex-1 gap-2">
				{#each sellData as data, i}
					<div class="flex items-center justify-between flex-grow text-sm">
						<div class="text-left {i == 0 ? 'text-red-500' : ''}">
							{data.percentage}
						</div>
						<div class="flex items-center gap-3">
							<div class="{i == 0 ? 'text-red-500' : ''}">
								{data.price}
							</div>

							<div
								class="flex items-center justify-center w-5 h-4 text-white bg-red-500 rounded-sm text-[9px]"
							>
								{data.index}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

</div>

<style>
	.triangle {
		position: absolute;
		top: 64px; /* Adjust this to position the triangle above the progress bar */
		width: 0;
		height: 0;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-top: 15px solid #202028; /* Match this color to the progress bar color or adjust as needed */
	}
</style>
