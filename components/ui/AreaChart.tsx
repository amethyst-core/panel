"use client";
import {
	Chart,
	LineController,
	LineElement,
	PointElement,
	LinearScale,
	CategoryScale,
	Filler,
	Tooltip,
} from "chart.js";
import { useEffect, useRef } from "react";

Chart.register(
	LineController,
	LineElement,
	PointElement,
	LinearScale,
	CategoryScale,
	Filler,
	Tooltip,
);

interface AreaChartProps {
	theme: "light" | "dark";
}

const AreaChart: React.FC<AreaChartProps> = ({ theme }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const chartRef = useRef<Chart | null>(null);

	useEffect(() => {
		if (canvasRef.current) {
			if (chartRef.current) chartRef.current.destroy();

			const dataset1BackgroundColor =
				theme === "dark"
					? "rgba(200, 200, 200, 0.2)"
					: "rgba(173, 216, 230, 0.2)";
			const dataset1BorderColor =
				theme === "dark" ? "rgba(200, 200, 200, 1)" : "rgba(173, 216, 230, 1)";

			const dataset2BackgroundColor =
				theme === "dark"
					? "rgba(175, 153, 234, .2)"
					: "rgba(144, 238, 144, 0.2)";
			const dataset2BorderColor =
				theme === "dark" ? "rgba(175, 153, 234, 1)" : "rgba(144, 238, 144, 1)";
			const dataset3BorderColor =
				theme === "dark" ? "rgba(175, 153, 234, 1)" : "rgba(144, 238, 144, 1)";
			const dataset3BackgroundColor =
				theme === "dark"
					? "rgba(200, 200, 200, 0.2)"
					: "rgba(173, 216, 230, 0.2)";

			chartRef.current = new Chart(canvasRef.current, {
				type: "line",
				data: {
					labels: ["January", "February", "March", "April"],
					datasets: [
						{
							label: "My First Dataset",
							data: [65, 59, 80, 81],
							fill: true,
							backgroundColor: dataset1BackgroundColor,
							borderColor: dataset1BorderColor,
							tension: 0.4,
						},
						{
							label: "My Second Dataset",
							data: [55, 49, 70, 71],
							fill: true,
							backgroundColor: dataset2BackgroundColor,
							borderColor: dataset2BorderColor,
							tension: 0.4,
						},
						{
							label: "My 3rd Dataset",
							data: [55, 100, 70, 10],
							fill: true,
							backgroundColor: dataset3BackgroundColor,
							borderColor: dataset3BorderColor,
							tension: 0.4,
						},
					],
				},
				options: {
					scales: {
						x: { beginAtZero: true },
						y: { beginAtZero: true },
					},
					plugins: {
						tooltip: {
							callbacks: {
								label: (tooltipItem) => {
									return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
								},
							},
						},
					},
				},
			});
		}

		return () => {
			chartRef.current?.destroy();
		};
	}, [theme]);

	return <canvas ref={canvasRef} />;
};

export default AreaChart;
