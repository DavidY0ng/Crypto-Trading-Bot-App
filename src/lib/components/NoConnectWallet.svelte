<script>
	import { goto } from "$app/navigation";
	import { t } from "$lib/i18n";


	import Icon from "@iconify/svelte";

</script>
<div class="flex flex-col items-center justify-center flex-grow p-5 bg-white">
    <div class="pb-5 text-primary-500">
        <Icon icon="logos:metamask-icon" width="100" />
    </div>
    
    <div class="text-lg font-semibold text-center">Please connect your wallet</div>
    <a class="mt-2 text-white bg-primary-500 btn" href='/'>Connect</a>
</div>