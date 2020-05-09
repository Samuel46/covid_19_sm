import React,{ useEffect, useState } from 'react';
import CountUp from "react-countup";
import ReactMapGL, {Marker} from 'react-map-gl'
import axios from 'axios'
const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2FtdWVsNDYiLCJhIjoiY2s5ZDI4c25nMDRmaTNucGxyeGwxbDFjeCJ9.iVfBfcZKo8BlH_RCF87yzQ'; // Set your mapbox token here

export default function Maps()  {
  const [viewport, setViewport ] = useState({
    latitude:0,
    longitude:0,
    zoom:3,
    center: [0, 20],
    width: "100vw",
    height:"100vh",
  })
  

const [results, setResults] = useState([])
 
useEffect(()=>{
   axios
      .get("https://corona.lmao.ninja/v2/countries")
      .then(res => {
         setResults(res.data);
      })
      .catch(err => {
         console.log(err);
      })
}, [])

  const countriesLocation = results.map((data, i) => {
    return (
      <Marker
       key={i}
       latitude={data.countryInfo.lat}
       longitude={data.countryInfo.long}
      
      >
                 
                     {/* Marker */}
      <div className="pin_marker_outer type_one"> 
        <div className="pin">
          <div className="pin_box">
            <h2> {data.country} </h2>
           
            <div className="grid">
                                   
                                   <div>
                                      <p>Confirmed Cases:</p>
                                   </div>
                                   <div>
                          
                          <p>
                            <CountUp
                              start={0}
                              end={data.cases}
                              duration={3}
                              separator=","
                            /></p>
                                   </div>
                                   
                                   <div>
                                      <p>Recovered:</p>
                                   </div>
                                   <div>
                                   <p>
                            <CountUp
                              start={0}
                              end={data.recovered}
                              duration={3}
                              separator=","
                            /></p>
                                   </div>
                                   <div>
                                      <p>Deaths:</p>
                                   </div>
                                   <div>
                                   <p>
                            <CountUp
                              start={0}
                              end={data.deaths}
                              duration={3}
                              separator=","
                            /></p>
                                   </div>
                              
                                 
                             
                                
                             </div>

          </div>
        </div>
      </div> 
      {/* end of marker -
*/}
                         
                           
      </Marker>
    )
  })
 



    return (
        <div>
        <div className="page_wapper">
          {/*page_wapper*/}
          <main className="main-content">
            {/*----main-content----*/}
            {/*---------interactive_map-------------*/}
            <section className=" type_one pdt_100">
              <div className="container-fluid">
                <div className="row">
                  {/*-------row---------*/}
                  <div className="col-lg-12 col-md-12">
                    {/*-------col---------*/}
                    <div className="heading text-center tp_one">
                      <h1>Real-time COVID-19 Tracking</h1>
                      <p>Confirmed Cases and Deaths by Country, Territory, or Conveyance. The coronavirus COVID-19 is affecting 200+ <br className="md_display_none" />countries and territories around the world and 2 international conveyances</p>


                      
                    </div>
                    {/*-------col-end--------*/}
                  </div>
                  {/*--------row-end--------*/}
                </div>
                <div className="row">
                  {/*-------row---------*/}
                  <div className="col-md-12">
                    {/*-------col---------*/}
                    <div>
                      <ReactMapGL
                      {...viewport}mapboxApiAccessToken={MAPBOX_TOKEN}
                      onViewportChange={(viewport) =>{setViewport(viewport)}}
                      mapStyle="mapbox://styles/mapbox/dark-v9"
                      
                      
                      >
                       {countriesLocation}
                       </ReactMapGL>
                    </div>
                    
                    {/*-------col-end--------*/}
                  </div>
                  {/*--------row-end--------*/}
                </div>
              </div>
            </section>
            {/*---------interactive_map-end------------*/}
            {/*----main-content-end---*/}
          </main>
          {/*page_wapper-end--*/}
        </div>
        {/*Scroll to top*/}
        <a href="# " id="scroll" className="default-bg " style={{display: 'inline'}}><span className="fa fa-angle-up " /></a>
      </div>
    )
}


