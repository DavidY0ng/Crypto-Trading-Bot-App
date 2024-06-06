<script lang='ts'>
	import Icon from '@iconify/svelte';
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    let value: number = 0;
    import Bots from './Bots.svelte';
    import Running from './Running.svelte'
	import { onMount } from 'svelte';
	import { storeLocal } from '$lib/stores/storeLocal';

	let fromDetailsPage = false;
	
	onMount(() => {
		
	});

	$:if ($storeLocal.prevUrl == '/bots/grid-details' || $storeLocal.prevUrl == '/bots/martingale-details') {
		// Set the tab to withdrawal tab only if it hasn't been set before
		if (!fromDetailsPage) {
			value = 1;
			fromDetailsPage = true; // Set the flag to true to indicate tab has been set
		}
		// Reset currentTab if needed
	}

   
</script>

<div class="flex flex-col flex-grow p-3 bg-white">
    <div class="flex flex-col flex-grow p-3">
        <div class="flex justify-center mb-5">
            <RadioGroup active="bg-white text-primary-500 font-semibold" background="bg-surface-50" rounded="rounded-md" border="border-none" class="text-gray-400 w-[200px]">
                <RadioItem bind:group={value} name="bot" value={0} class="">Bots</RadioItem>
                <RadioItem bind:group={value} name="running" value={1} class="">Running</RadioItem>
            </RadioGroup>
        </div>
        
        {#if value == 0}
            <Bots />
        {:else}
            <Running />
        {/if}
        
        
    </div>
    
</div>
