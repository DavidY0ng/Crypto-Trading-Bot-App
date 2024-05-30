<script lang='ts'>
    import { getTransferHistory,fetchHistory, transferHistory } from "$lib/stores/store";
    import { onMount } from "svelte";
	import { get } from "svelte/store";
    import { short_number_format } from "$lib/utils/helper";

    let page = 1
    let observer: IntersectionObserver;

    onMount(async () => {
        await fetchHistory('transfer', page);
        createObserver();
    })

    async function loadMoreData() {
        page++;
        const res = await getTransferHistory(page);
        if (res.length === 0) {
            observer.disconnect();
        }
    }

    function createObserver() {
        const sentinel = document.querySelector('#sentinel');
        if (sentinel) {
            observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        loadMoreData();
                    }
                });
            }, { threshold: 1.0 });

            observer.observe(sentinel);
        } else {
            console.error('Sentinel element not found');
        }
    }
</script>

{#if $transferHistory.length > 0}
    {#each $transferHistory as data}
        <a class="flex flex-col gap-1 p-3 border-b border-gray-100" href='/profile/transaction-history/withdrawal-details?sn={data.sn}'>
            <div class="flex justify-between text-sm font-semibold">
                <div>
                    {data.assets}
                </div>
            
                <div class="">
                    -{short_number_format(data.amount)}
                </div>
            </div>
            
            <div class="flex justify-between text-xs text-gray-400">
                <div>
                    {data.created_at}
                </div>
                <div class="capitalize">
                    {data.from_wallet} > {data.to_wallet}
                </div>
            </div>
        </a>
    {/each}
    
{/if}
<div id="sentinel" class="flex flex-grow"></div>

<div class="flex justify-center p-3">
    <div class="text-sm text-gray-400">
        No more data
    </div>
</div>