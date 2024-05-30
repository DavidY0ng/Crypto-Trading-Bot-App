<script>
    import Synced from './Synced.svelte';
    import Unsynced from './Unsynced.svelte';
    import { storeUserInfo } from '$lib/stores/storeUser';
</script>

{#if $storeUserInfo.api_synced == 0}
    <Unsynced />
{:else}
    <Synced />
{/if}