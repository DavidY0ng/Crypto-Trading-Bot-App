<script lang='ts'>
	import Icon from '@iconify/svelte';
    import BackHeader from '$lib/components/BackHeader.svelte';
    import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';

    let tabSet = 0
   
</script>
<BackHeader path="/bots" layout="flex items-center bg-surface-100 pb-2">
    <div class="flex justify-start flex-grow font-semibold flex-2 h3">Details</div>
</BackHeader>

<TabGroup border="" justify="justify-center" class="flex flex-col flex-grow w-full h-full font-semibold" active="border-primary-500 border-b-2 text-primary-500">
    <div class="flex flex-grow">
        <Tab bind:group={tabSet} name="tab1" value={0} class="flex justify-center flex-1 flex-grow w-1/2">
            <span>Current Plan</span>
        </Tab>
        <Tab bind:group={tabSet} name="tab2" value={1} class="flex justify-center flex-1 flex-grow w-1/2">History</Tab>
    </div>

    <!-- Tab Panels --->
        <svelte:fragment slot="panel">
            <div class="flex flex-col flex-grow">
                {#if tabSet === 0}
          
        {:else if tabSet === 1}
          
        {/if}
            </div>
        
    </svelte:fragment>
    
</TabGroup>