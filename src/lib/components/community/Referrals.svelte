<script>

	import { getRank, rankData } from "$lib/stores/store";
	import Icon from "@iconify/svelte";
	import { onMount } from "svelte";

	onMount(() => {
		getRank()
	})

	$: numberOfGreenBars = [
		$rankData.direct_refer_flag,
		$rankData.team_member_flag,
		$rankData.direct_user_flag
	].filter(Boolean).length;

</script>

<div class="p-3">
	<div class="flex flex-col gap-4">

		<div>
			<div class="mb-1 text-lg font-semibold">Current Rank</div>
			<div class="flex flex-col p-3 bg-gray-100 rounded-md">
				<div class="flex items-center gap-5">
					<div class="w-8 h-8">
						{#if $rankData}
						<img class="w-8 h-8" src="/img/profile/ranking/V{$rankData.current_rank}.png" alt="rankImg" loading="lazy"/>
						{:else}
							<div class="w-8 bg-gray-300 placeholder-circle" />
						{/if}
					</div>
					<div class="text-lg font-bold">VIP {$rankData.current_rank}</div>
				</div>
				<hr class="!my-4 border-gray-300 divider" />
				<div>
					<div class="flex mb-3 font-semibold">Current Progress</div>
					<div class="flex flex-col gap-1 text-sm">
						<div class="flex justify-between">
							<div class="text-gray-400">Direct Referral</div>
							<div>{$rankData.current_direct_refer} Users</div>
						</div>
						<div class="flex justify-between">
							<div class="text-gray-400">Team Members</div>
							<div>{$rankData.current_team_member} Users</div>
						</div>
                        <div class="flex justify-between">
							<div class="text-gray-400">Highest Ranking Team Member</div>
							<div>V{$rankData.current_highest_rank}</div>
						</div>
					</div>
				</div>
			</div>
		</div>

        <div class="flex justify-center my-8 text-gray-500 {$rankData.current_rank == '5'? "hidden" : ''}">
            <Icon icon="fa6-solid:arrow-down" width="1.2em" height="1.2em" />
        </div>

		<!-- next rank -->
		<!-- activate bot -->
		{#if $rankData.current_rank == '0'}
		<div>
			<div class="mb-1 text-lg font-semibold">Next Rank</div>
			<div class="flex flex-col p-3 bg-gray-100 rounded-md">
				<div class="flex items-center gap-5 mb-3">
					<div class="flex-shrink-0 w-8 h-8">
						<img class="w-8 h-8" src="/img/profile/ranking/V1.png" alt="rankImg" />
					</div>
					<div class="font-bold">VIP 1</div>
				</div>
				<div class="flex gap-2">
					<div class="text-sm text-gray-400">Completed:</div>
					<div class="flex items-center flex-grow gap-1">
						<div class="w-1/2 h-2 bg-gray-200" />
					</div>
				</div>
				<hr class="!my-5 border-gray-300 divider" />
				<div>
					<div class="flex mb-3 font-semibold">Requirements</div>
					<div class="flex flex-col gap-2 text-sm">
						<div class="flex justify-between text-gray-400">
							<div class="text-gray-400/70">Activate 1 Bot</div>
                    		<div class="text-gray-500/40"><Icon icon="subway:tick" width="1.2em" height="1.2em" /></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{:else}
		<div class = "{$rankData.current_rank == '5'? "hidden" : ''}">
			<div class="mb-1 text-lg font-semibold">Next Rank</div>
			<div class="flex flex-col p-3 bg-gray-100 rounded-md">
				<div class="flex items-center gap-5 mb-3">
					<div class="flex-shrink-0 w-8 h-8">
						<img class="w-8 h-8" src="/img/profile/ranking/V{$rankData.next_rank}.png" alt="rankImg" />
					</div>
					<div class="text-lg font-bold">VIP {$rankData.next_rank}</div>
				</div>
				<div class="flex gap-2">
					<div class="text-sm text-gray-400">Completed:</div>
					<div class="flex items-center flex-grow gap-2">
						{#each Array(3).fill(0) as _, i}
							<div class={i < numberOfGreenBars ? 'w-1/2 h-2 bg-green-500' : 'w-1/2 h-2 bg-gray-200'} />
						{/each}
					</div>
				</div>
				<hr class="!my-5 border-gray-300 divider" />
				<div>
					<div class="flex mb-3 font-semibold">Requirements</div>
					<div class="flex flex-col gap-1 text-sm">
						<div class="flex justify-between">
							<div class="{$rankData.direct_refer_flag ? '' : 'text-gray-400/70'}">{$rankData.next_direct_refer} Direct Referrals</div>
							<div class="{$rankData.direct_refer_flag ? 'text-green-500' : 'text-gray-500/40'}"><Icon icon="subway:tick" width="1.2em" height="1.2em" /></div>
						</div>
						<div class="flex justify-between">
							<div class="{$rankData.team_member_flag ? '' : 'text-gray-400/70'}">{$rankData.next_team_member} Team Members</div>
							<div class="{$rankData.team_member_flag ? 'text-green-500' : 'text-gray-500/40'}"><Icon icon="subway:tick" width="1.2em" height="1.2em" /></div>
						</div>
						<div class="flex justify-between">
							<div class="{$rankData.direct_user_flag ? '' : 'text-gray-400/70'}">VIP {$rankData.next_direct_user_rank} Team Members x {$rankData.next_direct_user_number}</div>
							<div class="{$rankData.direct_user_flag ? 'text-green-500' : 'text-gray-500/40'}"><Icon icon="subway:tick" width="1.2em" height="1.2em" /></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/if}
	</div>
</div>

<!-- activate bot -->
<!-- <div>
    <div class="mb-1 text-lg font-semibold">Next Rank</div>
    <div class="flex flex-col p-3 bg-gray-100 rounded-md">
        <div class="flex items-center gap-5 mb-3">
            <div class="flex-shrink-0 w-8 h-8">
                <img class="w-8 h-8" src="/img/profile/ranking/V1.png" alt="rankImg" />
            </div>
            <div class="font-bold">VIP 1</div>
        </div>
        <div class="flex gap-2">
            <div class="text-sm text-gray-400">Completed:</div>
            <div class="flex items-center flex-grow gap-1">
                <div class="w-1/2 h-2 bg-gray-200" />
            </div>
        </div>
        <hr class="!my-5 border-gray-300 divider" />
        <div>
            <div class="flex mb-3 font-semibold">Requirements</div>
            <div class="flex flex-col gap-2 text-sm">
                <div class="flex justify-between text-gray-400">
                    <div class="text-gray-400/70">Activate 1 Bot</div>
                    <div class="text-gray-500/40"><Icon icon="subway:tick" width="1.2em" height="1.2em" /></div>
                </div>
            </div>
        </div>
    </div>
</div> -->
