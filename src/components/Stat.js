import React from "react";

import CountUp from "react-countup";

export const Stat = ({
  data: { confirmed, recovered, deaths, lastUpdate },
}) => {
  if (!confirmed) {
    return "Loading";
  }
  return (
    <div>
      <div className="page_wapper">
        {/*page_wapper*/}

        <main className="main-content">
          {/*----main-content----*/}
          {/*---------counter-------------*/}
          <section className="counter type_two">
            <div className="container">
              <div className="counter_outer_box style_two">
                <div className="row">
                  {/*-------row---------*/}
                  <div className="col-lg-2 col-md-12">
                    {/*-------col---------*/}
                    <div className="heading tp_one">
                      <h6>Worldwide Tracker</h6>
                      <h4 className="h3_color">Pandemic Statistics</h4>
                      <p>Last updated: {new Date(lastUpdate).toDateString()}</p>
                    </div>
                    {/*-------col-end--------*/}
                  </div>
                  <div className="col-lg-10 col-md-12 d-flex">
                    {/*-------col---------*/}
                    <div className="counter_box_outer">
                      <div className="counter_box type_two one">
                        <div className="image_box">
                          <img
                            src="assets/image/svg/fun-1.svg"
                            className="img-fluid"
                            alt="svg_iage"
                          />
                        </div>
                        <div className="text_box">
                          <h2>
                            <span className="odometer " />
                            <CountUp
                              start={0}
                              end={confirmed.value}
                              duration={3}
                              separator=","
                            />
                          </h2>
                          <h6>Coronavirus Cases</h6>
                        </div>
                      </div>
                      <div className="counter_box type_two two">
                        <div className="image_box">
                          <img
                            src="assets/image/svg/fun-2.svg"
                            className="img-fluid"
                            alt="svg_iage"
                          />
                        </div>
                        <div className="text_box">
                          <h2>
                            <span className="odometer " />
                            <CountUp
                              start={0}
                              end={deaths.value}
                              duration={3}
                              separator=","
                            />
                          </h2>
                          <h6>Deaths</h6>
                        </div>
                      </div>
                      <div className="counter_box type_two three">
                        <div className="image_box">
                          <img
                            src="assets/image/svg/fun-3.svg"
                            className="img-fluid"
                            alt="svg_iage"
                          />
                        </div>
                        <div className="text_box">
                          <h2>
                            <span className="odometer " />{" "}
                            <CountUp
                              start={0}
                              end={recovered.value}
                              duration={3}
                              separator=","
                            />
                          </h2>
                          <h6>Recovered</h6>
                        </div>
                      </div>
                    </div>
                    {/*-------col-end--------*/}
                  </div>
                  {/*--------row-end--------*/}
                </div>
              </div>
            </div>
          </section>
          {/*---------counter-end------------*/}
          {/*----main-content-end---*/}
        </main>
        {/*page_wapper-end--*/}
      </div>
      {/*Scroll to top*/}
      <a
        href="# "
        id="scroll"
        className="default-bg "
        style={{ display: "inline" }}
      >
        <span className="fa fa-angle-up " />
      </a>
    </div>
  );
};
export default Stat;
