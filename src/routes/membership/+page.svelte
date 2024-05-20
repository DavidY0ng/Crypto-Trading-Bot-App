<script>
	import BackHeader from '$lib/components/BackHeader.svelte';
	import Icon from '@iconify/svelte';
    import Modal from "$lib/components/Modal.svelte"
	import { goto } from '$app/navigation';

    let showModal = false
	const benefits = ['Higher ROI', 'Free Bots 24/7', 'Gurantee Profit', 'Premium Support'];
</script>

<BackHeader path="/" layout="flex items-center bg-white pb-2">
	<div class="flex justify-center flex-1 h3"></div>

	<div class="flex-1"></div>
</BackHeader>

<div class="h-full px-3 py-3 bg-white">
	<div class="mb-7">
		<div class="mb-3 font-semibold h2">Start Membership</div>
		<div class="text-sm text-gray-400">
			To enjoy premium benefit of trading bots, please make the payment.
		</div>
	</div>

	<!-- payment card -->
	<div class="px-5 py-10 mb-5 border rounded-xl">
		<div class="flex h-full mb-10">
			<span class="text-gray-500 text-[20px]">$</span>
			<div class="font-bold text-[45px]">100</div>
		</div>
		<div class="grid grid-cols-2 gap-4">
			{#each benefits as benefit}
				<div class="flex items-center gap-2">
					<div class="text-green-500">
						<Icon icon="teenyicons:tick-circle-solid" width="1.2em" height="1.2em" />
					</div>
					<div class="text-[15px]">
						{benefit}
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="flex flex-col gap-4">
		<div class="flex items-center gap-3 p-3 bg-primary-500/30 rounded-xl">
			<img src="/img/membership/Compliant.png" alt="icon1" class="w-10 h-10" />
			<div>
				<div class="font-semibold text-primary-500">Worry-Free Trading</div>
				<p class="">Trade all you want without worries.</p>
			</div>
		</div>
        <div class="flex items-center gap-3 p-3 bg-green-500/30 rounded-xl">
            <div class="text-green-500">
                <Icon icon="mdi:shield-tick" width="2em" height="2em" />
            </div>
			
			<div>
				<div class="font-semibold text-green-500">Guaranteed Experts</div>
				<p>Bot created by experts engineer.</p>
			</div>
		</div>
	</div>

	<div class="mt-5">
		<button on:click={()=>(showModal = true)} class="w-full text-white shadow-lg btn bg-primary-500 rounded-xl"> Proceed to Payment </button>
	</div>
</div>


<Modal bind:showModal>
    
    <div slot="header">
        Insufficient Balance
    </div>
    <div class="mb-5 text-gray-400">
        Please top up your balance before proceeding.
    </div>
    <div class="flex gap-2">
        <button on:click={() => (showModal = false)} class="w-full bg-gray-400 rounded-lg shadow-md btn">
            Cancel
        </button>
        <button class="w-full text-white rounded-lg shadow-md btn bg-primary-500">
            Deposit
        </button>
    </div>
   
</Modal>
