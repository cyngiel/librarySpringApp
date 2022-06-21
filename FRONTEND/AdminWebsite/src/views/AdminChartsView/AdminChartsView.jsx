import { useState } from 'react';
import { useEffect } from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import styles from './AdminChartsView.module.scss';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const AdminChartsView = () => {
	const [chartData, setChartData] = useState([
		{
			author: '',
			book_id: 0,
			borrowedItemsCount: 0,
			category: 'Fantasy',
			items: 0,
			reservedItemsCount: 0,
			stockItemsCount: 0,
			title: '',
		},
	]);

	useEffect(() => {
		(async () => {
			const res = await fetch('http://localhost:8080/book/all', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('Authorization')}`,
				},
			});
			const data = await res.json();
			setChartData(data);
		})();
	}, []);

	if (chartData.length > 0) {
		console.log(chartData);
		console.log(chartData[0].items);
		console.log(chartData[0].stockItemsCount);
		console.log(chartData[0].reservedItemsCount);
		console.log(chartData[0].borrowedItemsCount);
	}

	return (
		<>
			<h2 className={styles.title}>Status of books in the library </h2>
			<div className={styles.barChart}>
				{chartData.length > 0 ? (
					chartData.map((book) => (
						<div className={styles.internalTable} key={book.book_id}>
							<Bar
								data={{
									labels: ['stock', 'reserved', 'borrowed'],
									datasets: [
										{
											label: book.title,
											data: [
												book.stockItemsCount,
												book.reservedItemsCount,
												book.borrowedItemsCount,
											],
											backgroundColor: ['#FFF'],
											borderColor: ['rgba(0,0,0,1)'],
										},
									],
								}}
								options={{
									responsive: true,
									maintainAspectRatio: false,
									scales: {
										yAxes: {
											grid: {
												drawBorder: true,
												color: '#FFFFFF',
											},
											ticks: {
												beginAtZero: true,
												color: 'white',
												fontSize: 12,
											},
										},
										xAxes: {
											grid: {
												drawBorder: true,
												color: '#FFFFFF',
											},
											ticks: {
												beginAtZero: true,
												color: 'white',
												fontSize: 12,
											},
										},
									},
								}}
								height={'400px'}
								width={'30%'}
							/>
						</div>
					))
				) : (
					<h3>Empty</h3>
				)}
			</div>
		</>
	);
};
