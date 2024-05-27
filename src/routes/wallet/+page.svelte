<script>
    import BackHeader from "$lib/components/BackHeader.svelte"
    import Icon from "@iconify/svelte";
    import { getFeeWalletBalance, getRewardWalletBalance, feeWalletBalance, rewardWalletBalance } from "$lib/stores/store";
	import { onMount } from "svelte";

    let totalBalance
    const wallets = [
        {
            id: '1',
            name: "Fee Wallet",
            icon: 'bxs:wallet',
            link: "/wallet/fee-wallet"
        },
        {
            id: '2',
            name: "Reward Wallet",
            icon: 'solar:money-bag-bold',
            link: "/wallet/reward-wallet"
        },
    ]

    onMount(() => {
        getFeeWalletBalance()
        getRewardWalletBalance()
    })
    
</script>

<!-- <BackHeader path='/profile' layout='flex items-center bg-white pb-2'>
    <div class="flex justify-center flex-1 h3">
        Wallet
    </div>
    
    <div class="flex-1">
        
    </div>
</BackHeader>  -->
<div class="relative flex flex-col flex-grow bg-white">
    <div class="relative flex flex-col items-center overflow-hidden">
        <div class="bg-primary-900 rounded-b-full h-[300px] w-[900px] overflow-hidden flex items-center pt-20 text-white flex-col gap-5">
            <div class="h3">
                Total Wallet Balance
            </div>
            <div class="flex items-end gap-2">
                 <div class="h1">
                {$feeWalletBalance + $rewardWalletBalance}
            </div>
            <div class="h5">
                USDT
            </div>
            </div>
           
        </div>
        
    </div>
    <div class="absolute flex flex-col items-start top-[33%] gap-5 w-full p-5">
        {#each wallets as wallet, i}
            <a class="flex justify-between flex-grow w-full gap-2 p-5 card" href={wallet.link}>
                <!-- <span class="text-primary-500"><Icon icon={wallet.icon} width="1.2em" height="1.2em" /></span> -->
                <div class="flex flex-col gap-2">
                    <div class="flex items-center gap-2 text-lg">
                        {wallet.name}
                    </div>
                    <div class="flex gap-2 text-sm">
                        <!-- <div class="text-gray-400">
                            Available Balance
                        </div> -->
                        <div class="font-bold">
                            {wallet.id == '1' ? $feeWalletBalance : $rewardWalletBalance} USDT
                        </div>
                    </div>
                </div>
               
                <div class="flex items-center text-primary-500">
                    <Icon icon="solar:alt-arrow-right-linear" width="3em" height="3em" />
                </div>
                
            </a>
        {/each}
    </div>
</div>


<!-- <div class="flex flex-col gap-5 p-3">
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
                <a class="font-bold bg-[#821dd4] bg-gradient-to-r from-[#821dd4] to-[#b452ea] rounded-lg btn text-white" href='/wallet/fee-wallet/deposit'>
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
        
</div> -->