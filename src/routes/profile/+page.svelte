<script>
    import { storeUserInfo } from '$lib/stores/storeUser';
    import { getUserInfo, userInfo } from '$lib/stores/store'
	import { onMount } from 'svelte';
    import { truncateString } from '$lib/utils/helper'
    import Icon from "@iconify/svelte";
    import QRCode from '@castlenine/svelte-qrcode';

    const menus = [
        {
            icon: 'streamline:subscription-cashflow',
            name: "Membership",
            link: '/membership/plans',
            alternateLink: '/membership'
        },
        {
            icon: 'iconoir:wallet',
            name: "My Wallet",
            link: '/wallet',
            alternateLink: '/wallet'
        },
        {
            icon: 'fluent:document-bullet-list-clock-20-regular',
            name: "Transaction History",
            link: '/profile/transaction-history',
            alternateLink: '/profile/transaction-history'
        },
        {
            icon: 'mdi:security-lock-outline',
            name: "Security",
            link: '/profile/google-auth',
            alternateLink: '/profile/google-auth'
        },
        {
            icon: 'fluent:people-community-48-regular',
            name: "My Community",
            link: '/profile/community',
            alternateLink: '/profile/community'
        },
    ]

    onMount(() => {
        getUserInfo()
    })
</script>

<div class="flex flex-col flex-grow max-h-[250px]">

    <div class="flex flex-col flex-grow p-5 bg-surface-500">
        <div class="flex items-center justify-center flex-grow">
            <img src='/img/profile/2.png' alt='profile-img' class="h-[70px] w-[70px]">
        </div>
        <div class="flex justify-center font-bold text-white">
            {$userInfo.nickname}
        </div>
        <a class="flex items-center justify-center flex-grow" href="/profile/personal-information">
            <div class="flex flex-col items-center flex-grow">
                <div class="flex items-center gap-2">
                    <div class="text-xs text-gray-300">
                        UID:
                    </div>
                    <div class="font-thin text-white">
                        {$storeUserInfo.uid}
                    </div>
                </div>
                
                <div class="flex items-center gap-2">
                    <div class="text-xs text-gray-300">
                        Address:
                    </div>
                    <!-- <div class="font-bold">
                        {truncateString('1234123412341432543523452435',5,5)}
                    </div> -->
                    <div class="font-thin text-white">
                        {truncateString($storeUserInfo.address,5,5)}
                    </div>
                </div>
            </div>
            <div class="flex justify-end text-white">
                <Icon icon="material-symbols:keyboard-arrow-right" width="1.5em" height="1.5em" />
            </div>
        </a>
        
        
    </div>
    
</div>

<!-- menu and links -->
<div class="flex flex-col flex-grow bg-white">
    {#each menus as menu}
        <a class="flex items-center gap-4 p-5 border-b" href={$storeUserInfo.membership == 0 ? menu.alternateLink : menu.link}>
            <div>
                <Icon icon={menu.icon} width="1.2em" height="1.2em" />
            </div>
            <div class="font-semibold">
                {menu.name}
            </div>
            <div class="flex justify-end flex-grow text-gray-400">
                <Icon icon="material-symbols:keyboard-arrow-right" width="1.5em" height="1.5em" />
            </div>
        </a> 
    {/each}
</div>
