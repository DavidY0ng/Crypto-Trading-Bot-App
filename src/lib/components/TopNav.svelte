<script>
	import { clearUserData, onConnectWallet, onRequestSignMessage, onLogOut } from '$lib/utils/wallet';
	import { storeUserInfo } from '$lib/stores/storeUser';
	import { storeAccessToken } from '$lib/stores/storeLocal';
	import { zeroAddress } from 'viem';
	import { showToast } from './toasts/toast';
	import Spinner from './Spinner.svelte';
    import { isLoading } from '$lib/stores/store';
    import Modal from './Modal.svelte';
    
    let showSpinner = false
    let showModal = false
	let referralValue = ''
	let errorInput = ''

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

	function onSubmitCode() {
    if (referralValue == '') {
        errorInput = "Field cannot be empty";
        
        // Set a timeout to clear the errorInput after 3 seconds
        setTimeout(() => {
            errorInput = '';
            // Assuming you need to update the UI, you might need to call a function or trigger a re-render here
            // This is a placeholder for your actual UI update logic
        }, 3000);
    }
}
	
</script>

<div class="flex justify-end left-0 right-0 top-0 max-w-[425px] mx-auto card rounded-none py-2 px-3 w-full">
    {#if !$storeAccessToken.access_token}
    <button on:click={connectWallet} class="px-2 py-1 text-white rounded-full bg-primary-500">
        Connect wallet
    </button>
    {:else}
    <button on:click={onLogOut} class="px-2 py-1 text-white rounded-full bg-primary-500">
        Logout
    </button>
    {/if}
</div>

{#if $isLoading}
<Spinner />
{/if}

<!-- referral code modal -->
<Modal bind:showModal>
	<div slot="header">
        <div class="">
            Referral Code
        </div>
    </div>
    <div class="mb-3">
        <input type="text" class="rounded-md" value={referralValue}>
		{#if errorInput}
		<p class="fixed text-xs text-error-500">{errorInput}</p>
		{/if}
    </div>
    <div class="flex justify-end">
        <button on:click={onSubmitCode} class="py-2 font-semibold text-white rounded-md btn bg-primary-500">
            Confirm
        </button>
    </div>
</Modal>