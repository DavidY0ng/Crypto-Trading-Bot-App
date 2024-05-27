<script>
    import Success from "$lib/components/Success.svelte";
    import { t } from "$lib/i18n";
    import { goto } from "$app/navigation";
   
</script>


<div class="flex flex-col items-center justify-center h-[50vh] space-y-6 card">
    <div class="flex items-center justify-center w-full">
        <Success />
    </div>
    <div class="flex flex-col items-center">
        <p class="text-xl font-medium">{$t('deposit.Deposit Sucessful')}</p>
        <p class="text-center text-gray-400">
            {$t('deposit.Your money has been successfully deposited to your account !')}
        </p>
        <div class="flex justify-center w-full mt-10 gap-x-5">
            <button
                class="border border-gray-400 rounded-lg dark:border-white btn"
                on:click={() => goto(`/wallet`)}
                >{$t('deposit.My Wallet')}</button
            >
            <button
                class="border border-gray-400 rounded-lg dark:border-white btn"
                on:click={() => goto(`/`)}>{$t('deposit.home')}</button
            >
        </div>
    </div>
</div>