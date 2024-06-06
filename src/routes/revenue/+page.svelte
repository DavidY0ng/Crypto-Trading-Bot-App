<script>
    import BackHeader from "$lib/components/BackHeader.svelte";
    import TotalProfit from './TotalProfit.svelte'
    import DailyProfit from "./DailyProfit.svelte";
</script>

<BackHeader path="/" layout="flex items-center bg-white pb-2">
	<div class="flex justify-start flex-grow font-semibold flex-2 h4">Revenue</div>
</BackHeader>

<div class="">
    <div class="rounded-md bg-primary-900">
        <div class="p-3 text-white rounded-xl">
			<div class="flex justify-between mb-3">
				<div class="flex flex-col">
					<div class="text-sm text-gray-400">Total Profit</div>
					<div class="text-lg font-semibold text-success-500">0.0000</div>
				</div>

				<div class="flex flex-col text-end">
					<div class="text-sm text-gray-400">Current Investment</div>
					<div class="text-lg font-semibold ">0.00</div>
				</div>
			</div>

			<div class="flex justify-between">
				<div class="flex flex-col">
					<div class="text-sm text-gray-400">Today's Profit</div>
					<div class="text-lg font-semibold text-success-500">0.00</div>
				</div>

				<div class="flex flex-col text-end">
					<div class="text-sm text-gray-400">Floating PnL</div>
					<div class="text-lg font-semibold text-error-500">0.0000</div>
				</div>
			</div>
		</div>
    </div>

</div>


<div class="flex flex-col flex-grow gap-10 p-3 bg-white">
    
    <TotalProfit />
    <DailyProfit />
</div>