<script>
    import { getMembershipPlanHistory, membershipPlanHistory} from '$lib/stores/store';
    import { onMount } from 'svelte';
    import { short_number_format } from '$lib/utils/helper';
    
    onMount(() => {
		getMembershipPlanHistory()
	});

</script>
<div class="bg-warning-500"></div>
<div class="flex flex-col justify-between flex-grow px-3">
    {#each $membershipPlanHistory as data}
	<div class="mb-3 overflow-hidden rounded-md shadow-md">
		<!-- header -->
		<div class="flex items-center justify-between p-5 py-3 bg-gradient-to-r from-primary-500 to-primary-500">
			<div class="flex flex-col justify-between text-white">
				<div class="font-bold h2">Membership</div>
				<!-- <div class="h5">Expires in: {data.expired_in} days</div> -->
			</div>
            <div class="bg-gray-400 capitalize rounded-full w-[70px] flex justify-center py-1">
                {data.status}
            </div>
			
		</div>

		<!-- details -->
		<div class="px-5 pb-3 bg-white border">
			<div class="my-3 h3">Billing Details:</div>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <div class="text-sm text-gray-400">Transaction ID</div>
                    <div class="font-bold">{data.transaction_id}</div>
                </div>
                <div class="text-end">
                    <div class="text-sm text-gray-400">Duration</div>
                    <div class="font-bold">{data.duration} Days</div>
                </div>
                <div>
                    <div class="text-sm text-gray-400">Valid From</div>
                    <div class="font-bold">{data.valid_from}</div>
                </div>
                <div class="text-end">
                    <div class="text-sm text-gray-400">Valid Until</div>
                    <div class="font-bold">{data.valid_until}</div>
                </div>
                <div>
                    <div class="text-sm text-gray-400">Purchase Date</div>
                    <div class="font-bold">{data.purchase_date}</div>
                </div>
                <div class="text-end">
                    <div class="text-sm text-gray-400">Fee</div>
                    <div class="font-bold">${short_number_format(data.fee)}</div>
                </div>
            </div>
			
		</div>
	</div>
    {/each}
    
</div>
