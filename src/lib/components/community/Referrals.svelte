<script>

	import Icon from "@iconify/svelte";

</script>

<div class="p-3">
	<div class="flex flex-col gap-4">
		<div>
			<div class="mb-1 text-lg font-semibold">Current Rank</div>
			<div class="flex flex-col p-3 bg-gray-100 rounded-md">
				<div class="flex items-center gap-5">
					<div class="w-8 h-8">
						<img class="w-8 h-8" src="/img/profile/ranking/V0.png" alt="rankImg" />
					</div>
					<div class="text-lg font-bold">VIP 0</div>
				</div>
				<hr class="!my-4 border-gray-300 divider" />
				<div>
					<div class="flex mb-3 font-semibold">Current Progress</div>
					<div class="flex flex-col gap-1 text-sm">
						<div class="flex justify-between">
							<div class="text-gray-400">Direct Referral</div>
							<div>3 Users</div>
						</div>
						<div class="flex justify-between">
							<div class="text-gray-400">Team Members</div>
							<div>20 Users</div>
						</div>
                        <div class="flex justify-between">
							<div class="text-gray-400">Highest Ranking Team Member</div>
							<div>V1</div>
						</div>
					</div>
				</div>
			</div>
		</div>

        <div class="flex justify-center my-8 text-gray-500">
            <Icon icon="fa6-solid:arrow-down" width="1.2em" height="1.2em" />
        </div>

        
		<!-- next rank -->
		<div>
			<div class="mb-1 text-lg font-semibold">Next Rank</div>
			<div class="flex flex-col p-3 bg-gray-100 rounded-md">
				<div class="flex items-center gap-5 mb-3">
					<div class="flex-shrink-0 w-8 h-8">
						<img class="" src="/img/profile/ranking/V1.png" alt="rankImg" />
					</div>
					<div class="text-lg font-bold">VIP 1</div>
				</div>
				<div class="flex gap-2">
					<div class="text-sm text-gray-400">Completed:</div>
					<div class="flex items-center flex-grow gap-2">
						<div class="w-1/2 h-2 bg-green-500" />
						<div class="w-1/2 h-2 bg-gray-200" />
						<div class="w-1/2 h-2 bg-gray-200" />
					</div>
				</div>
				<hr class="!my-5 border-gray-300 divider" />
				<div>
					<div class="flex mb-3 font-semibold">Requirements</div>
					<div class="flex flex-col gap-1 text-sm">
						<div class="flex justify-between">
							<div class="">3 Direct Referrals</div>
							<div class="text-green-500"><Icon icon="subway:tick" width="1.2em" height="1.2em" /></div>
						</div>
						<div class="flex justify-between">
							<div class="text-gray-400/70">40 Team Members</div>
							<div class="text-gray-500/40"><Icon icon="subway:tick" width="1.2em" height="1.2em" /></div>
						</div>
                        <div class="flex justify-between">
							<div class="text-gray-400/70">VIP 1 Team Members x 3</div>
							<div class="text-gray-500/40"><Icon icon="subway:tick" width="1.2em" height="1.2em" /></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- activate bot -->
<!-- <div>
    <div class="mb-1 text-lg font-semibold">Next Rank</div>
    <div class="flex flex-col p-3 bg-gray-100 rounded-md">
        <div class="flex items-center gap-5 mb-3">
            <div class="flex-shrink-0 w-8 h-8">
                <img class="" src="/img/profile/ranking/V1.png" alt="rankImg" />
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
                    <div class="">Activate 1 Bot</div>
                    <div><Icon icon="subway:tick" width="1.2em" height="1.2em" /></div>
                </div>
            </div>
        </div>
    </div>
</div> -->
