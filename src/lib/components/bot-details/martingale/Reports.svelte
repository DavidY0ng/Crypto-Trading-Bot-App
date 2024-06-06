<script>
    import { copyToClipboard } from "$lib/utils/helper";
	import Icon from "@iconify/svelte";
    import Chart from "./chart/Chart.svelte";

    const parameterData = [ 
        {
            name: 'Price deviation',
            value: '0.80%'
        },
        {
            name: 'Volume scale',
            value: '1.5'
        },
        {
            name: 'Safety orders',
            value: '8'
        },
        {
            name: 'Take profit ratio',
            value: '0.80%'
        },
        {
            name: 'Signal',
            value: 'Immediately'
        },
    ]
</script>

<div class="flex flex-col gap-3 p-3">
    <div class="p-3 border card">
        <div class="flex items-center gap-2 mb-3">
            <div class="w-7 h-7">
                <img src="/img/coin-icons/eth.png">
            </div>
           
            <div class="flex flex-col">
                <div class="font-semibold">
                    ETH/USDT Martingale Trading
                </div>
                <div class="text-xs text-gray-400/80">
                    --(2024/05/28 15:28:24 Created)
                </div> 
            </div>
            
        </div>
    
        <div class="flex justify-between w-full mb-3 overflow-hidden border border-green-500 rounded-xl">
            <div class="flex flex-col w-1/2 gap-1 p-3">
                <div class="text-xs">
                    Investment (USDT)
                </div>
                <div class="text-sm font-semibold">
                    16.72
                </div>
            </div>
            
            <div class="flex flex-col w-2/3 gap-1 p-3 text-white bg-green-500 trapezium-bg">
                <div class="text-xs text-right">
                    Current Profit (USDT)
                </div>
                <div class="text-sm font-semibold text-right">
                    +0.00396(+0.02%)
                </div>
            </div>
        </div>
    
        <div class="flex w-full px-3 mb-3">
            <div class="w-1/2 text-left">
                <div class="text-xs text-gray-400/80">
                    Floating Profit USDT
                </div>
                <div class="text-sm font-semibold text-green-500">
                    +0.000
                </div>
                <div class="text-sm font-semibold text-green-500">
                    +0.00%
                </div>
            </div>
        
            <div class="w-1/2 text-right">
                <div class="text-xs text-gray-400/80">
                    DCA USDT
                </div>
                <div class="text-sm font-semibold text-green-500">
                    +0.000
                </div>
                <div class="text-sm font-semibold text-green-500">
                    +0.00%
                </div>
            </div>
        </div>
    
        <div class="flex w-full px-3 mb-3">
            <div class="w-1/2 text-left">
                <div class="text-xs text-gray-400/80">
                    Price range USDT
                </div>
                <div class="text-sm font-semibold ">
                    3,345.31 - 4533.18
                </div>
            </div>
        
            <div class="w-1/2 text-right">
                <div class="text-xs text-gray-400/80">
                    Current Price USDT
                </div>
                <div class="text-sm font-semibold ">
                    3850.01
                </div>
            </div>
        </div>
       
        <!-- <div class="flex gap-2 text-sm">
            <button class="flex justify-center flex-1 py-1 text-white bg-red-500 rounded-md">
                End Bot
            </button>
            <a href='/bots/martingale-details' class="flex justify-center flex-1 p-1 border rounded-md">
                Details
            </a>
        </div> -->
        
    </div>

    <!-- graph section -->
    <div>
        <div class="font-semibold">
            Profit in USDT
        </div>
        <div class="card !shadow-sm p-3">
            <div class="text-xs text-gray-300">
                USDTPnl
            </div>
            <div class="text-xl font-bold text-green-500">
                +106.27%
            </div>
            <Chart />
        </div>
    </div>

    <div>
        <div class="font-semibold">
            Parameter
        </div>
        <div class="card !shadow-sm p-3">
            <div class="grid grid-cols-3 gap-3">
                {#each parameterData as data}
                    <div>
                        <div class="mb-1 text-xs text-gray-400">
                            {data.name}
                        </div>
                        <div class="text-sm font-semibold">
                            {data.value}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
    

    <div>
        <div class="font-semibold">
            About Bot
        </div>
        <div class="card !shadow-sm p-3 flex flex-col gap-1">
            <div class="flex justify-between text-sm">
                <div class="text-gray-500">
                    BOT ID
                </div>
                <div class="flex gap-1">
                    <div class="font-semibold">
                        3128a727s8d
                    </div>
                    <div class="text-primary-500">
                        <button on:click={() => copyToClipboard('3213')}>
                            <Icon icon="solar:copy-line-duotone" width="1.2em" height="1.2em" />
                        </button>
                        
                    </div>
                </div>
                
            </div>

            <div class="flex justify-between text-sm">
                <div class="text-gray-500">
                    Tool
                </div>
                <div class="font-semibold">
                    Martingale Trading Bot
                </div>
            </div>

            <div class="flex justify-between text-sm">
                <div class="text-gray-500">
                    Market
                </div>
                <div class="font-semibold">
                    BTC/USDT
                </div>
            </div>

            <div class="flex justify-between text-sm">
                <div class="text-gray-500">
                    Starting Time
                </div>
                <div class="font-semibold">
                    2024/05/20 14:22:10
                </div>
            </div>

            <div class="flex justify-between text-sm">
                <div class="text-gray-500">
                    Lasting
                </div>
                <div class="font-semibold">
                    00D 00H 24m
                </div>
            </div>
            
        </div>

           
            
  

            
            

    </div>
</div>


<style>.trapezium-bg {
    background-color: #22c55e; /* green-500 color */
    position: relative;
    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
    /* Adjust the first point (25% 0%) to get the desired trapezium effect */
}
</style>