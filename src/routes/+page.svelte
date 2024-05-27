<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import Icon from '@iconify/svelte';
	import Spinner from '$lib/components/Spinner.svelte';
	import TopNav from '$lib/components/TopNav.svelte';
	import { storeUserInfo } from '$lib/stores/storeUser';
	import { onMount } from 'svelte';
	import { getUserInfo } from '$lib/stores/store';

	const menuPath = [
		{
			links: '#',
			icon: 'icon-park-outline:api',
			name: 'API sync'
		},
		{
			links: '/referral',
			icon: 'ic:round-group-add',
			name: 'Referral'
		},
		{
			links: '/wallet/deposit',
			icon: 'ph:hand-deposit-duotone',
			name: 'Deposit'
		},
		{
			links: '#',
			icon: 'icon-park-outline:sales-report',
			name: 'Revenue'
		}
	];

	const strategies = [
		{
			icon: 'mdi:grid',
			name: 'Grid',
			description: 'Grid trading strategy is bla bla bla'
		},
		{
			icon: 'ph:horse',
			name: 'Martingale',
			description: 'Place double to your bet when you lose.'
		}
		// {
		//     icon: "material-symbols:balance",
		//     name: "Rebalance",
		//     description: ""
		// },
		// {
		//     icon: "",
		//     name: "DCA",
		//     description: ""
		// }
	];

	onMount(() => {
		getUserInfo();
	});
</script>

<div class="flex flex-col flex-grow">
	<!-- dashboard -->
	<div class="flex flex-col gap-3 p-3 pb-0 text-white bg-surface-500">
		<TopNav />
		<div class="p-3 rounded-xl">
			<div class="flex justify-between mb-3">
				<div class="flex flex-col">
					<div class="text-sm text-gray-400">Total Profit</div>
					<div class="text-lg font-bold">0.00</div>
				</div>

				<div class="flex flex-col text-end">
					<div class="text-sm text-gray-400">API Sync</div>
					<div class="text-lg font-semibold">Binance</div>
				</div>
			</div>

			<div class="flex justify-between">
				<div class="flex flex-col">
					<div class="text-sm text-gray-400">Today's Profit</div>
					<div class="text-lg font-semibold">0.00</div>
				</div>

				<div class="flex flex-col text-end">
					<div class="text-sm text-gray-400">Active Bots</div>
					<div class="text-lg font-semibold">0</div>
				</div>
			</div>

			<!-- <div class="flex justify-end pt-3">
				<a
					class="flex px-3 py-1 font-semibold text-black shadow-md bg-gradient-to-br from-primary-500 to-white border-surface-500 btn"
					href="/wallet/deposit"
				>
					Deposit
				</a>
			</div> -->
		</div>

		<!-- Join membership section -->
		{#if $storeUserInfo.membership == 0}
			<a
				class="relative flex items-center justify-between gap-4 px-3 py-4 text-sm rounded-t-xl bg-gradient-to-r from-secondary-300 to-secondary-500"
				href="/membership"
			>
				<!-- <div class="flex absolute top-[-8px] left-0 text-primary-500">
        <Icon icon="streamline:star-2-solid" width="1.2em" height="1.2em" />
    </div> -->

				<div class="flex font-semibold text-secondary-900">Enjoy rewards with membership</div>
				<div class="flex px-2 text-sm rounded-full text-secondary-500 bg-surface-600">
					Subscribe+
				</div>
			</a>
		{/if}
	</div>

	<div class="flex flex-col flex-grow gap-3 p-3 overflow-hidden rounded-t-lg">
		<!-- menu section -->
		<div class="flex justify-between py-3 card">
			{#each menuPath as menu}
				<a class="flex flex-col items-center rounded-lg p-2 w-[80px]" href={menu.links}>
					<div class="mb-1">
						<Icon icon={menu.icon} width="1.2em" height="1.2em" />
					</div>
					<div class="flex text-sm">
						{menu.name}
					</div>
				</a>
			{/each}
		</div>

		<!-- strategy -->
		
		<div class="flex flex-col gap-3 p-3 card">
            <div class="pl-3 font-semibold">
            Strategy
            </div>
			{#each strategies as strategy}
				<div class="flex items-center gap-4 py-5 rounded-lg ">
					<div class="flex items-center justify-center h-12 rounded-full w-14 bg-primary-200">
						<Icon icon={strategy.icon} width="1.4em" height="1.4em" />
					</div>
					<div class="flex flex-col w-full">
						<div class="flex justify-between mb-1">
							<div class="flex font-bold">
								{strategy.name}
							</div>
							<div class="flex text-gray-400">
								<Icon icon="material-symbols:keyboard-arrow-right" width="1.2em" height="1.2em" />
							</div>
						</div>
						<div class="flex text-sm text-gray-400">
							{strategy.description}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
