<script>
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import Icon from "@iconify/svelte";
    import Spinner from '$lib/components/Spinner.svelte';
    import TopNav from '$lib/components/TopNav.svelte';
  

    const menuPath = [ 
        {
            links: "#",
            icon: "icon-park-outline:api",
            name: "API sync"
        },
        {
            links: "/referral",
            icon: "ic:round-group-add",
            name: "Referral"
        },
        {
            links: "/wallet",
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

<TopNav/>


<div class="flex flex-col px-3 pt-3">
    <!-- dashboard -->
    <div class="flex flex-col p-3 mb-3 text-white rounded-lg shadow-md bg-gradient-to-r from-secondary-500 to-tertiary-500">
        <div class="flex justify-between mb-3">
            <div class="flex flex-col">
                <div class="font-semibold ">Total Profit</div>
                <div>0.0</div>
            </div>
            
            <div class="flex flex-col text-end">
                <div>API Sync</div>
                <div>Binance</div>
            </div>
        </div>
        
    
        <div class="flex justify-between">
            <div class="flex flex-col">
                <div class="font-semibold ">Today's Profit</div>
                <div>0.0</div>
            </div>
            
            <div class="flex flex-col text-end">
                <div>Active Bots</div>
                <div>0</div>
            </div>
        </div>
    
        <div class="flex justify-end pt-3">
            <button class="flex font-semibold bg-white shadow-md text btn text-tertiary-500">
                Deposit
            </button>
        </div>
        
    </div>
    
    <!-- menu section -->
    <div class="flex justify-between mb-3">
        {#each menuPath as menu }
        <a class="flex flex-col items-center card bg-white shadow-md p-2 w-[80px]" href={menu.links}>
            <div class="mb-1 text-gray-500">
                <Icon icon={menu.icon} width="1.2em" height="1.2em" />
            </div>
            <div class="flex text-sm">
                {menu.name}
            </div>
        </a>
            
        {/each}
    </div>

    <!-- Join membership section -->
    <a class="relative flex justify-between gap-4 px-2 py-2 mb-3 text-sm shadow-md bg-gradient-to-r from-tertiary-500/20 to-orange-500/20" href="/membership">
        <div class="flex absolute top-[-8px] left-0 text-tertiary-500">
            <Icon icon="streamline:star-2-solid" width="1.2em" height="1.2em" />
        </div>
        
        <div class="flex">
            Enjoy more rewards with membership
        </div>
        <div class="flex font-semibold text-orange-500">
            Subscribe+
        </div>
    </a>
    
    
    <!-- strategy -->
    <!-- <div class="mb-3 text-gray-500">
        Strategy
    </div> -->
    <div class="flex flex-col gap-3 pb-3">
        {#each strategies as strategy}
        <div class="flex items-center gap-4 p-3 py-5 bg-white rounded-lg shadow-md">
            <div class="flex items-center justify-center h-12 text-white rounded-lg w-14 bg-primary-500">
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


