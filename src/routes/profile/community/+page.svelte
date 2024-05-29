<script>

	import BackHeader from "$lib/components/BackHeader.svelte";
	import { Tab, TabGroup } from "@skeletonlabs/skeleton";
    import Referrals from '$lib/components/community/Referrals.svelte'
    import Records from '$lib/components/community/Records.svelte'

    let tabSet = 0
</script>


<BackHeader path="/profile" layout="flex items-center bg-white pb-2">
	<div class="flex justify-start flex-grow font-semibold flex-2 h4">My Community</div>
</BackHeader>

<div class="flex flex-grow">
	<TabGroup border="" justify="justify-center" class="flex flex-col flex-grow w-full h-full " active="border-primary-500 border-b-2 text-primary-500">
		<div class="flex flex-grow">
			<Tab bind:group={tabSet} name="tab1" value={0} class="flex justify-center flex-1 flex-grow w-1/2 font-semibold text-gray-400">
				<span>My Referrals</span>
			</Tab>
			<Tab bind:group={tabSet} name="tab2" value={1} class="flex justify-center flex-1 flex-grow w-1/2 font-semibold text-gray-400">Referral Records</Tab>
		</div>
	
		<!-- Tab Panels --->
            <svelte:fragment slot="panel">
                <div class="flex flex-col flex-grow">
                    {#if tabSet === 0}
               <Referrals />
			{:else if tabSet === 1}
				<Records />
			{/if}
                </div>
			
		</svelte:fragment>
		
	</TabGroup>
    
</div>