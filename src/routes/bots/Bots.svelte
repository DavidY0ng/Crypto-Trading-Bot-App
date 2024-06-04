<script>

	import Icon from "@iconify/svelte";

    const strategies = [
		{
			icon: 'mdi:grid',
			name: 'Grid',
			description: 'Grid trading strategy is bla bla bla lala aa',
            link:'/bots/grid'
		},
		{
			icon: 'ph:horse',
			name: 'Martingale',
			description: 'Place double to your bet when you lose.',
            link:'/bots/martingale'
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
</script>
<div class="mb-2 text-gray-400">
    Spot
</div>
<div class="flex flex-col gap-3">
    {#each strategies as strategy}
        <a class="flex items-center gap-4 px-3 py-5 rounded-lg card"  href={strategy.link}>
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
        </a>
    {/each}
</div>