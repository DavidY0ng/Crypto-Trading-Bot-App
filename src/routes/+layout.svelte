<script lang='ts'>
    import "../app.css";
    import Toast from "$lib/components/toasts/toast.svelte";
    import { initializeStores, Modal, Drawer, type ModalComponent } from '@skeletonlabs/skeleton';
    import BottomNav from "$lib/components/bottomNav/BottomNav.svelte";
    import TopNav from "$lib/components/topNav/TopNav.svelte";
    initializeStores();


</script>


<Toast />
<Drawer />
<TopNav />
<div class="max-w-[425px] mx-auto p-3 pb-[62px]">
    
    <div class="w-full">

        <slot />
        
    </div>
</div>
<BottomNav />
  