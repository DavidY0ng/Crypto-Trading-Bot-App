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
    <div class="flex items-center gap-2">
        <div>
            <img src='/img/api-sync/1.png' alt='img1' class="w-10 h-10">
        </div>
        <div class="text-xl font-semibol">
            Binance
        </div>
    </div>

    <div class="">
        Connect to your Binance account with a few simple steps.
    </div>

    <div class="flex w-full mb-2">
        <div class="flex justify-center flex-1 flex-grow w-full text-center border-b-2 border-primary-500">
            Step 1
        </div>
        <div class="flex justify-center flex-1 flex-grow w-full text-center border-b">
            Step 2
        </div>
    </div>

    <div class="flex flex-col gap-1 p-2 bg-gray-100 rounded-md">
        <div class="font-bold">
            IP Binding
        </div>
        <div class="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas placeat, molestias exercitationem dignissimos nihil excepturi rem repudiandae, ipsum itaque rerum expedita vel eaque a accusamus! Accusamus reiciendis eveniet quas!
        </div>
    </div>

    <div class="flex flex-col gap-1">
        <div class="text-sm text-gray-400">
            IP Address
        </div>
        <div class="flex items-center justify-between p-2 border rounded-md">
            <div >
                172.232.123.123.2.123
            </div>
            <div class="text-primary-500">
                <button on:click={() => copyToClipboard('172.232.123.123.2.123')}>
                    <Icon icon="solar:copy-line-duotone" width="1.2em" height="1.2em" />
                </button>
                
            </div> 
        </div>
       
    </div>

    <div class="flex flex-col justify-end flex-grow">
        <a href='./binance/step-2' class="flex text-white rounded-md btn bg-primary-500">Next</a>
    </div>
</div>