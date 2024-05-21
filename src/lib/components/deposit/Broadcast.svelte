<script>
	import { t } from "$lib/i18n";
    import Spinner from "$lib/components/Spinner.svelte";
    import { broadcastState } from '$lib/utils/wallet';
    import { Pulse, Chasing, Shadow, Stretch, SyncLoader } from 'svelte-loading-spinners';
</script>

<div class="flex flex-col gap-5 p-5 card">
    <div class="flex flex-col items-center justify-center h-[50vh]">
        <p class="text-lg font-medium text-center">{$t(`deposit.${$broadcastState}`)}</p>
        <p class="text-center text-gray-400">
            {$t('deposit.Please avoid refreshing the page or clicking any buttons')}
        </p>
        <div class="flex items-center justify-center w-full">
            <SyncLoader color="#00ccff"/>
        </div>
    </div>
</div>
