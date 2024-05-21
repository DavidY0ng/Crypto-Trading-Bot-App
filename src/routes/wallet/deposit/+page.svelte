<script lang='ts'>
    import BackHeader from "$lib/components/BackHeader.svelte"
    import Icon from "@iconify/svelte";
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
    import { t } from '$lib/i18n';
    import Stepper from "$lib/components/Stepper.svelte";
    import Info from "$lib/components/deposit/Info.svelte";
    import Confirmation from "$lib/components/deposit/Confirmation.svelte";
	import Broadcast from "$lib/components/deposit/Broadcast.svelte";
	import Complete from "$lib/components/deposit/Complete.svelte";

    let steps = ['info','confirmation','broadcast','complete']
    let currentActive = 1
    let progressBar:any

    const handleProgress = (stepIncrement:Number) => {
		progressBar.handleProgress(stepIncrement)
	}
</script>

<BackHeader path='/wallet' layout='flex items-center bg-white pb-2'>
    <div class="flex justify-center flex-1 h3">
        Deposit
    </div>
    
    <div class="flex-1">
        
    </div>
</BackHeader>

<div class="flex flex-col p-3">
    <div class="flex justify-center mx-5 mt-10">
        <Stepper {steps} bind:currentActive bind:this={progressBar}/>
    </div>
    <Info />
    <Confirmation />
    <Broadcast />
    <Complete />
    
    
</div>
