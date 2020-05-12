import React from 'react'

export const Help = () => {
    return (
        <div>
            {/*---------appointment-------------*/}
      <section className="appointment type_one pdt_70  ">
        <div className="container">
          <div className="row">
            {/*-------row---------*/}
            <div className="col-lg-6">
              {/*----col-----*/}
              <div className="heading tp_one">
                <h1>Need Heep? </h1>
                <p> Fill out the form below to report a covid-19 case and our staff will<br className="md_display_none" /> contact you immediately.</p>
              </div>
              <div className="appointment_form pdb_90">
                <form  data-netlify="true">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="text" name="name" placeholder="Your name" />
                        <small className="linearicons-user" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="text" name="skype" placeholder="Your Location" />
                        <small className="fa fa-home" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="text" name="skype" placeholder="Your Country" />
                        <small className="linearicons-first-aid" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <select name="topic" id="topic">
                          <option selected="selected">Choose symtopms </option>
                          <option>Head Ache</option>
                          <option>Fever</option>
                          <option>General Checkup </option>
                          <option>Clitical Codition </option>
                        </select>
                        <small className="linearicons-bubbles" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group textarea">
                        <textarea name="message" placeholder="Additional message..." rows={4} defaultValue={""} />
                        <small className="linearicons-pencil4" />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="form-group">
                       
                      
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <button className="submit_btn" type="submit">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
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