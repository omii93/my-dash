import { fontString } from "chart.js/helpers";
import "./Comp.css";

import React from 'react';

function Comp1() {
    return (
        <div className="container-fluid">
            {/* Pie Charts Section */}
            <section className="row justify-content-center m-3 my-5 text-center">
                <div className="col-11 col-md-3  ">
                    <div className="chart-wrapper">
                        <div className='chart' data-percent="83" id='chart1'>
                            <p className='fw-semibold fs-5'>Analytics</p>
                        </div>
                    </div>
                    <div>
                        <p className='fw-bold fs-3 percent ' >83%</p>
                    </div>
                </div>
                <div className="col-11 col-md-3 ">
                    <div className="chart-wrapper">
                        <div className="chart" data-percent="85" id='chart2'>
                            <p className='fw-semibold fs-5'>Downloads</p>
                        </div>
                    </div>
                    <div>
                        <p className='fw-bold fs-3 percent ' >85%</p>
                    </div>
                </div>
                <div className="col-11 col-md-3  ">
                    <div className="chart-wrapper">
                        <div className="chart" data-percent="75" id='chart3'>
                            <p className='fw-semibold fs-5'>DataBases</p>
                        </div>
                    </div>
                    <div>
                        <p className='fw-bold fs-3 percent ' >75%</p>
                    </div>
                </div>
                <div className="col-11 col-md-3  ">
                    <div className="chart-wrapper">
                        <div className="chart" data-percent="65" id='chart4'>
                            <p className='fw-semibold fs-5'>Working tech</p>
                        </div>
                    </div>
                    <div>
                        <p className='fw-bold fs-3 percent'>65%</p>
                    </div>
                </div>
            </section>

            {/* end of the session */}
        </div>);
};

export default Comp1;
