<script lang="ts">
	import BackHeader from '$lib/components/BackHeader.svelte';
	import { getUserInfo, userInfo, isLoading, showModal, showGoogleModal, showAuthenticatorModal } from '$lib/stores/store';
	import Icon from '@iconify/svelte';
	import Modal from '$lib/components/Modal.svelte';
	import GoogleModal from '$lib/components/GoogleModal.svelte';
	import AuthenticatorModal from "$lib/components/AuthenticatorModal.svelte";
	import { apiWithToken } from '$lib/utils/http';
	import { goto } from '$app/navigation';
	import { showToast } from '$lib/components/toasts/toast';
	import { onMount } from 'svelte';
	import { storeUserInfo } from '$lib/stores/storeUser';

	let inputValue = '';
	let google2FACode = ['', '', '', '', '', ''];
	let editToken = '';
	let errorInput = '';
	let inputs = []; 
	let currentMenuItem: string | number | null = null; // Add a variable to hold the current menu item data

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
		}
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
		if (inputValue == '') {
			errorInput = 'Field cannot be empty';
			setTimeout(() => {
				errorInput = '';
			}, 3000);
			return;
		}
		if (currentMenuItem) {
			const res = await apiWithToken('PUT', '/user/account/info', {
				[currentMenuItem.param]: inputValue // Dynamically use the param from the current menu item
			});

			if (res.success) {
				editToken = res.data.token;
				showGoogleModal.set(true);
			} else {
				showToast(res.data[0], 'red');
			}
		}
	}

	async function submitGoogle2FACode(token: string, code:string[]) {
		const FAcode = code.join('')
		const res = await apiWithToken('POST', '/auth/twofa', {
			token: token,
			code: FAcode
		});

		if (res.success) {
			showToast('Profile updated', 'green');
			showGoogleModal.set(false);
			showModal.set(false);
			getUserInfo();
		} else {
			showToast(res.data[0], 'red');
		}
		if (!res) {
			return;
		} else {
		}
	}

	function openModal(menuItem) {
		if($storeUserInfo.authenticator == 1) {
			currentMenuItem = menuItem; // Set the current menu item data
			inputValue = menuItem.value; // Pre-fill the input with the current value
			showModal.set(true);
		} else {
			showAuthenticatorModal.set(true)
		}

	}

	// handle input change for 6 digit code
	function handleInputChange(index: number, event: Event) {
		const target = event.target as HTMLInputElement;
		google2FACode[index] = target.value;
		google2FACode = [...google2FACode]; // Update the array to trigger reactivity

		// Automatically focus the next input if the current one is filled
        if (target.value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
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

{#if $showAuthenticatorModal}
	<AuthenticatorModal cross="hidden">
		<div slot="header">
			<div class="">
				Unauthenticated
			</div>
		</div>
		<div class="mb-5 text-sm text-gray-500">
			Please link your Google Authenticator app
		</div>
		<div class="flex justify-end w-full gap-2">
			<button
				on:click={() => showAuthenticatorModal.set(false)}
				class="w-1/2 py-2 font-semibold text-white bg-gray-500 rounded-md btn"
			>
				Cancel
			</button>
			<a
			on:click={() => showAuthenticatorModal.set(false)}	
				href='/profile/google-auth'
				class="w-1/2 py-2 font-semibold text-white rounded-md btn bg-primary-500"
			>
				Proceed
			</a>
		</div>
	</AuthenticatorModal>
{/if}

{#if $showModal}
	<Modal cross="hidden">
		<div slot="header">
			<div class="">
				{currentMenuItem ? currentMenuItem.name : ''}
			</div>
		</div>
		<div class="mb-3">
			<input type="text" class="py-2 rounded-md" bind:value={inputValue} />
			{#if errorInput}
				<p class="fixed text-xs text-error-500">{errorInput}</p>
			{/if}
		</div>
		<div class="flex justify-end w-full gap-2">
			<button
				on:click={() => showModal.set(false)}
				class="w-1/2 py-2 font-semibold text-white bg-gray-500 rounded-md btn"
			>
				Cancel
			</button>
			<button
				on:click={submitInfo}
				class="w-1/2 py-2 font-semibold text-white rounded-md btn bg-primary-500"
			>
				Confirm
			</button>
		</div>
	</Modal>
{/if}

{#if $showGoogleModal}
	<GoogleModal cross="hidden">
		<div slot="header">
			<div class="">Google Authenticator</div>
		</div>
		<div class="mb-3">
			<div class="mb-2 text-sm text-gray-500">
				Enter the 6 digit code from your authenticator app.
			</div>
			<div class="flex justify-center gap-2">
				{#each google2FACode as digit, index}
				<input
					type="text"
					class="w-10 py-2 text-center border rounded-md"
					maxlength="1"
					bind:this={inputs[index]}
					on:input={(e) => handleInputChange(index, e)}
				/>
				{/each}
			</div>
			
			{#if errorInput}
				<p class="fixed text-xs text-error-500">{errorInput}</p>
			{/if}
		</div>
		<div class="flex justify-end w-full gap-2">
			<button
				on:click={() => showGoogleModal.set(false)}
				class="w-1/2 py-2 font-semibold text-white bg-gray-500 rounded-md btn"
			>
				Cancel
			</button>
			<button
				on:click={() => submitGoogle2FACode(editToken, google2FACode)}
				class="w-1/2 py-2 font-semibold text-white rounded-md btn bg-primary-500"
			>
				Confirm
			</button>
		</div>
	</GoogleModal>
{/if}
