<script>
    import { onMount } from 'svelte';
    import { Html5Qrcode } from 'html5-qrcode';
    import {Html5QrcodeScanner} from "html5-qrcode";

    let width
    function onScanSuccess(decodedText, decodedResult) {
        // handle the scanned code as you like, for example:
        console.log(`Code matched = ${decodedText}`, decodedResult);
    }

    function onScanFailure(error) {
        // handle scan failure, usually better to ignore and keep scanning.
        // for example:
        console.warn(`Code scan error = ${error}`);
    }

    onMount(() => {
        let html5QrcodeScanner = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: {width: 250, height: 250} },
        /* verbose= */ false);
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
    })

    
</script>

<div id="reader" class="w-full">
    
</div>