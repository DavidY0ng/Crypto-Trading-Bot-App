<script lang="ts">
	import BackHeader from '$lib/components/BackHeader.svelte';
	import Icon from '@iconify/svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { t } from '$lib/i18n';
	import Stepper from '$lib/components/Stepper.svelte';
	import Info from '$lib/components/deposit/Info.svelte';
	import Confirmation from '$lib/components/deposit/Confirmation.svelte';
	import Broadcast from '$lib/components/deposit/Broadcast.svelte';
	import Complete from '$lib/components/deposit/Complete.svelte';
	import { storeLocal } from '$lib/stores/storeLocal';

	let steps = ['Info', 'Confirmation', 'Broadcast', 'Complete'];
	let currentActive = 1;
	let progressBar: any;
	let amountValue: number;
	let selectedCoin: string;
	let depositForm: {};

	const handleProgress = (stepIncrement: Number) => {
		progressBar.handleProgress(stepIncrement);
	};
</script>

<BackHeader
	path={$storeLocal.prevUrl == '/'
		? '/'
		: $storeLocal.prevUrl == '/bots/grid'
			? '/bots/grid'
			: '/wallet/fee-wallet'}
	layout="flex items-center bg-white pb-2"
>
	<div class="flex justify-center flex-1 h3">Deposit</div>

	<div class="flex-1"></div>
</BackHeader>

<div class="flex flex-col p-3">
	<div class="flex justify-center mx-5 mt-10">
		<Stepper {steps} bind:currentActive bind:this={progressBar} />
	</div>
	{#if currentActive == 1}
		<Info on:toConfirmation={() => handleProgress(+1)} />
	{:else if currentActive == 2}
		<Confirmation on:goBack={() => handleProgress(-1)} on:toBroadcast={() => handleProgress(+1)} />
	{:else if currentActive == 3}
		<Broadcast on:goBack={() => handleProgress(-1)} on:goSuccess={() => handleProgress(+1)} />
	{:else}
		<Complete />
	{/if}
</div>
