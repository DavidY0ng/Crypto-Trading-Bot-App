<script lang="ts">
	import '../app.css';
    import { goto } from '$app/navigation';
    import { t } from '$lib/i18n';
	import Toast from '$lib/components/toasts/toast.svelte';
	import { initializeStores, Modal, Drawer, type ModalComponent } from '@skeletonlabs/skeleton';
	import BottomNav from '$lib/components/BottomNav.svelte';
	import TopNav from '$lib/components/TopNav.svelte';
	import { onMount } from 'svelte';
	import { getUserInfo } from '$lib/stores/store';
    import { zeroAddress } from 'viem';
	import { storeUserInfo } from '$lib/stores/storeUser';
    import { showToast } from '$lib/components/toasts/toast';
    import { clearUserData, connectedAddress, walletClient } from '$lib/utils/wallet';
	import { page } from '$app/stores';
	import { previousUrl } from '$lib/stores/store';
	import { storeLocal } from '$lib/stores/storeLocal';
	
	initializeStores();
	
	let currentUrl = $page.url.pathname;

	// $: {
	// 	previousUrl.set(currentUrl);
	// 	currentUrl = $page.url.pathname;
	// 	storeLocal.set({
	// 		...$storeLocal,
	// 		prevUrl: $previousUrl
	// 	});
	// }

	$: {
		storeLocal.set({
				...$storeLocal,
				prevUrl: currentUrl
			});
		currentUrl = $page.url.pathname;
	}

	// $: {
	// 	$page; // Re-run the store update whenever $page changes
	// 	previousUrl.set(currentUrl);
	// 	console.log($previousUrl, 1)
	// }

	

    const onChangeAccount = async () => {
		if ($storeUserInfo.address != zeroAddress) {
			let isChange = false;

			let accountChanged = window.ethereum.on('accountsChanged', async () => {
				console.log('acc changed');
				// show toast here
				showToast($t('common.toast.account_changed'), 'orange');
				clearUserData();
				goto('/');
				return (isChange = true);
			});
			let chainChanged = window.ethereum.on('chainChanged', async () => {
				// show toast here
				showToast($t('common.toast.network_changed'), 'orange');
				clearUserData();
				goto('/');
				return (isChange = true);
			});

			if (!isChange) {
				// TP checking
				let accounts = await walletClient.requestAddresses();
				if (connectedAddress !== accounts[0]) {
					showToast($t('common.toast.account_changed'), 'orange');
					console.log('acc change here')
					clearUserData();
					goto('/');
				}
			}
		}
	};

	onMount(() => {
		getUserInfo();
        onChangeAccount()
	});
</script>

<Toast />
<Drawer />
<!-- <TopNav /> -->

<div class="flex flex-col max-w-[425px] mx-auto h-full ">
	<div class="flex flex-col flex-grow overflow-auto">
		<slot />
	</div>
	<BottomNav />
</div>
