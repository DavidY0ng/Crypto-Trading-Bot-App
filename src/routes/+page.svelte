<script>
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import Icon from "@iconify/svelte";
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
<div class="mb-3 text-white p-3 rounded-lg shadow-md bg-gradient-to-r from-secondary-500 to-tertiary-500">
    <div class="flex justify-between mb-3">
        <div>
            <div class=" font-semibold">Total Profit</div>
            <div>0.0</div>
        </div>
        
        <div class="text-end">
            <div>API Sync</div>
            <div>Binance</div>
        </div>
        
    </div>
    

    <div class="flex justify-between">
        <div>
            <div class=" font-semibold">Today's Profit</div>
            <div>0.0</div>
        </div>
        
        <div class="text-end">
            <div>Active Bots</div>
            <div>0</div>
        </div>
        
    </div>

    <div class="flex justify-end pt-3">
        <button class="text btn bg-white text-tertiary-500 font-semibold">
            Deposit
        </button>
    </div>
    
</div>

<!-- menu section -->
<div class="flex justify-between mb-3">
    {#each menuPath as menu }
    <div class="flex flex-col items-center card bg-white shadow-md p-2 w-[80px]">
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
<div class="text-gray-500 mb-3">
    Strategy
</div>
<div class="flex flex-col gap-3">
    {#each strategies as strategy}
    <div class="bg-white shadow-md rounded-lg p-3 flex items-center gap-4 py-5">
        <div class=" rounded-lg h-12 w-14 flex items-center justify-center bg-tertiary-500 text-white">
            <Icon icon={strategy.icon} width="1.4em" height="1.4em" />
        </div>
        <div class="w-full">
            <div class="flex justify-between mb-1">
                <div class="font-bold">
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

