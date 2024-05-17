<script>
	import BackHeader from '$lib/components/backButton/BackHeader.svelte';
	import Icon from '@iconify/svelte';
	import Modal from '$lib/components/modal/Modal.svelte';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';

	let tabSet = 0;
</script>

<BackHeader path="/" layout="flex items-center bg-white pb-2">
	<div class="flex justify-center flex-1 h4">Manage Plans</div>

	<div class="flex flex-1" />
</BackHeader>

<div>
	<TabGroup justify="justify-center" class="w-full">
		<Tab bind:group={tabSet} name="tab1" value={0}>
			<span>Current Plan</span>
		</Tab>
		<Tab bind:group={tabSet} name="tab2" value={1}>History</Tab>
		<!-- Tab Panels --->
		<svelte:fragment slot="panel">
			{#if tabSet === 0}
				(tab panel 1 contents)
			{:else if tabSet === 1}
				(tab panel 2 contents)
			{/if}
		</svelte:fragment>
	</TabGroup>
    
</div>
