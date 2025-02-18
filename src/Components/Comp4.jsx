import React from 'react';
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    interaction: {
        intersect: false,
    },
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Bar Chart - Multi Axis',
        },
    },
    scales: {
        y: {
            display: true,
            title: {
                display: true,
                text: 'Dataset 1',
            },
        },
        y1: {
            display: true,
            title: {
                display: true,
                text: 'Dataset 2',
            },
            grid: {
                drawOnChartArea: false, // This prevents the grid lines from overlapping with the other axis
            },
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [200, 420, 500, 360, 900, 240, 150],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgb(255, 99, 132)',
            yAxisID: 'y',
        },
        {
            label: 'Dataset 2',
            data: [600, 800, 120, 790, 200, 810, 750],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            borderColor: 'rgb(53, 162, 235)',
            yAxisID: 'y1',
        },
    ],
};

function Comp4() {
    return (
        <>
            <section className="row justify-content-center container-fluid">
                <div className="col-11 p-4  " >
                    <Bar options={options} data={data} />
                </div>
            </section>
        </>
    );
}

export default Comp4;
