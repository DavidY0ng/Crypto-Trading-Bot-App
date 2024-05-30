<script lang="ts">
	import { t } from '$lib/i18n';
	import { apiWithToken } from '$lib/utils/http';
	import { RecursiveTreeView } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import Tree from '$lib/components/Tree.svelte';
	import DATA from './data.json';
	import Icon from "@iconify/svelte";
	import { truncateString } from "$lib/utils/helper";

	let expanded:any = {};

	function toggleExpand(id) {
		expanded[id] = !expanded[id];
	}
</script>

<div class="flex flex-col">
	<div class="flex flex-col">
		{#each DATA as data}
			<div>
				<!-- level 1 -->
				<div class="w-full pb-3 ">
					<div class="flex items-start ">
						{#if data.children.length > 0}
							<button on:click={() => toggleExpand(data.id)} class="flex items-center justify-center text-[20px] font-bold rounded-full pr-1">
								<Icon icon={expanded[data.id] ? "ic:round-expand-less" : "ic:baseline-expand-more"} width="1.2em" height="1.2em" />
							</button>
						{/if}
						
						<div class="{data.children.length == 0 ? 'pl-[27px]' : ''} w-full card flex gap-1 justify-between">
							<div >
								{truncateString(data.address, 10,10)}
							</div>

							<div class="flex items-center px-1 text-success-500 {data.membership == '0' ? "hidden" : ''} ">
								<Icon icon="pajamas:profile" width="1.2em" height="1.2em" />
							</div>
							
							
						</div>
						
					</div>
				</div>
				
				<!-- level 2 -->
				{#if expanded[data.id]}
					{#each data.children as child1}
						<div class="ml-5">
							<div class="w-full pb-3 ">
								<div class="flex items-center ">
									{#if child1.children.length > 0}
									<button on:click={() => toggleExpand(child1.id)} class="flex items-center justify-center text-[20px] font-bold rounded-full pr-1">
										<Icon icon={expanded[child1.id] ? "ic:round-expand-less" : "ic:baseline-expand-more"} width="1.2em" height="1.2em" />
									</button>
									{/if}
									<div class="{child1.children.length == 0 ? 'ml-[27px]' : ''} w-full card flex gap-1 justify-between">
										<div >
											{truncateString(child1.address, 10,10)}
										</div>
										<div class="flex items-center px-1 text-success-500 {child1.membership == '0' ? "hidden" : ''}">
											<Icon icon="pajamas:profile" width="1.2em" height="1.2em" />
										</div>
										
									</div>
								</div>
							</div>
	
							<!-- level 3 -->
							{#if expanded[child1.id]}
								{#each child1.children as child2}
									<div class="ml-5">
										<div class="w-full pb-3 ">
											<div class="flex items-center ">
												{#if child2.children.length > 0}
												<button on:click={() => toggleExpand(child2.id)} class="flex items-center justify-center text-[20px] font-bold rounded-full pr-1">
													<Icon icon={expanded[child2.id] ? "ic:round-expand-less" : "ic:baseline-expand-more"} width="1.2em" height="1.2em" />
												</button>
												{/if}
												<div class="{child2.children.length == 0 ? 'ml-[27px]' : ''} card w-full flex gap-1 justify-between">
													<div >
														{truncateString(child2.address, 10,10)}
													</div>
													<div class="flex items-center px-1 text-success-500 {child2.membership == '0' ? "hidden" : ''}">
														<Icon icon="pajamas:profile" width="1.2em" height="1.2em" />
													</div>
													
												</div>
											</div>
										</div>
									</div>
								{/each}
							{/if}
						</div>
					{/each}
				{/if}
			</div>
		{/each}
	</div>
	
</div>


<style>
	.ml-4 {
		margin-left: 1rem;
	}
	.card {
		padding: 1rem;
		margin-bottom: 1rem;
	}
</style>
