<script>
	import { clearUserData, onConnectWallet, onRequestSignMessage, onLogOut } from '$lib/utils/wallet';
	import { storeUserInfo } from '$lib/stores/storeUser';
	import { storeAccessToken } from '$lib/stores/storeLocal';
	import { zeroAddress } from 'viem';
	import { showToast } from './toasts/toast';
	import Spinner from './Spinner.svelte';
    import { isLoading, noReferralCode, showModal } from '$lib/stores/store';
    import Modal from './Modal.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
    
    let showSpinner = false
	let referralValue = ''
	let errorInput = ''

	$: if ($noReferralCode) {
        showModal.set(true);
    }


	const connectWallet = async () => {
		try {
			// showModal = true;
			let resp = await onConnectWallet();
			if (resp) {
				// showModal = false;
			} else {
				// showModal = false;
			}
		} catch {
			// showModal = false;
		}
	};

	const signMessage = async () => {
		// siginingMsg = true;
		// showModal = true;
		try {
			const success = await onRequestSignMessage();

			// if (!success) showModal = false;
		} catch (error) {
			showToast('Rejected request', 'red');
			// showModal = false;
		}
	};

	async function onSubmitCode() {
		if (referralValue == '') {
			errorInput = "Field cannot be empty";
			
			// Set a timeout to clear the errorInput after 3 seconds
			setTimeout(() => {
				errorInput = '';
				// Assuming you need to update the UI, you might need to call a function or trigger a re-render here
				// This is a placeholder for your actual UI update logic
			}, 3000);
		} else {
			const res = await onConnectWallet(referralValue)
			showModal.set(false)
			// const res = await onRequestSignMessage(referralValue)
		}
	}
	
function handleModalClose() {
	noReferralCode.set(false);
}

onMount(() => {
        const params = new URLSearchParams($page.url.search);
        if (params.has('code')) {
			showModal.set(true)
			referralValue = params.get('code');
        }
    });
	
</script>

<div class="flex justify-end left-0 right-0 top-0 max-w-[425px] mx-auto bg-transparent text-black rounded-none w-full ">
    {#if !$storeAccessToken.access_token}
    <button on:click={connectWallet} class="px-2 py-1 font-semibold bg-white rounded-full">
        Connect wallet
    </button>
    {:else}
    <button on:click={onLogOut} class="px-2 py-1 font-semibold bg-white rounded-full">
        Logout
    </button>
    {/if}
</div>

{#if $isLoading}
<Spinner />
{/if}

<!-- referral code modal -->

{#if $noReferralCode || $showModal}
	<Modal on:close={handleModalClose}>
		<div slot="header">
			<div>
				<img src = "/img/home/referral.png">
			</div>
			<div class="text-base text-center">
				Key in your referral code to connect!
			</div>
		</div>
		<div class="mb-3">
			<input type="text" class="rounded-md" bind:value={referralValue}>
			{#if errorInput}
			<p class="fixed text-xs text-error-500">{errorInput}</p>
			{/if}
		</div>
		<div class="flex justify-end flex-grow pt-2">
			<button on:click={onSubmitCode} class="flex flex-grow py-2 font-semibold text-white rounded-md btn bg-primary-500">
				Connect
			</button>
		</div>
	</Modal>
{/if}