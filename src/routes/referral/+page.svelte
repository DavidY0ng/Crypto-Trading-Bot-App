<script>
    import BackHeader from '$lib/components/backButton/BackHeader.svelte'
    import Icon from "@iconify/svelte";
    import { copyToClipboard } from "$lib/utils/helper"

    const invitationMenu = [
        {
            title: "My invitation link",
            field: "https://trading-bot.xyz"
        },
        {
            title: "My invitation code",
            field: "1234"
        }
    ]

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
    
</script>

<BackHeader path='/' layout='flex items-center bg-white pb-2'>
    <div class="flex justify-center flex-1 h3">
        Referral
    </div>
    
    <div class="flex-1">
        
    </div>
</BackHeader> 

<div class="bg-[url('/img/referral/bg.jpg')] bg-cover bg-fixed">
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
                        {menu.field}
                    </div>
                    <div class="text-primary-500">
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
            <img src='/img/referral/sample qr.png' alt='qr-code' class="w-[150px] h-[150px]">
        </div>

        <div class="p-3 bg-error-200/50 text-error-400">
            Please activate your membership to access your invite link, referral code, and QR code.
        </div>

        <div class="flex items-center gap-2 p-3 bg-warning-200/50 text-warning-500">
            <div>
                <Icon icon="akar-icons:circle-alert" width="1.5em" height="1.5em" />
            </div>
            <p>The referral code wille expire or become unusable if your membership ends.</p>
        </div>
       
    </div>
    <div class="pb-3 bg-white">
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