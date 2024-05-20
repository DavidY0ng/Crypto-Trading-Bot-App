<script lang="ts">
	import '../app.css';
	import Toast from '$lib/components/toasts/toast.svelte';
	import { initializeStores, Modal, Drawer, type ModalComponent } from '@skeletonlabs/skeleton';
	import BottomNav from '$lib/components/BottomNav.svelte';
	import TopNav from '$lib/components/TopNav.svelte';
	import { onMount } from 'svelte';
	import { getUserInfo } from '$lib/stores/store';
	initializeStores();

	onMount(() => {
		getUserInfo();
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
