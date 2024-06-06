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

	ChartJS.register(Filler, Tooltip, Title, LineElement, LinearScale, PointElement, CategoryScale);
	let chartOptions = {
		responsive: true,
		scales: {
			x: {
				grid: {
					display: false // Disable vertical grid lines
				}
			},
			y: {
				grid: {
					display: true // Disable vertical grid lines
				}
			}
		}
	};

	let dataLine = {
		labels: ['14:00', '14:10', '14:20', '14:30', '14:40', '14:50', '15:00'],
		datasets: [
			{
				fill: true,
				lineTension: 0,
				backgroundColor: 'rgba(39, 197, 94, .2)',
				borderColor: '#22c55e',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: '#22c55e',
				pointBackgroundColor: 'rgb(255, 255, 255)',
				pointBorderWidth: 5,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgb(255, 255, 255)',
				pointHoverBorderColor: 'rgba(220, 220, 220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				scales: {
					xAxes: [
						{
							barPercentage: 1,
							gridLines: {
								display: false,
								color: 'rgba(0, 0, 0, 0.1)'
							}
						}
					],
					yAxes: [
						{
							gridLines: {
								display: false,
								color: 'rgba(0, 0, 0, 0.1)'
							},
							ticks: {
								beginAtZero: true
							}
						}
					]
				},
				data: [65, 59, 80, 81, 56, 55, 40]
			}
		]
	};

	onMount(() => {});
</script>

<div >
	<div class="mb-3 text-lg font-semibold">
        Daily Profit
    </div>
	<div class="flex justify-between">
		<div class="font-semibold">
			<select>
				<option>BTC/USDT</option>
				<option>ETH/USDT</option>
			</select>
		</div>
		<div class="flex gap-5 text-sm">
			<button>
				7 Days
			</button>
			<button>
				30 Days
			</button>
			<button>
				60 Days
			</button>
		</div>
	</div>
	
	<Line data={dataLine} options={chartOptions} />
</div>

