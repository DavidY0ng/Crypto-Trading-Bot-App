<script lang="ts">
	import { t } from '$lib/i18n';
	import { apiWithToken } from '$lib/utils/http';
	import { RecursiveTreeView } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import Tree from '$lib/components/Tree.svelte';
	import DATA from './data.json';
	import Icon from "@iconify/svelte";
	import { truncateString } from "$lib/utils/helper";

	let treeViewNodes: any = [
		{
			id: '1',
			lead: Tree,
			leadProps: {
				data: 'hello asdas',
				tag: 'Member'
			},

			children: [
				{
					id: '2',
					lead: Tree,
					leadProps: {
						data: 'hello1 ',
						profit: '321'
					},
					children: []
				},
				{
					id: '3',
					// content: "hello",
					lead: Tree,
					leadProps: {
						data: 'hello2 ',
						profit: '321'
					},
					children: [
						{
							id: '5',
							// content: "hello",
							lead: Tree,
							leadProps: {
								data: 'hello3 ',
								profit: '321'
							},
							children: []
						}
					]
				}
			]
		},
		{
			id: '4',
			lead: Tree,
			leadProps: {
				data: 'hello ',
				profit: '32sss1'
			},
			children: []
		}
	];
	let count: any;

	// const fetchChildren = async (id: any, parentNode: any) => {
	// 	try {
	// 		const resp = await apiWithToken('GET', '/team/downline', { user_id: id });
	// 		if (resp.success) {
	// 			const children = resp.data.map((child: any) => ({
	// 				id: child.user_id,
	// 				content: child.address,
	// 				lead: "hello",
	// 				children: []
	// 			}));

	// 			parentNode.children = children;

	// 			for (const child of children) {
	// 				await fetchChildren(child.id, child);
	// 			}
	// 		}
	// 	} catch (error) {
	// 		throw false;
	// 	}
	// };

	// const getDownLine = async () => {
	// 	try {
	// 		const resp = await apiWithToken('GET', '/team/downline');
	// 		if (resp.success) {
	// 			const firstNode = {
	// 				id: resp.data[0].user_id,
	// 				content: resp.data[0].address,
	// 				lead: resp.data[0].active_package === 0 ? Sad : Smiley,
	// 				children: []
	// 			};
	// 			treeViewNodes.push(firstNode);
	// 			await fetchChildren(firstNode.id, firstNode);
	// 		}
	// 	} catch (error) {
	// 		throw false;
	// 	}
	// };

	// const getDownLineCount = async () => {
	// 	let resp = await apiWithToken('GET', '/team/downlineInfo');
	// 	if (resp.success) {
	// 		count = resp.data.count;
	// 	} else {
	// 	}
	// };

	// onMount(async () => {
	// 	await getDownLine();
	// 	getDownLineCount();
	// 	treeViewNodes = treeViewNodes;
	// });

	let expanded:any = {};

	function toggleExpand(id) {
		expanded[id] = !expanded[id];
	}
</script>

<div class="flex flex-col items-center w-full p-3">
	<div class="flex flex-col items-center w-full lg:w-[50%] space-y-10 lg:space-y-5 xl:mt-10">
		<div class="w-full space-y-5">
			<div class="w-full">
				<div class="flex items-center gap-x-2">
					<p class="text-xl">
						{$t('profile.affiliate.your_downline.title')}
						({count | 0})
					</p>
				</div>
				<p class="text-[--font-gray-color] text-xs">
					{$t('profile.affiliate.your_downline.desc')}
				</p>
			</div>
			{#if treeViewNodes}
				<div class="flex justify-between flex-grow card">
					<RecursiveTreeView nodes={treeViewNodes} hover="hover-none" hyphenOpacity="opacity-50" />
				</div>
			{:else}
				<div class="w-full placeholder animate-pulse"></div>
			{/if}
		</div>
	</div>
</div>


<div class="flex flex-col p-3">
	<div class="flex flex-col card">
		{#each DATA as data}
			<div>
				<!-- level 1 -->
				<div class="pb-3 w-[260px]">
					<div class="flex items-start ">
						{#if data.children.length > 0}
							<button on:click={() => toggleExpand(data.id)} class="flex items-center justify-center text-[20px] font-bold rounded-full pr-1">
								<Icon icon={expanded[data.id] ? "ic:round-expand-less" : "ic:baseline-expand-more"} width="1.2em" height="1.2em" />
							</button>
						{/if}
						
						<div class="{data.children.length == 0 ? 'pl-[27px]' : ''} w-full">
							<div >
								{truncateString(data.address, 13,13)}
							</div>
							<div class="flex justify-between">
								<div>
									<span class="text-sm text-gray-400">SN: </span>{data.sn}
								</div>
								<div class="flex items-center px-1 text-xs text-green-500 rounded-sm bg-green-500/40 {data.membership == '0' ? "hidden" : ''}">
									Members
								</div>
							</div>
							
						</div>
						
					</div>
				</div>
				
				<!-- level 2 -->
				{#if expanded[data.id]}
					{#each data.children as child1}
						<div class="ml-5">
							<div class="pb-3 w-[255px]">
								<div class="flex items-center ">
									{#if child1.children.length > 0}
									<button on:click={() => toggleExpand(child1.id)} class="flex items-center justify-center text-[20px] font-bold rounded-full pr-1">
										<Icon icon={expanded[child1.id] ? "ic:round-expand-less" : "ic:baseline-expand-more"} width="1.2em" height="1.2em" />
									</button>
									{/if}
									<div class="{child1.children.length == 0 ? 'pl-[27px]' : ''} w-full">
										<div >
											{truncateString(child1.address, 13,13)}
										</div>
										<div class="flex justify-between">
											<div>
												<span class="text-sm text-gray-400">SN: </span>{child1.sn}
											</div>
											<div class="flex items-center px-1 text-xs text-green-500 rounded-sm bg-green-500/40 {child1.membership == '0' ? "hidden" : ''}">
												Members
											</div>
										</div>
										
									</div>
								</div>
							</div>
	
							<!-- level 3 -->
							{#if expanded[child1.id]}
								{#each child1.children as child2}
									<div class="ml-5">
										<div class="pb-3 w-[255px]">
											<div class="flex items-center ">
												{#if child2.children.length > 0}
												<button on:click={() => toggleExpand(child2.id)} class="flex items-center justify-center text-[20px] font-bold rounded-full pr-1">
													<Icon icon={expanded[child2.id] ? "ic:round-expand-less" : "ic:baseline-expand-more"} width="1.2em" height="1.2em" />
												</button>
												{/if}
												<div class="{child2.children.length == 0 ? 'pl-[27px]' : ''} w-full">
													<div >
														{truncateString(child2.address, 13,13)}
													</div>
													<div class="flex justify-between">
														<div>
															<span class="text-sm text-gray-400">SN: </span>{child2.sn}
														</div>
														<div class="flex items-center px-1 text-xs text-green-500 rounded-sm bg-green-500/40 {child2.membership == '0' ? "hidden" : ''}">
															Members
														</div>
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
		border: 1px solid #ccc;
		padding: 1rem;
		margin-bottom: 1rem;
	}
</style>
