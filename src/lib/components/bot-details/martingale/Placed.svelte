<script>
	import Icon from '@iconify/svelte';
	import { ProgressBar } from '@skeletonlabs/skeleton';

	let progressValue = 40;
	let samepleData = [
		{
			index: '1',
			price: '70653.0',
			percentage: '-0.75%',
			type: 'sell',
			amount: '0.001',
			currency: 'ETH'
		},
		{
			index: '2',
			price: '70653.0',
			percentage: '-1.35%',
			type: 'sell',
			amount: '0.001',
			currency: 'ETH'
		},
		{
			index: '3',
			price: '70653.0',
			percentage: '-1.93%',
			type: 'bought',
			amount: '0.001',
			currency: 'ETH'
		},
		{
			index: '4',
			price: '70653.0',
			percentage: '-2.48%',
			type: 'current',
			amount: '0.001',
			currency: 'ETH'
		},
		{
			index: '4',
			price: '70653.0',
			percentage: '-2.48%',
			type: 'buy',
			amount: '0.001',
			currency: 'ETH'
		},
		{
			index: '4',
			price: '70653.0',
			percentage: '-2.48%',
			type: 'buy',
			amount: '0.001',
			currency: 'ETH'
		},
		{
			index: '4',
			price: '70653.0',
			percentage: '-2.48%',
			type: 'buy',
			amount: '0.001',
			currency: 'ETH'
		},
		{
			index: '4',
			price: '70653.0',
			percentage: '-2.48%',
			type: 'buy',
			amount: '0.001',
			currency: 'ETH'
		},
		{
			index: '4',
			price: '70653.0',
			percentage: '-2.48%',
			type: 'buy',
			amount: '0.001',
			currency: 'ETH'
		},
		{
			index: '4',
			price: '70653.0',
			percentage: '-2.48%',
			type: 'buy',
			amount: '0.001',
			currency: 'ETH'
		}
	];
</script>

<div class="flex flex-col gap-3 p-3">
	<div>
		<div class="card !shadow-sm p-3 flex flex-col gap-3">
			<div class="flex items-center gap-1">
				<div class="font-semibold">Round</div>
				<div class="px-1 text-sm text-white rounded-md bg-primary-500">#1</div>
			</div>
			<div class="text-xs text-gray-400">
				You will make 0.01% profit when ETH price +0.86% in this round. Check more rounds in the
				Transactions tab.
			</div>
			<div class="flex justify-between">
				<div>
					<div class="pb-1 text-xs text-gray-400/80">ETH holdings</div>
					<div class="font-bold">0.002098</div>
				</div>

				<div>
					<div class="pb-1 text-xs text-gray-400/80">USDT holdings</div>
					<div class="font-bold text-right">0.002098</div>
				</div>
				<div>
					<div class="pb-1 text-xs text-gray-400/80">Average cost USDT</div>
					<div class="font-bold text-right">597.60</div>
				</div>
			</div>
		</div>
	</div>

	<div>
		<div class="flex gap-5 !shadow-sm card p-5 relative">
			<!-- <hr class="divider-vertical !border-r-4 h-full !border-gray-100 left-[140px] z-0 top-5 -bottom-20 py-5"> -->
			<div class="ml-[40px] flex flex-col gap-3 relative">
				{#each samepleData as data, i}
					<div class="flex items-center gap-3">
						{#if data.type == 'current'}
						<div class="flex items-center">
							<div class="flex flex-col items-end px-2 py-1 text-white rounded-md bg-primary-500">
								<div class="text-xs">
									Current price
								</div>
								<div class="text-sm font-semibold">
									{data.price}
								</div>
							</div>
							<hr class="divider !border-primary-500 w-[12px] !border-t-4">
							<div
								class="z-10 flex items-center justify-center w-4 h-4 rounded-full bg-primary-500"
							>
								<div class="w-2 h-2 bg-white rounded-full"></div>
							</div>
						</div>
						
						
						{:else}
							<div
								class="flex pl-[35px] flex-col items-end {data.type == 'buy'
									? 'text-green-500'
									: data.type == 'sell'
										? 'text-red-500'
										: data.type == 'bought'
											? 'text-gray-400'
											: ''}"
							>
								<div class="text-xs">
									{data.percentage}
								</div>
								<div class="text-sm font-semibold">
									{data.price}
								</div>
							</div>
						{/if}

						{#if data.type == 'bought'}
							<div class="z-10 flex items-center justify-center w-4 h-4 bg-white rounded-full">
								<Icon
									icon="teenyicons:tick-circle-solid"
									width="1.2em"
									height="1.2em"
									class="text-gray-400"
								/>
							</div>
						{:else if data.type == 'current'}
							<!-- <div
								class="z-10 flex items-center justify-center w-4 h-4 rounded-full bg-primary-500"
							>
								<div class="w-2 h-2 bg-white rounded-full"></div>
							</div> -->
						{:else}
							<div
								class="z-10 {data.type == 'buy'
									? 'bg-green-500'
									: data.type == 'sell'
										? 'bg-red-500'
										: ''} h-4 w-4 rounded-full flex items-center justify-center"
							>
								<Icon
									icon="icon-park-solid:up-one"
									width="1em"
									height="1em"
									color="white"
									class={data.type == 'buy' ? 'rotate-180' : ''}
								/>
							</div>
						{/if}

						<div class="flex items-center gap-2">
							{#if data}
							{#if data.type == 'current'}
								<div></div>
							{:else}
								<hr
									class="border-dashed divider !border-t w-4 {data.type == 'buy'
										? 'border-green-500'
										: data.type == 'sell'
											? 'border-red-500'
											: data.type == 'bought'
												? 'border-gray-400'
												: ''}"
								/>
								<div class="absolute {data.type == 'buy'
								? `bg-green-500/10 py-4 px-1`
								: data.type == 'sell'
									? 'bg-red-500/10 py-4 px-1'
										: ''}"
								style="width: {data.type == 'buy' ? `${i * 11}px` : data.type == 'sell' ? `${(samepleData.length - i) * 5}px` : 'auto'};"
								>
									
								</div>
								<div
									class="text-sm capitalize  {data.type == 'buy'
										? `text-green-500  `
										: data.type == 'sell'
											? 'text-red-500  '
											: data.type == 'bought'
												? 'text-gray-400'
												: ''}"
								>
									{data.type}
									{data.amount}
									{data.currency}
								</div>
								
							{/if}
							{/if}
						</div>
					</div>
				{/each}
				<div class="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
					<div class="z-0 w-px h-full bg-gray-100 vertical-line"></div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="w-[10px]"></div>

<style>
	.vertical-line {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 105px;
		transform: translateX(-50%);
		z-index: 0;
		width: 5px;
	}
</style>
