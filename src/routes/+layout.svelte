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
<!-- <TopNav /> -->
<div class="h-full">
    <div class="max-w-[425px] mx-auto h-full bg-[#F3F4F6] ">
        <div class="pb-[58px]">
            <slot  />
        </div>
    
    </div>
    <div class="">
        <BottomNav />
    </div>
  
</div>


<style>
    .max-display {
        height: calc(100% - 58px);
    }
</style>