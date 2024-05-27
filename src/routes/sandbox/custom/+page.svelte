<script>
    import { onMount } from 'svelte';
    import  Icon  from '@iconify/svelte';
    let selectedOption = '';
    let showOptions = false

    const options = [
        { value: 'usdt', label: 'a', icon: 'cryptocurrency-color:usdt' }
    ];
</script>

<style>
    .custom-select {
        position: relative;
        display: inline-block;
        width: 100%;
    }

    .custom-select-trigger {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        background: white;
        border: 1px solid #ccc;
        border-radius: 5px;
        cursor: pointer;
    }

    .custom-options {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        border: 1px solid #ccc;
        background: white;
        border-radius: 5px;
        z-index: 1000;
    }

    .custom-option {
        padding: 10px;
        cursor: pointer;
    }

    .custom-option:hover {
        background: #f0f0f0;
    }
</style>

<div class="custom-select">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="custom-select-trigger" on:click={() => showOptions = !showOptions}>
        {#if selectedOption}
            {selectedOption.label} <Icon icon={selectedOption.icon} width="1.2em" height="1.2em" />
        {:else}
            Select an option
        {/if}
    </div>
    {#if showOptions}
        <div class="custom-options">
            {#each options as option}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="custom-option" on:click={() => { selectedOption = option; showOptions = false; }}>
                    {option.label} <Icon icon={option.icon} width="1.2em" height="1.2em" />
                </div>
            {/each}
        </div>
    {/if}
</div>
