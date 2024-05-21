<script  lang='ts'>
	import Icon from '@iconify/svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { t } from '$lib/i18n';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let amountValue:number | null = null
	export let selectedCoin:string
	function toBroadcast() {
		dispatch('toBroadcast');
	}

	function goBack() {
		dispatch('goBack')
	}
</script>

<div class="flex flex-col gap-5 p-5 card">
	<div class="flex flex-col gap-1">
		<div class="flex text-gray-400">Selected Coin</div>
		<div class="flex items-center gap-1 font-bold">
			<Icon icon="cryptocurrency-color:usdt" width="1.2em" height="1.2em" />
			<div class="flex flex-grow">{selectedCoin}</div>
		</div>
		
	</div>

	<div class="flex flex-col gap-1">
		<div class="flex text-gray-400">Deposit Amount</div>
		<div class="font-bold">{amountValue}</div>
	</div>

	<div class="flex flex-col gap-1">
		<div class="flex text-gray-400">Network</div>
		<div class="font-bold">--</div>
	</div>

	<Accordion class="bg-gray-100 dark:bg-[--input-color] rounded-lg ">
		<AccordionItem open class="my-5">
			<svelte:fragment slot="summary"
				><p class="dark:text-[--font-color] font-medium">
					{$t('deposit.Address')}
				</p></svelte:fragment
			>
			<svelte:fragment slot="content">
				<p class="text-sm text-red-500">{$t('deposit.remark')}</p>

				<div class="my-2 address">
					<!-- <div class="lg:grid lg:grid-cols-2 gap-x-0 lg:gap-x-4"> -->
					<!-- <div
                            class="flex flex-col items-center w-full px-4 py-3 mb-4 bg-gray-300 rounded-lg shadow-inner dark:bg-gray-700 lg:flex-row lg:mb-0"
                        >
                            {#if selectedCoinSetting}
                                <div
                                    class="w-[80px] mb-2 lg:mb-0 mt-1 lg:mt-0 bg-white flex items-center justify-center"
                                >
                                    <QRCode size={80} content={selectedCoinSetting.address} />
                                </div>
                            {/if}

                            <div
                                class="flex flex-col justify-center w-full ml-0 text-center lg:w-2/3 lg:ml-4 lg:text-left"
                            >
                                <p
                                    class="dark:text-[--font-color] text-sm font-medium mb-[2px] lg:text-left"
                                >
                                    {$t('deposit.Address')}
                                </p>

                                <p
                                    class="dark:text-[--font-color] text-sm md:font-bold py-2 break-words lg:w-[90%]"
                                >
                                    {selectedCoinSetting ? selectedCoinSetting.address : '-'}
                                </p>
                            </div>
                        </div> -->

					<!-- Address Card 2 -->
					<div
						class="flex justify-center w-full h-full px-4 py-4 overflow-x-auto bg-gray-300 rounded-lg shadow-inner dark:bg-gray-700"
					>
						<table class="w-full dark:text-[--font-color] text-sm md:text-md">
							<tbody>
								<tr>
									<th class="text-left">{$t('deposit.Minimum Deposit')}</th>
									<td class="text-right">1</td>
								</tr>
								<tr>
									<th class="text-left">{$t('deposit.Confirmation')}</th>
									<td class="text-right">1</td>
								</tr>
								<tr>
									<th class="text-left">{$t('deposit.Contract Address')}</th>
									<td class="text-right">
										<!-- {#if selectedCoinSetting}
                                            <a
                                                class="underline"
                                                target="”_blank”"
                                                href={`https://bscscan.com/address/${selectedCoinSetting.token_address}`}
                                                >{truncateString(selectedCoinSetting.token_address, 5, 5)}</a
                                            >
                                        {:else}
                                            -
                                        {/if} -->
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- </div> -->
				</div>
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
	<div class="flex flex-grow gap-2">
		<button on:click={goBack} class="flex justify-center flex-1 text-white bg-gray-500 rounded-md shadow-md btn">
			Back
		</button>
		<button on:click={toBroadcast} class="flex justify-center flex-1 text-white rounded-md shadow-md btn bg-primary-500">
			Confirm
		</button>
	</div>
</div>
