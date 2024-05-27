<script lang='ts'>
	import BackHeader from '$lib/components/BackHeader.svelte';
	import { getUserInfo, userInfo, isLoading, showModal } from '$lib/stores/store';
	import Icon from '@iconify/svelte';
    import Modal from '$lib/components/Modal.svelte';
	import { apiWithToken } from '$lib/utils/http';
	import { goto } from '$app/navigation';
	import { showToast } from '$lib/components/toasts/toast';
	import { onMount } from 'svelte';

	let inputValue = '';
	let errorInput = '';
	let currentMenuItem:string | number | null = null; // Add a variable to hold the current menu item data

	$: menus = [
		{
			name: 'Nickname',
			value: $userInfo.nickname,
			param: 'nickname'
		},
		{
			name: 'Email',
			value: $userInfo.email,
			param: 'email'
		},
		{
			name: 'Phone number',
			value: $userInfo.phone_no,
			param: 'phone_no'
		},
		// {
		// 	name: 'Twitter',
		// 	value: 'Richie'
		// },
		// {
		// 	name: 'Telegram',
		// 	value: 'Richie'
		// },
		// {
		// 	name: 'Facebook',
		// 	value: 'Richie'
		// }
	];

	async function submitInfo() {
		if(inputValue == '') {
			errorInput = "Field cannot be empty";
			setTimeout(() => {
				errorInput = '';
			}, 3000);
			return
		}
		if (currentMenuItem) {
			const res = await apiWithToken('PUT', '/user/account/info', {
				[currentMenuItem.param]: inputValue, // Dynamically use the param from the current menu item
			});
			if (res.success) {
				getUserInfo();
				showToast('Profile updated', 'green');
				showModal.set(false); // Close the modal on success
			} else {
				showToast(res.data[0], 'red');
			}
		}
	}

	function openModal(menuItem) {
		currentMenuItem = menuItem; // Set the current menu item data
		inputValue = menuItem.value; // Pre-fill the input with the current value
		showModal.set(true);
	}

	onMount(() => {
		getUserInfo();
	});
</script>

<BackHeader path="/profile" layout="flex items-center bg-white pb-2">
	<div class="flex justify-start flex-grow flex-2 h3">Personal Information</div>
</BackHeader>
<div class="flex flex-col flex-grow gap-5 p-3 bg-white">
	{#each menus as menu, i}
		<div class="flex">
			<div class="flex">
				{menu.name}
			</div>
			<button on:click={() => openModal(menu)} class="flex justify-end flex-grow gap-2">
				<div class="font-bold">
					{menu.value}
				</div>
				<div class="text-gray-400">
					<Icon icon="material-symbols:keyboard-arrow-right" width="1.5em" height="1.5em" />
				</div>
			</button>
		</div>
	{/each}
</div>

{#if $showModal}
	<Modal cross="hidden">
		<div slot="header">
			<div class="">
				{currentMenuItem ? currentMenuItem.name : ''}
			</div>
		</div>
		<div class="mb-3">
			<input type="text" class="py-2 rounded-md" bind:value={inputValue}>
			{#if errorInput}
			<p class="fixed text-xs text-error-500">{errorInput}</p>
			{/if}
		</div>
		<div class="flex justify-end w-full gap-2">
			<button on:click={()=>showModal.set(false)} class="w-1/2 py-2 font-semibold text-white bg-gray-500 rounded-md btn">
				Cancel
			</button>
			<button on:click={submitInfo} class="w-1/2 py-2 font-semibold text-white rounded-md btn bg-primary-500">
				Confirm
			</button>
		</div>
	</Modal>
{/if}
