<script>
	import BackHeader from '$lib/components/BackHeader.svelte';
	import Icon from '@iconify/svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
    import CurrentPlan from './CurrentPlan.svelte';
    import History from './History.svelte';

	let tabSet = 0;
</script>

<BackHeader path="/profile" layout="flex items-center bg-white pb-2">
	<div class="flex justify-center flex-1 h4">Manage Plans</div>

	<div class="flex flex-1" />
</BackHeader>

<div class="w-full">
	<TabGroup border="border-none" justify="justify-center" class="w-full font-semibold" active="border-primary-500 border-b-2 text-primary-500">
		<Tab bind:group={tabSet} name="tab1" value={0}>
			<span>Current Plan</span>
		</Tab>
		<Tab bind:group={tabSet} name="tab2" value={1}>History</Tab>
		<!-- Tab Panels --->
            <svelte:fragment slot="panel">
                <div class="">
                    {#if tabSet === 0}
                <CurrentPlan />
			{:else if tabSet === 1}
				<History />
			{/if}
                </div>
			
		</svelte:fragment>
		
	</TabGroup>
    
</div>
