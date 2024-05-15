<script>
	import { clearUserData, onConnectWallet, onRequestSignMessage, onLogOut } from '$lib/utils/wallet';
	import { storeUserInfo } from '$lib/stores/storeUser';
	import { storeAccessToken } from '$lib/stores/storeLocal';
	import { zeroAddress } from 'viem';
	import { showToast } from '../toasts/toast';
	import Spinner from '../spinner/Spinner.svelte';
    import { isLoading } from '$lib/stores/store';
    
    let showSpinner = false

	const connectWallet = async () => {
		try {
			// showModal = true;
            // showSpinner = true
			let resp = await onConnectWallet();
			if (resp) {
				// showModal = false;
                // showSpinner = false
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

<div class="flex justify-end left-0 right-0 top-0 max-w-[425px] mx-auto card rounded-none py-2 px-3">
    {#if !$storeAccessToken.access_token}
    <button on:click={connectWallet} class="bg-primary-500 text-white rounded-full px-2 py-1">
        Connect wallet
    </button>
    {:else}
    <button on:click={onLogOut} class="bg-primary-500 text-white rounded-full px-2 py-1">
        Logout
    </button>
    {/if}
</div>

{#if $isLoading}
<Spinner />
{/if}
