<script>
    import Modal from "$lib/components/Modal.svelte";
	import { showModal } from "$lib/stores/store";
</script>

<div class="flex flex-col gap-3">
    <div class="p-3 border card">
        <div class="flex items-center gap-2 mb-3">
            <div class="w-7 h-7">
                <img src="/img/coin-icons/eth.png">
            </div>
           
            <div class="flex flex-col">
                <div class="font-semibold">
                    ETH/USDT Grid Trading
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
                    Grid Profit USDT
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
                <div class="text-sm font-semibold ">
                    (50 grids)
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
       
        <div class="flex gap-2 text-sm">
            <button on:click={() => showModal.set(true)}  class="flex justify-center flex-1 py-1 text-white bg-red-500 rounded-md">
                End Bot
            </button>
            <a href='/bots/grid-details' class="flex justify-center flex-1 p-1 border rounded-md">
                Details
            </a>
        </div>
        
    </div>
    
    <div class="p-3 border card">
        <div class="flex items-center gap-2 mb-3">
            <div class="w-7 h-7">
                <img src="/img/coin-icons/eth.png" alt='img'>
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
       
        <div class="flex gap-2 text-sm">
            <button on:click={() => showModal.set(true)} class="flex justify-center flex-1 py-1 text-white bg-red-500 rounded-md">
                End Bot
            </button>
            <a href='/bots/martingale-details' class="flex justify-center flex-1 p-1 border rounded-md">
                Details
            </a>
        </div>
        
    </div>
</div>

{#if $showModal}
	<Modal cross="hidden">
		<div slot="header">
			<div class="">
				Do you want to terminate this bot?
			</div>
		</div>

		<div class="flex justify-end w-full gap-2 pt-5">
			<button
				on:click={() => showModal.set(false)}
				class="w-1/2 py-2 font-semibold text-white bg-gray-500 rounded-md btn"
			>
				Cancel
			</button>
			<button
				
				class="w-1/2 py-2 font-semibold text-white rounded-md btn bg-primary-500"
			>
				Confirm
			</button>
		</div>
	</Modal>
{/if}

<style>.trapezium-bg {
    background-color: #22c55e; /* green-500 color */
    position: relative;
    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
    /* Adjust the first point (25% 0%) to get the desired trapezium effect */
}
</style>