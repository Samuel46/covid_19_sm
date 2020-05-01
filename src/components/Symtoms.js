import React from 'react'

export const Symtoms = () => {
    return (
        <div>
                  {/*---------symptoms-------------*/}
      <section className="symptoms type_one pdt_30  pdb_30" id="symptoms">
        <div className="container">
          <div className="row">
            {/*-------row---------*/}
            <div className="col-lg-12 col-md-12">
              {/*-------col---------*/}
              <div className="heading text-center tp_one">
               
                <h1>What are Symptoms of COVID-19?</h1>
                <p> COVID-19 typically causes flu-like symptoms including a fever and cough.<br className="md_display_none" /> In some patients - particularly the elderly and others with other chronic health conditions - these<br className="md_display_none" />                                    symptoms can develop into pneumonia, with chest tightness, chest pain, and shortness of breath.
                </p>
              </div>
              {/*-------col-end--------*/}
            </div>
            {/*--------row-end--------*/}
          </div>
          <div className="row">
            {/*-------row---------*/}
            <div className="col-lg-12 padding_zero">
              <div className="owl-carousel four_items">
                {/*-------symptoms_box---------*/}
                <div className="symptoms_box type_one wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                  <div className="image_box">
                    <img src="assets/image/resources/symptoms-1-1.png" className="img-fluid" alt="img" />
                  </div>
                  <div className="content_box">
                   
                    <p> Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a fever until your temperature reaches at least 39°C.</p>
                  </div>
                </div>
                {/*-------symptoms_box-end--------*/}
                {/*-------symptoms_box---------*/}
                <div className="symptoms_box type_one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="image_box">
                    <img src="assets/image/resources/symptoms-1-2.png" className="img-fluid" alt="img" />
                  </div>
                  <div className="content_box">
                    
                    <p> Coughing is another key symptom, but it's not just any cough, said Schaffner. It should be a dry cough that you feel in your chest.</p>
                  </div>
                </div>
                {/*-------symptoms_box-end--------*/}
                {/*-------symptoms_box---------*/}
                <div className="symptoms_box type_one wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                  <div className="image_box">
                    <img src="assets/image/resources/symptoms-1-3.png" className="img-fluid" alt="img" />
                  </div>
                  <div className="content_box">
                    
                    <p> You feel hot to touch on your chest or back It is a common sign and also may appear in 2-10 days if you affected.</p>
                  </div>
                </div>
                {/*-------symptoms_box-end--------*/}
                {/*-------symptoms_box---------*/}
                <div className="symptoms_box type_one wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="image_box">
                    <img src="assets/image/resources/symptoms-1-4.png" className="img-fluid" alt="img" />
                  </div>
                  <div className="content_box">
                   
                    <p> Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing or shortness of breath. </p>
                  </div>
                </div>
                {/*-------symptoms_box-end--------*/}
              </div>
            </div>
            {/*--------row-end--------*/}
          </div>
          <div className="row">
            {/*-------row---------*/}
           
            {/*--------row-end--------*/}
          </div>
        </div>
      </section>
      {/*---------symptoms-end------------*/}
        </div>
    )
}

export default Symtoms;
