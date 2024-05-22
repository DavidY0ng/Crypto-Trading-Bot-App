<script>
    import { storeUserInfo } from '$lib/stores/storeUser';
    import { getUserInfo } from '$lib/stores/store'
	import { onMount } from 'svelte';
    import { truncateString } from '$lib/utils/helper'
    import Icon from "@iconify/svelte";

    const menus = [
        {
            icon: 'streamline:subscription-cashflow',
            name: "Manage Plans",
            links: '/membership/plans'
        },
        {
            icon: 'iconoir:wallet',
            name: "My Wallet",
            links: '/wallet'
        },
        {
            icon: 'fluent:document-bullet-list-clock-20-regular',
            name: "Transaction History",
            links: ''
        },
        {
            icon: 'mdi:security-lock-outline',
            name: "Security",
            links: ''
        },
        {
            icon: 'fluent:people-community-48-regular',
            name: "My Community",
            links: ''
        },
    ]

    onMount(() => {
        getUserInfo()
    })
</script>

<div class="flex flex-col">

    <div class="flex items-center p-5 bg-blue-500">
        <div class="flex flex-shrink-0 mr-2">
            <img src='/img/profile/2.png' alt='profile-img' class="h-[70px] w-[70px]">
        </div>
        
        <a class="flex items-center flex-grow" href="/profile/personal-information">
            <div class="flex flex-col">
                <div class="flex gap-2">
                    <div class="text-white">
                        UID:
                    </div>
                    <div class="font-bold text-white">
                        {$storeUserInfo.uid}1234
                    </div>
                </div>
                
                <div class="flex gap-2">
                    <div class="text-white">
                        Address:
                    </div>
                    <!-- <div class="font-bold">
                        {truncateString('1234123412341432543523452435',5,5)}
                    </div> -->
                    <div class="font-bold text-white">
                        {truncateString($storeUserInfo.address,5,5)}
                    </div>
                </div>
            </div>
            <div class="flex justify-end flex-grow text-white">
                <Icon icon="material-symbols:keyboard-arrow-right" width="1.5em" height="1.5em" />
            </div>
        </a>
        
        
        
    </div>
    
    
</div>

<div class="flex flex-col flex-grow bg-white">
    {#each menus as menu}
        <div class="flex items-center gap-4 p-5 border-b">
            <div>
                <Icon icon={menu.icon} width="1.2em" height="1.2em" />
            </div>
            <div class="font-semibold">
                {menu.name}
            </div>
            <div class="flex justify-end flex-grow text-gray-400">
                <Icon icon="material-symbols:keyboard-arrow-right" width="1.5em" height="1.5em" />
            </div>
        </div> 
    {/each}
</div>
