import React from 'react';
import { Pie } from 'react-chartjs-2';

const pieData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

function PieChart() {
  return (


              


//  <section className="row justify-content-center container-fluid ">
//                 <div className=' col-12 ms-4 align-items-center mt-lg-5 '>
//                 <Pie data={pieData}  />
//                 </div>
//             </section>
            <div className='mt-md-5 mt-lg-5 'hight="100px">
                               <Pie data={pieData}  />
                              </div>
    
  );
}

export default PieChart;
