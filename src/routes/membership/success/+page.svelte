<script>
    import Success from '$lib/components/Success.svelte'
</script>

<div class="flex flex-col flex-grow p-3">
    <div class="flex flex-col items-center justify-center flex-grow gap-5 p-3 card">
        <div class="flex">
            <Success />
        </div>
      
        <div class="flex text-center h1">
            Thank you for your purchase!
        </div>

        <div class="flex justify-between gap-3">
            <a class="flex bg-gray-400 rounded-md shadow-md btn" href='/'>Return to Home</a>
            <a class="flex text-white rounded-md shadow-md btn bg-primary-500" href='/membership/plans'>Manage Plan</a>
        </div>
    </div>
</div>

