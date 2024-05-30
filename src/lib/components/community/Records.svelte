<script lang="ts">
	import { t } from '$lib/i18n';
	import { apiWithToken } from '$lib/utils/http';
	import { RecursiveTreeView } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
    import Tree from '$lib/components/Tree.svelte';
    // import DATA from './data.json'

	let treeViewNodes: any = [
    {
        id: "1",
        lead: Tree,
        leadProps: {
			data: 'hello asdas',
            tag: 'Member'
		},
       
        children: [
            {
                id: "2",
                lead: Tree,
                leadProps: {
                    data: 'hello1 ',
                    profit: '321'
                },
                children: []
            },
            {
                id: "3",
                // content: "hello",
                lead: Tree,
                leadProps: {
                    data: 'hello2 ',
                    profit: '321'
                },
                children: [
                    {
                        id: "5",
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
        id: "4",
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
</script>

<div class="flex flex-col items-center w-full p-3">
	<div class="flex flex-col items-center w-full lg:w-[50%] space-y-10 lg:space-y-5 xl:mt-10">
		<div class="w-full space-y-5">
			<div class="w-full">
				<div class="flex items-center gap-x-2">
					<p class="font-semibold">
						Your current downlines
						({count | 0})
					</p>
				</div>
				<!-- <p class="text-[--font-gray-color] text-xs">
					{$t('profile.affiliate.your_downline.desc')}
				</p> -->
			</div>
			{#if treeViewNodes}
            <div class="flex justify-between flex-grow card">
                <RecursiveTreeView nodes={treeViewNodes} hover="hover-none" hyphenOpacity="opacity-50"/>
            </div>                
				
			{:else}
				<div class="w-full placeholder animate-pulse"></div>
			{/if}
		</div>
	</div>
</div>
