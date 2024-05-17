<script>
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import Icon from "@iconify/svelte";
    import Spinner from '$lib/components/spinner/Spinner.svelte';
  

    const menuPath = [ 
        {
            links: "#",
            icon: "icon-park-outline:api",
            name: "API sync"
        },
        {
            links: "#",
            icon: "ic:round-group-add",
            name: "Referral"
        },
        {
            links: "#",
            icon: "iconoir:wallet",
            name: "Wallet"
        },
        {
            links: "#",
            icon: "icon-park-outline:sales-report",
            name: "Revenue"
        }
    ]

    const strategies = [
        {
            icon: "mdi:grid",
            name: "Grid",
            description: "Grid trading strategy is bla bla bla"
        },
        {
            icon: "ph:horse",
            name: "Martingale",
            description: "Place double to your bet when you lose."
        },
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
    ]
</script>


<!-- dashboard -->
<div class="p-3 mb-3 text-white rounded-lg shadow-md bg-gradient-to-b from-primary-500 to-primary-700">
    <div class="flex justify-between mb-3">
        <div>
            <div class="font-semibold ">Total Profit</div>
            <div>0.0</div>
        </div>
        
        <div class="text-end">
            <div>API Sync</div>
            <div>Binance</div>
        </div>
        
    </div>
    

    <div class="flex justify-between">
        <div>
            <div class="font-semibold ">Today's Profit</div>
            <div>0.0</div>
        </div>
        
        <div class="text-end">
            <div>Active Bots</div>
            <div>0</div>
        </div>
        
    </div>

    <div class="flex justify-end pt-3">
        <button class="font-semibold bg-white text btn text-tertiary-500">
            Deposit
        </button>
    </div>
    
</div>

<!-- menu section -->
<div class="flex justify-between mb-3">
    {#each menuPath as menu }
    <div class="flex flex-col items-center card bg-surface-700 shadow-md p-2 w-[80px] text-white">
        <div class="mb-1">
            <Icon icon={menu.icon} width="1.2em" height="1.2em" />
        </div>
        <div class="text-sm">
            {menu.name}
        </div>
    </div>
        
    {/each}
</div>

<!-- strategy -->
<div class="mb-3 text-gray-300">
    Strategy
</div>
<div class="flex flex-col gap-3">
    {#each strategies as strategy}
    <div class="flex items-center gap-4 p-3 py-5 rounded-lg shadow-md bg-surface-700">
        <div class="flex items-center justify-center h-12 text-white rounded-lg w-14 bg-primary-500">
            <Icon icon={strategy.icon} width="1.4em" height="1.4em" />
        </div>
        <div class="w-full">
            <div class="flex justify-between mb-1">
                <div class="font-bold text-white">
                    {strategy.name}
                </div>
                <div class="text-gray-400">
                    <Icon icon="material-symbols:keyboard-arrow-right" width="1.2em" height="1.2em" />
                </div>
            </div>
            <div class="text-sm text-gray-400">
                {strategy.description}
            </div>
        </div>
        
       
    </div>
    {/each}
</div>

