<script>
    import { goto } from "$app/navigation";
	import Icon from "@iconify/svelte";
    import { get } from 'svelte/store';
    import { previousUrl } from '$lib/stores/store';
    import { storeLocal } from "$lib/stores/storeLocal";

    export let path
    export let layout

    // function goBack() {
    //     const url = $storeLocal.prevUrl;
    //     console.log(url)
    //     if (url) {
    //     goto(url);
    //     } else {
    //     // Fallback behavior if there's no previous URL
    //     goto('/');
    //     }
    // }

    // function goBack() {
    //     const store = get(storeLocal);
    //     const prevUrl = store.prevUrl || '/';
    //     goto(prevUrl);
    // }
</script>


<div class="{layout} pt-3 px-3">
    <div class="flex flex-1">
        <button on:click={() => goto(path)}>
            <Icon icon="gravity-ui:arrow-left" width="1.2em" height="1.2em" />
        </button>
    </div>

    <slot />

    
</div>