<script lang="ts">
	import { Toast, getToastStore } from '@skeletonlabs/skeleton';
	import { toastColor, toastMsg, toastState } from './toast';

	const toastStore = getToastStore();

	const appendMsg = (msg: string, color: string) => {
		
		toastStore.trigger({
			message: msg,
			background: `${
				color === 'red' ? 'bg-red-500' : color == 'green' ? 'bg-green-500' : color == 'orange' ? 'bg-warning-500' : `bg-${color}-500`
			} text-white`,
			timeout: 5000
		});
	};

	$: {
		if ($toastState) {
			appendMsg($toastMsg, $toastColor);
		}
	}
</script>

<Toast
	zIndex="z-[888]"
	position="tr"
	padding="p-2"
	buttonDismiss="bg-white btn-sm btn w-[30px] h-[30px] text-black"
	buttonDismissLabel="✕"
/>
