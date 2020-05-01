import React from 'react'

export const Prevention = () => {
    return (
        <div>
             {/*---------protect-------------*/}
      <section className="protect type_one pdt_40  pdb_40 wow fadeIn" data-wow-delay="100ms" data-wow-duration="1500ms" id="protection">
        <div className="container">
          <div className="row">
            {/*-------row---------*/}
            <div className="col-lg-12 col-md-12">
              {/*-------col---------*/}
              <div className="heading text-center tp_one">
                <h6> What you need to do</h6>
                <h1>How to protect yourself?</h1>
                <p> Our actions as individuals will go a long way in preventing, detecting and isolating potential cases of <br className="md_display_none" />coronavirus and COVID-19</p>
              </div>
              {/*-------col-end--------*/}
            </div>
            {/*--------row-end--------*/}
          </div>
          <div className="row">
            {/*-------row---------*/}
            <div className="col-lg-6 col-md-12">
              {/*-------col---------*/}
              <div className="image_box">
                <img src="assets/image/resources/protect-1-1.png" className="img-fluid" alt="img" />
              </div>
              {/*-------col-end--------*/}
            </div>
            <div className="col-lg-6 col-md-12 d-flex">
              {/*-------col---------*/}
              <div className="protect_outer">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    {/*-------col---------*/}
                    <div className="protect_box type_one">
                      <div className="upper_box">
                        <span className="linearicons-checkmark-circle" />
                        <div className="text_title">
                          <h2>Things you should do</h2>
                          <p> Be sure to follow it</p>
                        </div>
                      </div>
                      <div className="lower_box">
                        <ul>
                          <li>Stay at home</li>
                          <li>Wear mask</li>
                          <li>Wash your hands</li>
                          <li>Frequent self-isolation</li>
                          <li>Frequent waterintake</li>
                        </ul>
                      </div>
                    </div>
                    {/*-------col-end--------*/}
                  </div>
                  <div className="col-lg-6 col-md-12">
                    {/*-------col---------*/}
                    <div className="protect_box type_one right">
                      <div className="upper_box">
                        <span className="linearicons-cross-circle" />
                        <div className="text_title">
                          <h2>Things you should avoid</h2>
                          <p>Be sure to avoid it</p>
                        </div>
                      </div>
                      <div className="lower_box">
                        <ul>
                          <li>Social distance</li>
                          <li>Avoid animals</li>
                          <li>Don't touch your face</li>
                          <li>Avoid handshaking</li>
                          <li>Avoid kisses</li>
                        </ul>
                      </div>
                    </div>
                    {/*-------col-end--------*/}
                  </div>
                  {/*-------col-end--------*/}
                </div>
                <div className="row">
                  {/*-------row--------*/}
                  <div className="col-lg-12">
                    {/*-------col-end--------*/}
                    <div className="text_box">
                      <h2> What does self-isolation involve?</h2>
                      <p> If you need to self-isolate, you should take action immediately. You must stay inside and avoid all contact with other people.</p>
                    
                    </div>
                    {/*-------col-end--------*/}
                  </div>
                  {/*-------row-end--------*/}
                </div>
              </div>
              {/*-------col-end--------*/}
            </div>
            {/*--------row-end--------*/}
          </div>
        </div>
      </section>
      {/*---------protect-end------------*/}
        </div>
    )
}

export default Prevention;
