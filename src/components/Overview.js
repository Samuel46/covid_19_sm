
import React,{ useEffect, useState } from 'react';
import CountUp from "react-countup";
import axios from 'axios'
export const Overview = () => {

  const [overview, setOverview] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");


useEffect(()=>{
   axios
      .get("https://corona.lmao.ninja/v2/countries")
      .then(res => {
         setOverview(res.data);
      })
      .catch(err => {
         console.log(err);
      })
},[])


const filterCountries = overview.filter(item =>{
  return searchCountries !== "" ? item.country.toLowerCase().includes(searchCountries): item;
})


  return (
   

  
    <div>
       {/*---------interactive_map-end------------*/}
      {/*---------overall_deatils table-------------*/}
      <section className="overall_deatils type_one pdt_50  pdb_70">
        <div className="container">
            {/* search input */}
      <div className="row">
        {/*-------row---------*/}
        <div className="col-lg-6 col-md-12">
          {/*-------col---------*/}
          <div className="heading tp_one">
            <h6>Have questions? Find answers!</h6>
            <h1>Daily Report on COVID-19</h1>
          </div>
          {/*-------col-end--------*/}
        </div>
        <div className="col-lg-6 col-md-12">
          {/*-------col---------*/}
          <div className="search_box tp_one">
            <form
            type="text"
            onChange={e => setSearchCountries(e.target.value)}
            >
              <div className="form_group">
                <input type="text" placeholder="Type your Country here..." />
                <button className="search_btn" type="submit">Search...</button>
              </div>
            </form>
          </div>
          {/*-------col-end--------*/}
        </div>
        {/*--------row-end--------*/}
      </div>
          <div className="row">
            {/*-------row---------*/}
            <div className="col-lg-12 col-md-12">
              {/*-------col---------*/}
             
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
                      { filterCountries.map((data, i) => (
                      <tbody key={i}>
                       
  
    
    <tr >

  <td>                        
                              {data.country}
                            
                         
</td>
  <td>                      
                            {data.country}
                             
                            
                            </td>
  <td>                       <CountUp
                              start={0}
                              end={data.cases}
                              duration={3}
                              separator=","
                            /></td>
  <td>
                            <CountUp
                              start={0}
                              end={data.todayCases}
                              duration={3}
                              separator=","
                            />
  </td>
  <td>
                             <CountUp
                              start={0}
                              end={data.deaths}
                              duration={3}
                              separator=","
                            />
  </td>
  <td>
                              +<CountUp
                              start={0}
                              end={data.todayDeaths}
                              duration={3}
                              separator=","
                            />
  </td>
  <td>
                            <CountUp
                              start={0}
                              end={data.recovered}
                              duration={3}
                              separator=","
                            />
  </td>
  <td>
                              <CountUp
                              start={0}
                              end={data.active}
                              duration={3}
                              separator=","
                            />
  </td>
  <td>
                             <CountUp
                              start={0}
                              end={data.critical}
                              duration={3}
                              separator=","
                            />
  
  </td>
  <td>
                             <CountUp
                              start={0}
                              end={data.casesPerOneMillion}
                              duration={3}
                              separator=","
                            />
  </td>
  <td>
                           <CountUp
                              start={0}
                              end={data.deathsPerOneMillion}
                              duration={3}
                              separator=","
                            />
  
  </td>
                              <td>
                              {new Date(data.updated).toDateString()}
                              </td>
                            </tr>

                      </tbody>
                          ))}
                      {/* <tfoot>
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
                      </tfoot> */}
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
