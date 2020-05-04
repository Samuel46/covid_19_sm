
import React,{ useEffect, useState } from 'react';
import axios from 'axios'
export const Overview = () => {

  const [overview, setOverview] = useState([])
 
useEffect(()=>{
   axios
      .get("https://corona.lmao.ninja/v2/countries")
      .then(res => {
         setOverview(res.data);
      })
      .catch(err => {
         console.log(err);
      })
})

const overviewDetails = overview.map((data) => {
  return (
    <tr>
    <td>{data.country}</td>
  <td>{data.cases}</td>
  <td>{data.todayCases}</td>
  <td>{data.deaths}</td>
  <td>+{data.todayDeaths}</td>
  <td>{data.recovered}</td>
  <td>{data.active}</td>
  <td>{data.critical}</td>
  <td>{data.casesPerOneMillion}</td>
  <td>{data.deathsPerOneMillion}</td>
                              <td>Jan 20</td>
                            </tr>
  )
})



  return (
   

  
    <div>
       {/*---------interactive_map-end------------*/}
      {/*---------overall_deatils table-------------*/}
      <section className="overall_deatils type_one pdt_50  pdb_70">
        <div className="container">
          <div className="row">
            {/*-------row---------*/}
            <div className="col-lg-12 col-md-12">
              {/*-------col---------*/}
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Today's COVID-19 Report              </a>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <div className="table-responsive">
                    <table id="outbreaks" className="table  table-striped table-bordered" style={{width: '100%'}}>
                      <thead>
                     

                        <tr>
                          <th>Country,<br /> Other</th>
                          <th>Total<br />Cases</th>
                          <th>New<br />Cases</th>
                          <th>Total<br /> Deaths</th>
                          <th>New<br />Deaths</th>
                          <th>Total<br />Recoveres</th>
                          <th>Active<br />Cases</th>
                          <th>Serious,<br />Critical</th>
                          <th>Cases<br />/1M pop</th>
                          <th>Deaths<br /> /1M pop</th>
                          <th>Reported<br />1st case</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="total_row_world odd" role="row">
                          <td>World</td>
                          <td>781,979</td>
                          <td>+58,589</td>
                          <td>37,606</td>
                          <td>+3,541</td>
                          <td>164,753</td>
                          <td>579,620</td>
                          <td>29,590</td>
                          <td>100.3</td>
                          <td>4.8</td>
                          <td>Jan 10</td>
                        </tr>
                         {/* td row extracted */}
                          
                          {overviewDetails}

                        {/* end of td extracted */}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td>Total</td>
                          <td>781,979</td>
                          <td>+58,589</td>
                          <td>37,606</td>
                          <td>+3,541</td>
                          <td>164,753</td>
                          <td>579,620</td>
                          <td>29,590</td>
                          <td>100.3</td>
                          <td>4.8</td>
                          <td>Jan 10</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
              {/*-------col-end--------*/}
            </div>
            {/*--------row-end--------*/}
          </div>
        </div>
      </section>
      {/*---------overall_deatils-end------------*/}
    </div>
    
  )
}

export default Overview;
