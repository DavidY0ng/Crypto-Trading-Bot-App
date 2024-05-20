<script>
    import { Pulse, Chasing, Shadow, Stretch, SyncLoader } from 'svelte-loading-spinners';
</script>

<div class="full-page-spinner">
    <SyncLoader color="#00ccff"/>
</div>

<style>
    .full-page-spinner {
  position: fixed; /* Ensures the spinner stays on top of other content */
  top: 0;
  left: 0;
  right: 0;
  width: 100vw; /* Covers entire viewport width */
  height: 100vh; /* Covers entire viewport height */
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  display: flex; /* Allows centering the spinner content */
  justify-content: center; /* Centers the spinner horizontally */
  align-items: center; /* Centers the spinner vertically */
  z-index: 10000000;
}
</style>