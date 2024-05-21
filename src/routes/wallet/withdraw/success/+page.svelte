<script>
    import Success from '$lib/components/Success.svelte'
    import { t } from '$lib/i18n';
    import { goto } from "$app/navigation";
</script>


<div class="flex flex-col flex-grow p-3">
    <div class="flex flex-col items-center justify-center flex-grow gap-5 p-3 card">
        <div class="flex">
            <Success />
        </div>
      
        <div class="flex text-center h1">
            Withdraw request submitted
        </div>

        <div class="flex flex-row justify-between w-full gap-3">
            <div class="flex flex-1 flex-grow">
                <a class="flex flex-1 bg-gray-400 rounded-md shadow-md btn" href='/'>Return to Home</a>
            </div>
            
            <div class="flex flex-1 flex-grow">
                <a class="flex flex-1 text-white rounded-md shadow-md btn bg-primary-500" href='/wallet'>Wallet</a>
            </div>
            
        </div>
    </div>
</div>
