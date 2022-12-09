import React, { Component } from 'react';



class CounterV1 extends Component {

    render() {

        

    return <div className="ltn__counterup-area section-bg-1 pt-120 pb-70">
			  <div className="container">
			    <div className="row">
			      <div className="col-md-3 col-sm-6 align-self-center">
			        <div className="ltn__counterup-item text-color-white---">
			          <div className="counter-icon">
			            <i className="flaticon-select" />
			          </div>
			          <h1><span className="counter">10</span><span className="counterUp-icon">+</span> </h1>
			          <h6>Acres</h6>
			        </div>
			      </div>
			      <div className="col-md-3 col-sm-6 align-self-center">
			        <div className="ltn__counterup-item text-color-white---">
			          <div className="counter-icon">
			            <i className="flaticon-office" />
			          </div>
			          <h1><span className="counter">30</span><span className="counterUp-letter"></span><span className="counterUp-icon">+</span> </h1>
			          <h6>Floors</h6>
			        </div>
			      </div>
			      <div className="col-md-3 col-sm-6 align-self-center">
			        <div className="ltn__counterup-item text-color-white---">
			          <div className="counter-icon">
			            <i className="flaticon-excavator" />
			          </div>
			          <h1><span className="counter">6</span><span className="counterUp-icon">+</span> </h1>
			          <h6>Towers</h6>
			        </div>
			      </div>
			      <div className="col-md-3 col-sm-6 align-self-center">
			        <div className="ltn__counterup-item text-color-white---">
			          <div className="counter-icon">
			            <i className="flaticon-armchair" />
			          </div>
			          <h1><span className="counter">686</span><span className="counterUp-icon">+</span> </h1>
			          <h6>Units</h6>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default CounterV1