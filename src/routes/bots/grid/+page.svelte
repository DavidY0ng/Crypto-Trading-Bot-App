<script lang='ts'>
	import Icon from '@iconify/svelte';
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    import AI from './AI.svelte';
    import Customise from './Customise.svelte'
    import BackHeader from '$lib/components/BackHeader.svelte';
    import { Drawer, getDrawerStore } from "@skeletonlabs/skeleton";
    import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';

    const drawerStore = getDrawerStore();
    const settings: DrawerSettings = {
        id: 'coin-drawer',
        position: "left",
        width: "w-2/3"
    } ;

    let value: number = 0;
    let selectedCoin = 'BTC'
    let coinList = [ 
        {
            name: 'BTC'
        },
        {
            name: 'ETH'
        },
        {
            name: 'BNB'
        }
    ]
    function onSelectCoin (coin:string) {
        selectedCoin = coin.name
        drawerStore.close()
    }


   
</script>
<BackHeader path="/bots" layout="flex items-center bg-white pb-2">
    <div class="flex justify-start flex-grow font-semibold flex-2 h3">Grid Trading</div>
</BackHeader>
<div class="flex flex-col flex-grow p-3 bg-white">

    
    <div class="flex flex-col flex-grow p-3">
        <button class="flex items-center gap-2 mb-3 font-semibold" on:click={() => drawerStore.open(settings)}>
            <div>
                <Icon icon="ant-design:menu-unfold-outlined" width="1.2em" height="1.2em" />
            </div>
            <div class="text-lg">
                {selectedCoin}/USDT
            </div>
        </button>
        <div class="flex flex-col mb-5">
            <RadioGroup active="bg-white text-black font-semibold" display="" background="bg-surface-50" rounded="rounded-md" border="border-none" class="flex text-gray-400 ">
                <div class="flex flex-1">
                    <RadioItem bind:group={value} name="bot" value={0} class="">AI</RadioItem>
                </div>
                <div class="flex flex-1">
                    <RadioItem bind:group={value} name="running" value={1} class="">Customise</RadioItem>
                </div>
               
            </RadioGroup>
        </div>
        
        <div class="flex flex-grow">
            {#if value == 0}
                <AI />
            {:else}
                <Customise />
            {/if}
        </div>
        
        
    </div>
    
</div>

<Drawer>
    <div class="p-5">
        <div class="flex flex-col">
            <div class="h2">
                Market Pairs
            </div>
            <hr class="my-5 border-t border-gray-300 divider">
            <div class="flex flex-col gap-3">
                {#each coinList as coin}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="flex items-start justify-between" on:click={() => onSelectCoin(coin)}>
                    <div class="">
                        <div class="flex items-end gap-1">
                            <div class="font-semibold leading-none ">
                                {coin.name}
                            </div>
                            <div class="text-xs font-thin text-gray-400">
                                / USDT
                            </div>
                        </div>
                        <div class="text-xs font-thin text-gray-400/80">
                            Vol 1.91B
                        </div>
                    </div>
                    
        
                    <div class="flex flex-col">
                        <div class="font-semibold leading-none">
                            68,228.3
                        </div>
                        <!-- <div class="text-xs text-gray-400">
                            ≈ 68,228.3 USD
                        </div> -->
                        <div class="text-xs text-right text-green-500">
                            +1.19%
                        </div>
                    </div>
                </div>
                {/each}
            </div>
           
        </div>
        
    </div>
</Drawer>
