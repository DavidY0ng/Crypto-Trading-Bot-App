<script lang='ts'>
	import Icon from "@iconify/svelte";
	import { createEventDispatcher } from 'svelte';

	export let showModal:boolean; // boolean
    export let modalClass = ""

	let dialog:any; // HTMLDialogElement
	const dispatch = createEventDispatcher();

	$: if (dialog && showModal) {
		dialog.showModal();
	}
	
	// $: console.log(showModal, "current modal state")
	function closeModal() {
		if (dialog) dialog.close();
		showModal = false;
		dispatch('close')
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
{#if showModal}
<dialog class="{modalClass} w-[300px]"
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() =>closeModal()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="">
        <div class="flex justify-end text-gray-500">
            <button on:click={closeModal} class="outline-none">
                <Icon icon="maki:cross" width="1.2em" height="1.2em" />
            </button>
        </div>
        
        <div class="flex justify-between mb-2 h3">
            <slot name="header" />
            
        </div>
		
		<slot />
		<!-- svelte-ignore a11y-autofocus -->
	</div>
</dialog>
{/if}

<style>
	dialog {
		max-width: 32em;
		border-radius: 0.5em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
		z-index: 5;
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>
