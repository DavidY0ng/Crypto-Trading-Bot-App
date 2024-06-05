<script>
    export let value;
    export let max;
    export let meter;
    export let track;
    export let rounded;
    export let labelledby
    export let min;
    let fillPercent = (value / max) * 100;
</script>

<div class="flex flex-col items-center p-3 text-white bg-surface-600 rounded-xl">
    <div>
        Quantity per grid 0.0003 ETH
    </div>
    <div>
        Current price ETH/USDT = 3850.01
    </div>
</div>

<div class="relative mt-4 overflow-hidden rounded-full">
    <div
        class="progress-bar {track} rounded-full"
        data-testid="progress-bar"
        role="progressbar"
        aria-labelledby={labelledby}
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
    >
        <!-- Meter -->
        <div class="progress-bar-meter {meter} {rounded}" style="width: {fillPercent}%;"></div>
    </div>
    <div class="triangle" style="left: calc({fillPercent}% - 10px);"></div>
</div>

<style>
    .triangle {
        position: absolute;
        top: -10px; /* Adjust this to position the triangle above the progress bar */
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #04f05a; /* Match this color to the progress bar color or adjust as needed */
    }
    .progress-bar {
        height: 24px; /* Adjust as needed */
    }
    .progress-bar-meter {
        height: 100%; /* Adjust as needed */
    }
</style>
