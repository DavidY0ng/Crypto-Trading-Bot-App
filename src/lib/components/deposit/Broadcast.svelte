<script lang="ts">
	import { t } from '$lib/i18n';
	import Spinner from '$lib/components/Spinner.svelte';
	import { broadcastState, sendTransaction } from '$lib/utils/wallet';
	import { depositCurrentPageInfo } from '$lib/stores/store';
	import { Pulse, Chasing, Shadow, Stretch, SyncLoader } from 'svelte-loading-spinners';
	import { createEventDispatcher, onMount } from 'svelte';
	import { apiWithToken } from '$lib/utils/http';
	import type { GetBlockNumberErrorType } from 'viem';
	import { showToast } from '../toasts/toast';

    const dispatch = createEventDispatcher();

    function goBack() {
        dispatch('goBack');
    }

    function goSuccess() {
        dispatch('goSuccess');
    }

	const onBroadcast = async () => {
		try {
			let txid = await sendTransaction(
				$depositCurrentPageInfo.amount,
				'usdt',
				$depositCurrentPageInfo.token_address,
				"0x604A38dD7271F7756D9C50a587C7017dbBf9F17B"
			);
			if (txid) {
				let resp = await apiWithToken('POST', '/transaction/deposit', {
					sn: $depositCurrentPageInfo.sn,
					txid: txid.txid
				});
                goSuccess()
				console.log(resp);
			}
		} catch (e) {
			const error: any = e as GetBlockNumberErrorType;
			let length = error.shortMessage.split(':').length;
			if (error.name == 'TransactionExecutionError') {
				showToast($t('common.toast.transaction_rejected'), 'red');
				// handleProgress(-1);
                goBack()
			} else if (error.name == 'ContractFunctionExecutionError') {
				if (error.details === 'gas required exceeds allowance (0)') {
					showToast($t('common.toast.gas_fee_not_enough'), 'red');
				} else {
					showToast($t(`common.toast.${error.shortMessage.split(':')[length - 1].trim()}`), 'red');
				}
				// handleProgress(-1);
                goBack()
			}
		}
	};

	onMount(() => {
		onBroadcast();
	});
</script>

<div class="flex flex-col gap-5 p-5 card">
	<div class="flex flex-col items-center justify-center h-[50vh]">
		<p class="text-lg font-medium text-center">{$t(`deposit.${$broadcastState}`)}</p>
		<p class="text-center text-gray-400">
			{$t('deposit.Please avoid refreshing the page or clicking any buttons')}
		</p>
		<div class="flex items-center justify-center w-full">
			<SyncLoader color="#00ccff" />
		</div>
	</div>
</div>
