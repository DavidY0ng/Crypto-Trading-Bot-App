<script>
	import BackHeader from '$lib/components/BackHeader.svelte';
	import { getUserInfo } from '$lib/stores/store';
	import Icon from '@iconify/svelte';
    import Modal from '$lib/components/Modal.svelte'
    
    let showModal
	const menus = [
		{
			name: 'Nickname',
			value: 'Richie'
		},
		{
			name: 'Email',
			value: 'Richie@rich.mail'
		},
		{
			name: 'Phone number',
			value: '012-345678'
		},
		{
			name: 'Twitter',
			value: 'Richie'
		},
		{
			name: 'Telegram',
			value: 'Richie'
		},
		{
			name: 'Facebook',
			value: 'Richie'
		}
	];
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
			<div class="flex justify-end flex-grow gap-2">
				<div class="font-bold">
					{menu.value}
				</div>
				<div class="text-gray-400">
					<Icon icon="material-symbols:keyboard-arrow-right" width="1.5em" height="1.5em" />
				</div>
			</div>
		</div>
	{/each}
</div>

