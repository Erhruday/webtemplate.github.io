import React, { useState } from 'react';
import workAPI from './API/workAPI';

function HowItWorks() {
    const [workData, setWorkData] = useState(workAPI);
    console.log(workData);
    return (
        <>
            <section>
                <div className="container work-container ">
                    <h1 className="main-heading text-center">How It Works</h1>
                    <div className="row">
                        {workData.map((element) => {
                            const { id, logo, title, info } = element;
                            return (
                                <>
                                    <div className="col-12 col-lg-4 text-center work-container-subdiv">
                                        <i class={`fontawesome-style ${logo}`}></i>
                                        <h2 className="sub-Heading">{title}</h2>
                                        <p className="main_para w-100">{info}</p>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default HowItWorks;
