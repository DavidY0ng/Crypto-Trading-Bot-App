<script lang='ts'>
    import Icon from "@iconify/svelte";
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
    import { t } from '$lib/i18n';
    import BackHeader from "$lib/components/BackHeader.svelte"
    import { storeUserInfo } from "$lib/stores/storeUser";
    

    let amountValue:number | null = null
    let confirmCheck:boolean = false

</script>

<BackHeader path='/wallet' layout='flex items-center bg-white pb-2'>
    <div class="flex justify-center flex-1 h3">
        Withdraw
    </div>
    
    <div class="flex-1">
        
    </div>
</BackHeader>
<div class="flex flex-col p-3">
    <div class="flex flex-col gap-5 p-5 shadow-md card">
        <div class="flex flex-col gap-1">
            <div class="flex text-sm text-gray-400">
                Select Coin
            </div>
            <div class="flex flex-grow">
                <select class="flex flex-grow p-2 bg-white border rounded-md select outline-primary-500" >
                    <option class="" value="USDT">
                        USDT
                    </option>
                </select>
            </div>
        </div>
    
        <div class="flex flex-col gap-1">
            <div class="flex text-sm text-gray-400">
                Address
            </div>
            <div class="p-2 px-3 overflow-hidden bg-white border rounded-md">
                {$storeUserInfo.address}
            </div>
        </div>
    
        <div class="flex flex-col gap-1">
            <div class="flex text-sm text-gray-400">
                Network
            </div>
            <div class="p-2 px-3 bg-white border rounded-md">
                -
            </div>
        </div>
        
        <div class="flex flex-col gap-1">
            <div class="flex text-sm text-gray-400">
                Amount
            </div>
            <div>
                <input type="number" pattern="[0-9]*" class="p-2 px-3 border rounded-md shadow-sm" bind:value={amountValue} placeholder="Enter an amount">
            </div>
        </div>
    
        <label class="flex items-center ml-2 space-x-3">
            <input
            
                class="checkbox w-[15px] h-[15px]"
                type="checkbox"
                disabled = {amountValue === null || amountValue < 20}
                bind:checked={confirmCheck}
            />
            <p class="text-sm text-gray-500">
                {$t('withdraw.confirm')}
            </p>
        </label>
    
        <div class="flex flex-grow">
            <button  class="flex justify-center flex-grow text-white rounded-md shadow-md btn bg-primary-500" disabled={!confirmCheck}>
                Withdraw
            </button>
        </div>
    </div>
    
</div>
