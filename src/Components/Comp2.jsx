import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(249, 51, 94)',
                'rgb(34, 158, 240)',
                'rgb(247, 192, 52)',
                'rgb(58, 222, 222)',
                'rgb(91, 31, 213)',
                'rgb(243, 141, 38)',
            ],
            borderWidth: 1,
        },
    ],
};

function Comp2() {
    return (
        <section className="row justify-content-center container-fluid">
            <div className='col-12 ms-4'>
                <Doughnut data={data} />
            </div>
        </section>
    );
}

export default Comp2;