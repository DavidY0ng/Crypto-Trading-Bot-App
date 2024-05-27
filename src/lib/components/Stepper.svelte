<script lang='ts'>
    import { t } from "$lib/i18n";
    
	export let steps:String[] = [], currentActive = 1;
	let circles:any, progress:any;
	
	export const handleProgress = (stepIncrement:any) => {
		circles = document.querySelectorAll('.circle');
		if(stepIncrement == 1){
			currentActive++

			if(currentActive > circles.length) {
					currentActive = circles.length
			}
		} else {
			currentActive--

			if(currentActive < 1) {
					currentActive = 1 
			}
		}
		

    update()
	}
	
	function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
	}
	
</script>

<div class="progress-container" bind:this={circles}>
	<div class="progress" bind:this={progress}></div>
	{#each steps as step, i}
	<div class="circle {i == 0 ? 'active' : ''}" data-title={step} >{i+1}</div>
	{/each}
</div>


<style>
	.progress-container {
		display: flex;
		justify-content: space-between;
		position: relative;
		margin-bottom: 30px;
		max-width: 100%;
		width: 360px;
	}

	.progress-container::before {
		content: '';
		background-color: #747c87;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		height: 4px;
		width: 100%;
		z-index: -1;
	}

	.progress {
		background-color: #6e34db;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		height: 4px;
		width: 0%;
		z-index: -1;
		transition: 0.4s ease;
	}

	.circle {
		background-color: #fff;
		color: #999;
		border-radius: 50%;
		height: 30px;
		width: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 3px solid #747c87;
		transition: 0.4s ease;
		cursor: pointer;
	}
	
	.circle::after{
		content: attr(data-title) " ";
		position: absolute;
		bottom: 35px;
		color: black;
		transition: 0.4s ease;
	}
	
	.circle.active::after {
		color: #6e34db;
	}

	.circle.active {
		border-color: #6e34db;
	}
</style>