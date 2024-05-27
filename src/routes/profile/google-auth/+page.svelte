<script lang='ts'>
    import { t } from "$lib/i18n";
    import BackHeader from "$lib/components/BackHeader.svelte";
    import QRCode from '@castlenine/svelte-qrcode';
    import { onMount } from 'svelte'
    import { getGoogle2FACode, google2FACode, google2FAKey, enableGoogle2FA, showAuthenticatorModal } from '$lib/stores/store'
	import { copyToClipboard } from "$lib/utils/helper";
    import Icon from "@iconify/svelte";
    import { storeUserInfo } from '$lib/stores/storeUser';


    let qrCode:string
    let googleCodeInput:string

    
    onMount (async() => {
        await getGoogle2FACode()
        qrCode = $google2FACode 
        
    })
</script>
<BackHeader path="/profile" layout="flex items-center bg-white pb-2">
	<div class="flex justify-start flex-grow flex-2 h3">Security</div>
</BackHeader>
{#if $storeUserInfo.authenticator == 0}
<div class="p-3">
    <div class="flex flex-col w-full p-5 font-medium bg-white rounded-md caps-first card">
        <div class="header !capitalize font-bold text-lg">{$t('login.g-auth')}</div>
        <hr class="my-4 divider "/>
        <div class="step">
            <div class="mb-4">
                <span class="inline-block normal-case">{$t('login.step-1')}</span>
                <span class="inline-block">{$t('login.g-auth-download')}</span>
            </div>
            <div class="flex justify-center badges">
                <a href='https://apps.apple.com/us/app/google-authenticator/id388497605' target="_blank">
                    <img class="mr-6" alt="app-store" src="../img/profile/google-auth/app-store-badge.svg" />
                </a>
                
                <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en" target="_blank">
                    <img alt="google-play" src="../img/profile/google-auth/google-play-badge.png" class="h-10"/>
                </a>
            </div>
        </div>
        <hr class="my-4 divider"/>
        <div class="step">
            <div class="mb-4">
                <span class="inline-block">{$t('login.step-2')}</span>
                <span class="inline-block">{$t('login.g-auth-scan')}</span>
            </div>
            <div class="mb-4 text-sm text-gray-400 tip">
                <span class="inline-block">{$t('login.g-auth-scan-tip')}</span>
            </div>
            <div class="flex items-center justify-center mb-4 text-center qr-code">
                {#if qrCode}
                <QRCode size={150} data={qrCode} />
                {/if}
            </div>
            <div class="mb-4 text-sm text-gray-400 tip caps-first">
                <span class="inline-block">{$t('login.g-auth-scan-tip-2')}</span>
            </div>
            <div class="mb-4 text-sm text-gray-400 tip caps-first">
                <span class="inline-block">If you can't scan the QR code, you can enter this secret key into your authenticator app</span>
            </div>
            <div class="flex items-center justify-between w-full px-3 py-2 text-sm transition bg-gray-200 border-2 rounded-lg outline-none text-ellipsis border-white/30 hover:border-white/40 focus:border-white/60">
                <div>
                    {$google2FAKey}
                </div>
                <div class="text-primary-500">
                    <button on:click={() => copyToClipboard($google2FAKey)}>
                        <Icon icon="solar:copy-line-duotone" width="1.2em" height="1.2em" />
                    </button>
                    
                </div>
            </div>
        </div>
        <hr class="my-4 divider "/>
        <div class="step">
            <div class="mb-4">
                <span class="inline-block">{$t('login.step-3')}</span>
                <span class="inline-block">{$t('login.g-auth-enter')}</span>
            </div>
            <div class="mb-4 text-sm text-gray-400 tip">
                <span class="inline-block">{$t('login.g-auth-enter-tip')}</span>
            </div>
            <input bind:value={googleCodeInput} type='text' class="w-full px-3 py-2 text-sm transition border-2 rounded-lg outline-none text-ellipsis border-white/30 hover:border-white/40 focus:border-white/60" placeholder={t.get('login.g-auth-placeholder')}/>
        </div>
        <button on:click={() => enableGoogle2FA(googleCodeInput)} type="button" class="self-end btn bg-primary-500 w-full text-white !capitalize px-16 mt-8 rounded-lg" >{$t('login.submit')}</button>
    </div>
</div>
{:else}


<div class="flex flex-grow p-5 bg-white">
    <div class="w-full">
        <div class="flex justify-between ">
            <div class="flex items-center gap-2">
                <div class="text-gray-400">
                    <Icon icon="simple-icons:googleauthenticator" width="1.2em" height="1.2em" />
                </div>
                <div class="flex items-center gap-2">
                    Authenticator App 
                </div>
                <!-- <div class="flex items-center">
                    <span class="text-green-500"><Icon icon="mdi:tick-circle" width="1.2em" height="1.2em" /></span>
                </div> -->
            </div>
            <div class="p-1 text-xs font-semibold text-green-500 rounded-md bg-green-500/30">
                Verified
            </div>
        </div>
    </div>
   
</div>

{/if}