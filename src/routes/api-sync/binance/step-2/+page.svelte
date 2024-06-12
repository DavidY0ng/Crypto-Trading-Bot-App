<script>
    import BackHeader from '$lib/components/BackHeader.svelte';
	import { getUserInfo, userInfo, isLoading, showModal, showGoogleModal, showAuthenticatorModal } from '$lib/stores/store';
	import Icon from '@iconify/svelte';
    import { copyToClipboard } from "$lib/utils/helper"

    let APIKeyInput = ''
    let securityKeyInput = ''

    $: isSubmitDisabled = APIKeyInput === '' || securityKeyInput === '';

</script>

<BackHeader path="/api-sync/binance" layout="flex items-center bg-white pb-2">
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
        <div class="flex justify-center flex-1 flex-grow w-full text-center border-b-2 border-primary-500">
            Step 2
        </div>
    </div>

    <div class="flex flex-col gap-1 p-2 bg-gray-100 rounded-md">
        <div class="font-bold">
            API Configuration
        </div>
        <div class="text-sm">
            To connect your Binance account, add your Binance API & Security key below.
        </div>
    </div>

    <div class="flex flex-col gap-3">
        <div class="flex flex-col gap-1">
            <div class="text-sm text-gray-400">
                API Key
            </div>
            <div class="flex items-center justify-between ">
                <input class="p-2 bg-white border rounded-md" placeholder="Enter API Key" bind:value={APIKeyInput}>
            </div>
           
        </div>
        
        <div class="flex flex-col gap-1">
            <div class="text-sm text-gray-400">
                Security Key
            </div>
            <div class="flex items-center justify-between ">
                <input class="p-2 bg-white border rounded-md" placeholder="Enter Security Key" bind:value={securityKeyInput}>
            </div>
           
        </div>
    </div>

    <!-- <div class="flex justify-end">
        <div class="flex items-center gap-2 p-2 border rounded-md">
            <div>
                Scan from Photos
            </div>
            <button class="text-gray-500">
                <Icon icon="ic:twotone-qrcode" width="1.2em" height="1.2em" />
            </button>
        </div>
        
    </div> -->
    

    <div class="flex flex-col justify-end flex-grow">
        <button class="flex text-white rounded-md btn bg-primary-500" disabled={isSubmitDisabled}>Submit</button>
    </div>
</div>