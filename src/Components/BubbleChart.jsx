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
import { Bubble } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

export const bubbleOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Bubble Chart Example',
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

export const bubbleData = {
    datasets: [
        {
            label: 'Dataset 1',
            data: [
                { x: 10, y: 20, r: 15 },
                { x: 20, y: 10, r: 10 },
                { x: 30, y: 40, r: 20 },
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: [
                { x: 15, y: 25, r: 25 },
                { x: 25, y: 15, r: 20 },
                { x: 35, y: 45, r: 30 },
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
        },
    ],
};

function BubbleChart() {
    return (
        <section className="row justify-content-center container-fluidalign-items-center">
        <div className="col-11 p-5 ">
            
            <Bubble options={bubbleOptions} data={bubbleData}  />
        </div>
        </section>
    );
}

export default BubbleChart;
