<script lang='ts'>
	import Icon from '@iconify/svelte';
    import BackHeader from '$lib/components/BackHeader.svelte';
    import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
    import Reports from '$lib/components/bot-details/Reports.svelte'
    import Placed from '$lib/components/bot-details/Placed.svelte'
    import Transaction from '$lib/components/bot-details/Transaction.svelte'
    import Parameter from '$lib/components/bot-details/Parameter.svelte'

    let tabSet = 0
   
</script>
<BackHeader path="/bots" layout="flex items-center bg-surface-100 pb-2">
    <div class="flex justify-start flex-grow font-semibold flex-2 h3">Details</div>
</BackHeader>

<TabGroup border="" justify="" class="flex flex-col" active="underline-active border-primary-500 text-primary-500 font-semibold" hover="hover-none">

        <Tab bind:group={tabSet} name="tab1" value={0} class="text-gray-400/80" padding="px-3 py-1">Reports</Tab>
        <Tab bind:group={tabSet} name="tab2" value={1} class="text-gray-400/80" padding="px-3 py-1">Placed</Tab>
        <Tab bind:group={tabSet} name="tab3" value={2} class="text-gray-400/80" padding="px-3 py-1">Transaction</Tab>
        <Tab bind:group={tabSet} name="tab4" value={3} class="text-gray-400/80" padding="px-3 py-1">Parameter</Tab>


    <!-- Tab Panels --->
        <svelte:fragment slot="panel">
            <div class="flex flex-col flex-grow">
                {#if tabSet === 0}
                    <Reports />
                {:else if tabSet === 1}
                    <Placed />
                {:else if tabSet === 2}
                    <Transaction />
                {:else if tabSet === 2}
                    <Parameter />
                {/if}
            </div>
        
    </svelte:fragment>
    
</TabGroup>