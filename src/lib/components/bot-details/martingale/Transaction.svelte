<script>
	import Icon from '@iconify/svelte';
    import { slide } from 'svelte/transition';

	let expanded = false;

	function onExpand() {
		expanded = !expanded;
	}
</script>

<div class="flex flex-col gap-3 p-3">
	<div class="card !shadow-sm p-3 flex justify-between">
		<div>
			<div class="pb-2 text-xs text-gray-400/80">24H rounds</div>
			<div class="font-bold text-center">0</div>
		</div>

		<div>
			<div class="pb-2 text-xs text-gray-400/80">Total rounds</div>
			<div class="font-bold text-center">--</div>
		</div>

		<div>
			<div class="pb-2 text-xs text-gray-400/80">Daily rounds</div>
			<div class="font-bold text-center">0</div>
		</div>
	</div>

	<p class="text-xs text-gray-400">
		One transaction means one buy and one sell. Grid Trading Boy helps to 7/24 auto buy low and sell
		high in the range you set
	</p>

	<div class="card !shadow-sm p-3">
		<div class="flex justify-between font-semibold">
			<div>Total</div>
			<div class="text-green-500">+0.0002415 USDT (Fee deducted)</div>
		</div>

		<hr class="my-3 divider" />

		<div class="flex flex-col gap-3">
			<div class="flex justify-between text-sm font-semibold">
				<div>#1</div>
				<div>05/28 15:45</div>
				<div class="flex items-center gap-2 text-green-500">
					<div class="">+0.0024158 USDT</div>
					<button on:click={onExpand}>
						<Icon icon="mingcute:down-line" width="1.2em" height="1.2em" class="{expanded ? 'rotate-180' : '' }" />
					</button>
				</div>
			</div>

			{#if expanded}
            <div transition:slide>
                <!-- sell -->
				<div class="flex flex-col gap-2 mb-5">
					<div class="flex justify-between text-xs">
						<div class="px-1 text-white bg-red-500 rounded-md">Sell ETH</div>
						<div class="text-gray-400">2024/05/28 15:45</div>
					</div>

					<div class="flex justify-between">
						<div>
							<div class="mb-1 text-xs text-gray-400">Price USDT</div>
							<div class="text-sm font-semibold">3854.39</div>
						</div>

						<div>
							<div class="mb-1 text-xs text-gray-400">Buy fee USDT</div>
							<div class="text-sm font-semibold">0</div>
						</div>

						<div>
							<div class="mb-1 text-xs text-gray-400">Total USDT</div>
							<div class="text-sm font-semibold text-right text-red-500">0.11533</div>
						</div>
					</div>
				</div>

				<!-- buy -->
				<div class="flex flex-col gap-2">
					<div class="flex justify-between text-xs">
						<div class="px-1 text-white bg-green-500 rounded-md">Buy ETH</div>
						<div class="text-gray-400">2024/05/28 15:45</div>
					</div>

					<div class="flex justify-between">
						<div>
							<div class="mb-1 text-xs text-gray-400">Price USDT</div>
							<div class="text-sm font-semibold">3854.39</div>
						</div>

						<div>
							<div class="mb-1 text-xs text-gray-400">Buy fee USDT</div>
							<div class="text-sm font-semibold">0</div>
						</div>

						<div>
							<div class="mb-1 text-xs text-gray-400">Total USDT</div>
							<div class="text-sm font-semibold text-right text-green-500">0.11533</div>
						</div>
					</div>
				</div>
            </div>
				
			{/if}
		</div>
	</div>
</div>

