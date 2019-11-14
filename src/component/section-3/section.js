import React from 'react'
import Style from '../section-3/style'
import ProgressBar from 'react-bootstrap/ProgressBar'
export default ()=>{
return (
    <>
 {/* <!-- section 4 starts here --> */}

<div class="container-fluid section4 ">
    <div className="column cc ">

        <div className="heading-portion">
            <h1>Debt Solution Finder</h1>
        </div>

        <div className="step-portion mt-4 ">
            <h3>Step 1 of 6</h3>
        </div>


          <div className="container mt-5 d-flex justify-content-center ">
          <ProgressBar>
  <ProgressBar striped animated variant="success" now={20} key={1} />
  <ProgressBar striped animated variant="warning" now={15} key={2} />
  <ProgressBar striped animated variant="danger" now={15} key={3} />
  <ProgressBar striped animated variant="success" now={15} key={4} />
  <ProgressBar striped animated variant="warning" now={15} key={5} />
  <ProgressBar striped animated variant="danger" now={20} key={6} />
</ProgressBar>
          </div>


        <div className="mt-4 steps">
        <h3>Where do you live?</h3>
        </div>   

        <div className="row d-flex mt-5">
            
            <div className="box1">
                    <p><b>England</b></p>
            </div>

            <div className="box1 ml-3">
                    <p><b>Scotland</b></p>
                </div>

                <div className="box1 ml-3">
                        <p><b>Wales</b></p>
                </div>

                <div className="box1 ml-3">
                        <p><b>Norther Ireland</b></p>
                </div>
        </div>
        
    </div>
</div>
<Style/>

    </>
);

}