<script lang='ts'>
	import Icon from "@iconify/svelte";
	import { createEventDispatcher } from 'svelte';
	import { showGoogleModal } from "$lib/stores/store";
	import Toast from "./toasts/toast.svelte";

    export let modalClass = ""
	export let cross = ''

	let dialog:any; // HTMLDialogElement
	const dispatch = createEventDispatcher();

	$: if (dialog && showGoogleModal) {
		dialog.showModal();
	}
	
	// $: console.log(showModal, "current modal state")
	function closeModal() {
		if (dialog) dialog.close();
		showGoogleModal.set(false);
		dispatch('close')
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
{#if $showGoogleModal }
<dialog class="{modalClass} w-[320px]"
	bind:this={dialog}
	on:close={() => showGoogleModal.set(false)}
	on:click|self={() =>closeModal()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="z-40">
        <div class="flex justify-end text-gray-500 {cross}">
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
		background: rgba(0, 0, 0, 0.0);
		z-index: 30;
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
