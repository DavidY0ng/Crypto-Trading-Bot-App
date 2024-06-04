<script lang='ts'>
	import Icon from '@iconify/svelte';
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    let value: number = 0;

   
</script>

<div class="flex flex-col flex-grow p-3 bg-white">
    <div class="flex flex-col flex-grow p-3">
        <div class="flex justify-center mb-5">
            <RadioGroup active="bg-white text-primary-500 font-semibold" background="bg-surface-50" rounded="rounded-md" border="border-none" class="text-gray-400 w-[200px]">
                <RadioItem bind:group={value} name="bot" value={0} class="flex flex-1 flex-grow w-[91px] justify-center">Bots</RadioItem>
                <RadioItem bind:group={value} name="running" value={1} class="flex flex-1">Running</RadioItem>
            </RadioGroup>
        </div>
        
        {#if value == 0}
           
        {:else}
          
        {/if}
        
        
    </div>
    
</div>
