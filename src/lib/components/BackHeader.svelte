<script>
    import { goto } from "$app/navigation";
	import Icon from "@iconify/svelte";

    export let path
    export let layout
</script>


<div class="{layout} pt-3 px-3">
    <div class="flex flex-1">
        <button on:click={() => goto(path)}>
            <Icon icon="gravity-ui:arrow-left" width="1.2em" height="1.2em" />
        </button>
    </div>
  
    <slot />
</div>