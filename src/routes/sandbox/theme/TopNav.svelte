<script>
	import { clearUserData, onConnectWallet, onRequestSignMessage, onLogOut } from '$lib/utils/wallet';
	import { storeUserInfo } from '$lib/stores/storeUser';
	import { storeAccessToken } from '$lib/stores/storeLocal';
	import { zeroAddress } from 'viem';
	import { showToast } from '../toasts/toast';
	import Spinner from '../spinner/Spinner.svelte';
    import { isLoading } from '$lib/stores/store';
    import Modal from '../modal/Modal.svelte';
    
    let showSpinner = false
    let showModal = true

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
	
</script>

<div class="flex justify-end left-0 right-0 top-0 max-w-[425px] mx-auto card rounded-none bg-surface-800 py-2 px-3">
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

<Modal bind:showModal>
	<div slot="header">
        <div class="">
            Referral Code
        </div>
    </div>
    <div class="mb-3">
        <input type="text" class="rounded-md">
    </div>
    <div class="flex justify-end">
        <button class="py-2 font-semibold text-white rounded-md btn bg-primary-500">
            Confirm
        </button>
    </div>
</Modal>