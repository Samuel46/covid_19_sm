import React from 'react'

export const Help = () => {
    return (
        <div>
            {/*---------appointment-------------*/}
           {/*---------appointment-------------*/}
           <section className="appointment type_one pdt_30  ">
        <div className="container">
          <div className="row">
            {/*-------row---------*/}
            <div className="col-lg-6">
              {/*----col-----*/}
              <div className="heading tp_one">
                <h1>Need Heep? </h1>
                <img src="assets/image/twitter-pic.jpg" className="img-fluid" alt="img" />
              </div>
              <div className="appointment_form pdb_90">
                <p className="covid-19">
                </p><h2>#stayathome</h2>
                Coronavirus disease 2019 (COVID-19) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2. The disease was first identified in 2019 in Wuhan, the capital of Hubei, China, and has since spread globally, resulting in the 2019–2020 coronavirus pandemic. Common symptoms include fever, cough, and shortness of breath.
                <p />
              </div>
              {/*----col-ebd-----*/}
            </div>
            <div className="col-lg-6">
              {/*----col-----*/}
              <div className="image_box">
                <img src="assets/image/main-slider/slider--graphic-2-1.png" className="img-fluid" alt="img" />
              </div>
              {/*----col-ebd-----*/}
            </div>
            {/*--------row-end--------*/}
          </div>
        </div>
      </section>
      {/*---------appointment-end------------*/}
        </div>
    )
}
 export default Help;