<script>
    import BackHeader from "$lib/components/BackHeader.svelte"
    import Icon from "@iconify/svelte";
</script>

<BackHeader path='/' layout='flex items-center bg-white pb-2'>
    <div class="flex justify-center flex-1 h3">
        Wallet
    </div>
    
    <div class="flex-1">
        
    </div>
</BackHeader> 
<div class="flex flex-col gap-5 p-3">
    <div class="flex flex-col shadow-md  rounded-xl bg-[url('/img/wallet/1.png')] bg-cover h-[200px]">
        <div class="flex justify-between flex-grow p-3 font-bold text-white h-2/3 h2">
            <div>
                Fee Wallet
                <div class="text-lg text-white">
                    0.00 USDT
               </div>
            </div>
            <div>
                <Icon icon="bxs:wallet" width="1.2em" height="1.2em" />
            </div>
        </div>
        
        <div class="flex flex-grow overflow-hidden rounded-b-xl h-1/3 bg-surface-700">
            <div class="flex items-center justify-end flex-grow pr-3">
                <a class="text-white rounded-lg btn bg-primary-500" href='/wallet/deposit'>
                    Deposit
                </a>
            </div>
        </div>
    </div>

    <div class="flex flex-col shadow-md card rounded-xl bg-[url('/img/wallet/2.png')] bg-cover h-[200px]">
        <div class="flex justify-between flex-grow p-3 font-bold text-white h-2/3 h2">
            <div>
                Reward Wallet
                <div class="text-lg text-white">
                    0.00 USDT
               </div>
            </div>
            <div>
                <Icon icon="solar:money-bag-bold" width="1.2em" height="1.2em" />
            </div>
        </div>
        
        <div class="flex flex-grow overflow-hidden rounded-b-xl h-1/3 bg-surface-700">
            <div class="flex items-center justify-end flex-grow gap-3 pr-4">
                <button class="text-white rounded-lg variant-ghost-secondary btn">
                    Transfer
                </button>
                <button class="text-white bg-teal-400 rounded-lg btn w-[95px]">
                    Withdraw
                </button>
                
            </div>
        </div>
    </div>
        
</div>