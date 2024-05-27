<script>
    import BackHeader from "$lib/components/BackHeader.svelte"
    import Icon from "@iconify/svelte";
    import { getFeeWalletBalance, getRewardWalletBalance, feeWalletBalance, rewardWalletBalance } from "$lib/stores/store";
	import { onMount } from "svelte";

    onMount(() => {
        getFeeWalletBalance()
        getRewardWalletBalance()
    })
</script>

<BackHeader path='/profile' layout='flex items-center bg-white pb-2'>
    <div class="flex justify-center flex-1 h3">
        Wallet
    </div>
    
    <div class="flex-1">
        
    </div>
</BackHeader> 
<div class="flex flex-col gap-5 p-3">
    <div class="flex flex-col shadow-md  rounded-xl bg-[url('/img/wallet/3.png')] bg-cover h-[200px]">
        <div class="flex justify-between flex-grow p-3 px-5 font-bold text-white h-2/3 h2">
            <div>
                Fee Wallet
                <div class="text-lg text-white">
                    {$feeWalletBalance} USDT
               </div>
            </div>
            <div>
                <Icon icon="bxs:wallet" width="1.2em" height="1.2em" />
            </div>
        </div>
        
        <div class="flex flex-grow overflow-hidden bg-surface-600 rounded-b-xl h-1/3">
            <div class="flex items-center justify-end flex-grow pr-5">
                <a class="font-bold bg-[#821dd4] bg-gradient-to-r from-[#821dd4] to-[#b452ea] rounded-lg btn text-white" href='/wallet/deposit'>
                    Deposit
                </a>
            </div>
        </div>
    </div>

    <div class="flex flex-col shadow-md rounded-xl bg-[url('/img/wallet/4.png')] bg-cover h-[200px]">
        <div class="flex justify-between flex-grow p-3 px-5 font-bold text-white h-2/3 h2">
            <div>
                Reward Wallet
                <div class="text-lg text-white">
                    {$rewardWalletBalance} USDT
               </div>
            </div>
            <div>
                <Icon icon="solar:money-bag-bold" width="1.2em" height="1.2em" />
            </div>
        </div>
        
        <div class="flex flex-grow overflow-hidden bg-surface-600 rounded-b-xl h-1/3">
            <div class="flex items-center justify-end flex-grow gap-3 pr-5 font-bold text-black">
                <a class="text-white rounded-lg bg-gradient-to-r from-[#3d8ef7] to-[#66a8fc] btn" href='/wallet/transfer'>
                    Transfer
                </a>
                <a class="text-white bg-gradient-to-r from-[#7e4de0] to-[#8d84f6] rounded-lg btn w-[95px]" href='/wallet/withdraw'>
                    Withdraw
                </a>
                
            </div>
        </div>
    </div>
        
</div>