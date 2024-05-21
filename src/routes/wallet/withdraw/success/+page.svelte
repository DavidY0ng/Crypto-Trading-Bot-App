<script>
    import Success from '$lib/components/Success.svelte'
    import { t } from '$lib/i18n';
    import { goto } from "$app/navigation";
</script>

<div class="flex flex-col items-center justify-center lg:h-[39vh] space-y-6">
    <div class="flex items-center justify-center w-full">
        <Success />
    </div>
    <div class="flex flex-col items-center">
        <p class="text-xl font-medium">{$t('withdraw.Submitted')}</p>
        <p class="text-center text-gray-400">
            {$t('withdraw.Your withdrawal request has been submitted !')}
        </p>
        <div class="flex justify-center w-full mt-10 gap-x-5">
            <button
                class="border border-gray-400 rounded-lg dark:border-white btn"
                on:click={() => goto(`/wallet`)}
                >{$t('withdraw.My Wallet')}</button
            >
            <button
                class="border border-gray-400 rounded-lg dark:border-white btn"
                on:click={() => goto(`/`)}>{$t('withdraw.Homepage')}</button
            >
        </div>
    </div>
</div>