<script lang='ts'>
	import Icon from "@iconify/svelte";
    import { page } from "$app/stores";
    
    const menuList = [ 
        {
            name: "Home",
            icon: "material-symbols:home",
            path: "/"
        },
        {
            name: "Bots",
            icon: "fluent:bot-20-filled",
            path: "/bots"
        },
        {
            name: "profile",
            icon: "mdi:user",
            path: "/profile"
        },
    
    ]
</script>

<div class="flex justify-center max-w-[425px] mx-auto card rounded-none w-full">
    <div class="flex justify-between w-full px-5 py-2 ">
        {#each menuList as menu}
            <a href={menu.path} class="flex flex-col items-center text-sm {$page.url.pathname == menu.path ? 'text-primary-500' : 'text-gray-400'}">
                <div>
                    <Icon icon={menu.icon} width="1.2em" height="1.2em" />
                </div>
                <div>
                    {menu.name}
                </div>
            </a>
        {/each}
    </div>
</div>


