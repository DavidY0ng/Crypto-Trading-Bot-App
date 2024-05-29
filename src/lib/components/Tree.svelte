<script>
    import { truncateString } from "$lib/utils/helper";
    export let address = '0xDe600b6b32aba9c01c86580F5b1Cfd90B6d91166'
    export let sn = ''
    export let tag = ''

    // let address = "0xDe600b6b32aba9c01c86580F5b1Cfd90B6d91166"
</script>

<div class="flex flex-col flex-grow w-[250px] p-3">
    <div class="flex items-center justify-between flex-grow">
        {truncateString(address,12,12)} 
    </div>
    <div class="flex items-center justify-between flex-grow">
        {sn} <span class="px-1 py-1 text-xs text-green-500 rounded-sm {tag == '' ? 'bg-transparent' : 'bg-green-500/30'}">{tag}</span>
    </div>
    
</div>