<script>
    import BackHeader from '$lib/components/BackHeader.svelte';
	import Icon from '@iconify/svelte';
    import { storeUserInfo } from '$lib/stores/storeUser';

    const menus = [
        {
            img: "/img/api-sync/1.png",
            name: "Binance",
            link: "/api-sync/binance"
        }
    ]
</script>

<BackHeader path="/" layout="flex items-center bg-white pb-2">
	<div class="flex justify-start flex-grow font-semibold flex-2 h3">API Management</div>
</BackHeader>

<div class="flex flex-col flex-grow p-5 bg-white">
    {#each menus as menu}
    <div class="flex items-center justify-between p-5 border rounded-lg">
        <div class="flex items-center gap-4">
            <div>
                <img src={menu.img} alt='img1' class="w-10 h-10">
            </div>
            <div class="text-xl font-semibol">
                {menu.name}
            </div>
        </div>
        

        <div>
            <a href="/api-sync/binance" class="py-1 text-white shadow-md bg-primary-500 btn">
                {$storeUserInfo.api_synced == 0 ? 'Add' : 'View'}
            </a>
        </div>
    </div>
    {/each}
</div>