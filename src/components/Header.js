import React from 'react'

export const Header = () => {
    return (
        <div>
        <div className="page_wapper">
          {/*page_wapper*/}
          {/*Start Preloader*/}
          <div className="preloader">
            <div className="preloader_box">
              <div className="loader">
                <img src="assets/image/virus-bottom.png" className="img-fluid" alt="img" />
                <p>please Wait...</p>
              </div>
            </div>
          </div>
          {/*End Preloader*/}
          <main className="main-content">
            {/*----main-content----*/}
            {/*---------page_title-------------*/}
            <section className="page_title medium  pdt_80  pdb_40">
              <div className="container">
                <div className="row">
                  {/*-------row---------*/}
                  <div className="col-lg-12 col-md-12 text-center">
                    {/*-------col---------*/}
                    <div className="content_box">
                      <h1>C<img src="assets/image/preloader.png" className="img-fluid" alt="svg_iage" />VID-19 TRACKER</h1>
                    </div>
                    {/*-------col-end--------*/}
                  </div>
                  {/*--------row-end--------*/}
                </div>
              </div>
            </section>
            {/*---------page_title-end------------*/}
            
          </main>
          {/*page_wapper-end--*/}
        </div>
        {/*Scroll to top*/}
        <a href="# " id="scroll" className="default-bg " style={{display: 'inline'}}><span className="fa fa-angle-up " /></a>
      </div>
    )
}
export default Header;