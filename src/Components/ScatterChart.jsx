import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

export const scatterOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Scatter Chart Example',
        },
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'X Axis',
            },
        },
        y: {
            title: {
                display: true,
                text: 'Y Axis',
            },
        },
    },
};

export const scatterData = {
    datasets: [
        {
            label: 'Dataset 1',
            data: [
                { x: 10, y: 20 },
                { x: 20, y: 10 },
                { x: 30, y: 40 },
                { x: 40, y: 30 },
            ],
            backgroundColor: 'rgb(255, 99, 132)',
        },
        {
            label: 'Dataset 2',
            data: [
                { x: 15, y: 25 },
                { x: 25, y: 15 },
                { x: 35, y: 45 },
                { x: 45, y: 35 },
            ],
            backgroundColor: 'rgb(54, 162, 235)',
        },
    ],
};

function ScatterChart() {
    return (
        <div className="col-11 p-5 ">
           
            <Scatter options={scatterOptions} data={scatterData} />
        </div>
    );
}

export default ScatterChart;
