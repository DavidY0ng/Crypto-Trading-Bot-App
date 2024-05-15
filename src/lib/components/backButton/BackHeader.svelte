<script>
    import { goto } from "$app/navigation";
	import Icon from "@iconify/svelte";

    export let path
    export let layout
</script>


<div class="px-4 pt-4 {layout}">
    <button on:click={() => goto(path)}>
        <Icon icon="gravity-ui:arrow-left" width="1.2em" height="1.2em" />
    </button>
    <slot />
</div>