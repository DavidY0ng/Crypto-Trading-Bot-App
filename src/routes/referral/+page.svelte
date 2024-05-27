<script lang='ts'>
    import BackHeader from '$lib/components/BackHeader.svelte'
    import Icon from "@iconify/svelte";
    import { copyToClipboard } from "$lib/utils/helper"
    import { currentURL, urlList } from '$lib/configs/settings';
	import { onMount } from 'svelte';
	import { getReferralCode, getUserInfo, referralCode } from '$lib/stores/store';
    import { storeUserInfo} from "$lib/stores/storeUser"
    import QRCode from '@castlenine/svelte-qrcode';
    
    
    
    let url: string =
		currentURL === new URL(urlList.live.domainURL).hostname
			? urlList.live.domainURL
			: urlList.dev.domainURL;
            
    $: refUrl = `${url}?code=${$referralCode}`;
    $: invitationMenu = [
        {
            title: "My invitation link",
            field: refUrl
        },
        {
            title: "My invitation code",
            field: $referralCode
        }
    ];

    const benefitsOfMembership = [
        {
            icon: 'solar:hand-money-linear',
            description: 'Higher referral rewards'
        },
        {
            icon: 'mdi:feature-highlight',
            description: 'Exclusive features'
        },
        {
            icon: 'material-symbols:priority-outline',
            description: 'Priority support'
        }
    ]

    onMount(async () => {
        await getUserInfo()
        await getReferralCode()
    })
    
</script>

<BackHeader path='/' layout='flex items-center bg-white pb-2'>
    <div class="flex justify-center flex-1 h3">
        Referral
    </div>
    
    <div class="flex-1">
        
    </div>
</BackHeader> 

<div class="h-full bg-surface-500 ">
    <!-- <img src="/img/referral/bg.jpg" alt='bg' class="absolute z-0"> -->
    <div class="px-3 py-3">
        <div class="font-bold text-white h3">
            Invite Friends
        </div>
        <div class="text-sm text-gray-200">
            Refer friends and win together
        </div>
    </div>
    
    <!-- menu section -->
    <div class="flex flex-col gap-3 px-3 py-3 mb-1 bg-white rounded-t-2xl">

        <div class="flex flex-col gap-3">
            {#each invitationMenu as menu}
            <div class="p-3 border rounded-lg">
                <div class="text-sm text-gray-400">
                    {menu.title}
                </div>
                <div class="flex items-center justify-between">
                    <div class="text-base font-semibold">
                        {$storeUserInfo.membership == 0 ? "---" : menu.field}
                    </div>
                    <div class="text-primary-500 {$storeUserInfo.membership == 0 ? "hidden": "flex"}">
                        <button on:click={() => copyToClipboard(menu.field)}>
                            <Icon icon="solar:copy-line-duotone" width="1.2em" height="1.2em" />
                        </button>
                        
                    </div>
                </div>
            </div>
            {/each}
        </div>

        <div class="flex flex-col items-center justify-center p-3 rounded-lg">
            <div class="mb-3 text-gray-400">
                Scan QR code
            </div>
            {#if $storeUserInfo.membership == 0}
                <div class=" variant-glass-primary h-[170px] w-[170px]">
                    
                </div>
            {:else}
                <div class="">
                    <QRCode size={170} data={refUrl} />
                </div>
            {/if}
        </div>

        <div class="flex items-center p-3 rounded-md bg-purple-200/50 text-purple-400 {$storeUserInfo.membership == 0 ? "flex": "hidden"}">
            <div class="text-sm">
                Invitation will only be available after activation!
            </div>
            <a class="flex items-center text-sm rounded-md p-1 h-[30px] text-white btn bg-primary-500" href='/membership'>
                Activate
            </a>
            
        </div>

        <div class="flex items-center gap-2 p-3 rounded-md bg-warning-200/50 text-warning-500">
            <div>
                <Icon icon="akar-icons:circle-alert" width="1.5em" height="1.5em" />
            </div>
            <p class="text-sm">The referral code will expire or become unusable if your membership ends.</p>
        </div>
       
    </div>
    <div class="py-3 pb-10 bg-white">
        <div class="pt-3">
            <div class="w-2/3 py-1 mb-3 font-bold text-white rounded-r shadow-lg h3 bg-gradient-to-r from-primary-500 to-tertiary-500">
                <div class="pl-3">
                    Benefit of Membership
                </div>
                
            </div>
        </div>
        
        {#each benefitsOfMembership as text}
        <div class="flex items-center gap-2 pl-5">
            <div class="text-primary-500">
                <Icon icon={"mdi:tick"} width="1.2em" height="1.2em" />
            </div>
            <div>
                {text.description}
            </div>
        </div>
    
        {/each}
    </div>
    
    
</div>