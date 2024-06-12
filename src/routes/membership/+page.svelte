<script>
	import BackHeader from '$lib/components/BackHeader.svelte';
	import Icon from '@iconify/svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { goto } from '$app/navigation';
	import { apiWithToken } from '$lib/utils/http';
	import { showModal, isLoading, getFeeWalletBalance, feeWalletBalance, getUserInfo } from '$lib/stores/store';
	import { showToast } from '$lib/components/toasts/toast';
	import Spinner from '$lib/components/Spinner.svelte';
	import { onMount } from 'svelte';
	import { storeAccessToken, storeLocal } from '$lib/stores/storeLocal';
	import NoConnectWallet from '$lib/components/NoConnectWallet.svelte';

	const benefits = ['Higher ROI', 'Free Bots 24/7', 'Gurantee Profit', 'Premium Support'];

	async function purchaseMembership() {
		const res = await apiWithToken('POST', '/membership/purchase', {});
		if (res.success) {
			isLoading.set(true);

			setTimeout(() => {
				goto('/membership/success');
				getUserInfo();
				isLoading.set(false);
			}, 1000);
		} else if (res.data[0] == 'amount:insufficient_balance') {
			showModal.set(true)
		} else {
			showToast(res.data[0], 'red');
		}
	}

</script>
{#if !$storeAccessToken.access_token}
<NoConnectWallet />
{:else}
<BackHeader  path={$storeLocal.prevUrl == "/" ? '/' : '/profile'} layout="flex items-center pb-2 bg-white">
	<div class="flex justify-center flex-1 h3"></div>

	<div class="flex-1"></div>
</BackHeader>

<div class="flex flex-col py-3 bg-white px-7">
	<div class="mb-7">
		<div class="mb-3 font-bold h2">Start Membership</div>
		<div class="text-sm text-gray-400">
			To enjoy premium benefit of trading bots, please make the payment.
		</div>
	</div>

	<!-- payment card -->
	<div class="flex flex-col px-3 py-10 mb-5 border rounded-xl">
		<div class="flex h-full mb-10">
			<span class="text-gray-500 text-[20px]">$</span>
			<div class="font-bold text-[45px]">100</div>
		</div>
		<div class="grid grid-cols-2 gap-4">
			{#each benefits as benefit}
				<div class="flex items-center gap-2">
					<div class="text-green-500 h-">
						<Icon icon="teenyicons:tick-circle-solid" width="1.2em" height="1.2em" />
					</div>
					<div class="text-[14px]">
						{benefit}
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="flex flex-col gap-4">
		<div class="flex items-center gap-3 p-3 bg-blue-500/30 rounded-xl">
			<img src="/img/membership/Compliant.png" alt="icon1" class="w-10 h-10" />
			<div>
				<div class="font-semibold text-blue-500">Worry-Free Trading</div>
				<p class="">Trade all you want without worries.</p>
			</div>
		</div>
		<div class="flex items-center gap-3 p-3 bg-green-500/30 rounded-xl">
			<div class="text-green-500">
				<Icon icon="mdi:shield-tick" width="2em" height="2em" />
			</div>

			<div>
				<div class="font-semibold text-green-600">Guaranteed Experts</div>
				<p>Bot created by experts engineer.</p>
			</div>
		</div>
	</div>

	<div class="mt-5">
		<button
			on:click={purchaseMembership}
			class="w-full text-white rounded-md shadow-lg btn bg-primary-500"
		>
			Proceed to Payment
		</button>
	</div>
</div>

{#if $isLoading}
	<Spinner />
{/if}


<Modal>
	<div slot="header">Insufficient Balance</div>
	<div class="mb-5 text-gray-400">Please top up your balance before proceeding.</div>
	<div class="flex gap-2">
		<button
			on:click={() => (showModal.set(false))}
			class="w-full bg-gray-400 rounded-lg shadow-md btn"
		>
			Cancel
		</button>
		<a on:click={() => (showModal.set(false))}
			class="w-full text-white rounded-lg shadow-md btn bg-primary-500" href="/wallet/fee-wallet/deposit">
			Deposit
		</a>
	</div>
</Modal>

{/if}