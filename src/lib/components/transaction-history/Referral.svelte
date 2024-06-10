<script lang='ts'>
    import { getReferralHistory,fetchHistory, referralHistory } from "$lib/stores/store";
    import { onMount } from "svelte";
	import { get } from "svelte/store";
    import { short_number_format } from "$lib/utils/helper";
    import { truncateString } from "$lib/utils/helper";

    let page = 1
    let observer: IntersectionObserver;

    onMount(async () => {
        await fetchHistory('referral', page);
        createObserver();
    })

    async function loadMoreData() {
        page++;
        const res = await getReferralHistory(page);
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

{#if $referralHistory.length > 0}
    {#each $referralHistory as data}
        <a class="flex flex-col gap-1 p-3 border-b border-gray-100" href='/profile/transaction-history/withdrawal-details?sn={data.sn}'>
            <div class="flex justify-between text-sm font-semibold">
                <div>
                    {truncateString(data.wallet_address,7,7)}
                </div>
            
                <div class="text-green-500">
                    +{(data.amount)}
                </div>
            </div>
            
            <div class="flex justify-between text-xs text-gray-400">
                <div>
                    {data.sn}
                </div>
                <div class="capitalize">
                    {data.created_at}
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