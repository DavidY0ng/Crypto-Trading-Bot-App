<script>
    const deposits = [ 
        {
            id: "1",
            currency: "USDT",
            amount: "113.232",
            date: "2024-03-07 14:14:14",
            status: "Completed",
            network: "bsc",
            txid: "1231092ubsfkshfkdsjhkew"
        },
        {
            id: "2",
            currency: "USDT",
            amount: "200",
            date: "2024-03-07 14:14:14",
            status: "Completed",
            network: "bsc",
            txid: "1231092ubsfkshfkdsjhkew"
        },
        {
            id: "3",
            currency: "USDT",
            amount: "300",
            date: "2024-03-07 14:14:14",
            status: "Rejected",
            network: "bsc",
            txid: "1231092ubsfkshfkdsjhkew"
        },
    ]
</script>

{#each deposits as data}
<a class="flex flex-col gap-1 p-3 border-b border-gray-100" href='/profile/transaction-history/deposit-details?{data.id}'>
    <div class="flex justify-between text-sm font-semibold">
        <div>
            {data.currency}
        </div>
    
        <div class="text-green-500">
            +{data.amount}
        </div>
    </div>
    
    
    <div class="flex justify-between text-xs text-gray-400">
        <div>
            {data.date}
        </div>
        <div>
            {data.status}
        </div>
    </div>
</a>
{/each}

<div class="flex justify-center p-3">
    <div class="text-sm text-gray-400">
        No more data
    </div>
</div>

