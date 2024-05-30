<script>
    import BackHeader from '$lib/components/BackHeader.svelte';
	import { getUserInfo, userInfo, isLoading, showModal, showGoogleModal, showAuthenticatorModal } from '$lib/stores/store';
	import Icon from '@iconify/svelte';
    import { copyToClipboard } from "$lib/utils/helper"


</script>

<BackHeader path="/api-sync" layout="flex items-center bg-white pb-2">
	<div class="flex justify-start flex-grow font-semibold flex-2 h3">Binance API Sync</div>
</BackHeader>

<div class="flex flex-col flex-grow gap-5 p-3 bg-white">
    <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
            <div>
                <img src='/img/api-sync/1.png' alt='img1' class="w-10 h-10">
            </div>
            <div class="text-xl font-semibol">
                Binance
            </div>
        </div>
        <div class="flex items-center justify-center gap-2 p-1 px-3 rounded-full bg-primary-500">
            <div class=" w-[1em] h-[1em] overflow-hidden bg-white rounded-full flex items-center justify-center text-success-500">
                <div class="">
                    <Icon icon="mdi:tick-circle" width="1.4em" height="1.4em" color="" />
                </div>
                
            </div>
            <div class="justify-center text-white ">
                Synced
            </div>
        </div>
        
    </div>
    

    <div class="">
        Your Binance account has been synced successfully.
    </div>

    <div class="flex flex-col gap-1">
        <div class="text-sm text-gray-400">
            API Key
        </div>
        <div class="flex items-center justify-between p-2 border rounded-md">
            <div >
                SIWjwi29Shksiw982WJHJKX
            </div>
        </div>
       
    </div>

    <div class="flex flex-col gap-1">
        <div class="text-sm text-gray-400">
            Security Key
        </div>
        <div class="flex items-center justify-between p-2 border rounded-md">
            <div >
                ***********
            </div>
        </div>
       
    </div>

    <div class="flex flex-col justify-end flex-grow">
        <button class="flex text-white rounded-md btn bg-primary-500">Delete Keys</button>
    </div>
</div>