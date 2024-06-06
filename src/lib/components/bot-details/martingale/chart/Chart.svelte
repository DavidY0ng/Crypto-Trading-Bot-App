<script>
	import { Line } from 'svelte-chartjs';
	import { onMount } from 'svelte';
	import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
	Filler
  } from 'chart.js';

  ChartJS.register(
	Filler,
	Tooltip,
	Title,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
  );
  let chartOptions = {
		responsive: true,
		scales: {
			x: {
				grid: {
					display: false // Disable vertical grid lines
				}
			},
			y: {
				display: false // Disable y axis
			}
		}
	};


	let dataLine = {
		labels: ['14:00', '14:10', '14:20', '14:30', '14:40', '14:50', '15:00'],
		datasets: [
			{
				fill: true,
				lineTension: 0.3,
				backgroundColor: 'rgba(39, 197, 94, .2)',
				borderColor: '#22c55e',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgb(205, 130,1 58)',
				pointBackgroundColor: 'rgb(255, 255, 255)',
				pointBorderWidth: 0,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgb(0, 0, 0)',
				pointHoverBorderColor: 'rgba(220, 220, 220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [65, 59, 80, 81, 56, 55, 40]
			},
		]
	};

	onMount(() => {});
</script>

<Line data={dataLine} options={chartOptions} />
