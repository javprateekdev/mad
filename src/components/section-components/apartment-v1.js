import React, { Component } from 'react';

import parse from 'html-react-parser';
import Dialog  from '../../Dialog';
import CheckPrice  from '../../CheckPrice';
import FloorPlan  from '../../FloorPlan';
class ApartmentV1 extends Component {

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'
	let CustomClass = this.props.CustomClass ? this.props.CustomClass : ''

    return <div className={"ltn__apartments-plan-area pt-115--- pb-70 "+CustomClass } id='plan'>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Apartment Sketch</h6>
			          <h1 className="section-title">Mahagun Medalleo Floor Plan</h1>
			        </div>
			        <div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center">
			          <div className="nav">
			            <a data-bs-toggle="tab" href="#liton_tab_3_1">Platinum</a>
			            <a className="active show" data-bs-toggle="tab" href="#liton_tab_3_2">Diamond</a>
			            <a data-bs-toggle="tab" href="#liton_tab_3_3" >Sapphire</a>
			            
			          </div>
			        </div>
			        <div className="tab-content">
			          <div className="tab-pane fade" id="liton_tab_3_1">
			            <div className="ltn__apartments-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-6">
			                  <div className="apartments-plan-info ltn__secondary-bg text-color-white">
			                    <h2>3 BHK</h2>
			                    <p>Entrance Foyer,3 Bed Rooms With 3 Toilets,Living & Dining Room,Kitchen,One Sky Deck,1 STR With Toilet,And Balconies.</p>
			                    <div className="apartments-info-list apartments-info-list-color mt-40">
			                      <ul>
			                        <li><label>Total Area</label> <span>2500 Sq. Ft</span></li>
			                       
			                        <li><label>Built Up Area</label> <span>1847 Sq. Ft</span></li>
			                        <li><label>Carpet Area</label> <span>1345 Sq. Ft</span></li>
			                        <li><label>Balcony Area</label> <span>414 Sq. Ft</span></li>
									
			                      </ul>
								  <div style={{marginLeft:"100px",width:"250px",marginTop:"40px"}}><CheckPrice /></div>
			                    </div>
			                  </div>
			                </div>
			                <div className="col-lg-6">
			                  <div className="apartments-plan-img">
			                    <img src={"https://i.imgur.com/VxBdSPq.jpg"} alt="#" style={{height:"550px"}} />
								<div style={{position:"relative",bottom:"300px",left:"100px"}}><FloorPlan/></div> 
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="tab-pane fade active show" id="liton_tab_3_2">
			            <div className="ltn__product-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-6">
			                  <div className="apartments-plan-info ltn__secondary-bg text-color-white">
			                    <h2>4 BHK</h2>
			                    <p>Entrance Foyer,4 Bed Rooms With 4 Toilets,Living & Dining Room,Kitchen,One Sky Deck,1 STR With Toilet,And Balconies.</p>
			                    <div className="apartments-info-list apartments-info-list-color mt-40">
								<ul>
			                        <li><label>Total Area</label> <span>3000 Sq. Ft</span></li>
			                        
			                        <li><label>Built Up Area</label> <span>1686 Sq. Ft</span></li>
			                        <li><label>Carpet Area</label> <span>1345 Sq. Ft</span></li>
			                        <li><label>Balcony Area</label> <span>545 Sq. Ft</span></li>
									
			                      </ul>
								  <div style={{marginLeft:"100px",width:"250px",marginTop:"40px"}}><CheckPrice /></div>
			                    </div>
			                  </div>
			                </div>
			                <div className="col-lg-6">
			                  <div className="apartments-plan-img">
			                    <img src={"https://i.imgur.com/VxBdSPq.jpg"} alt="#" style={{height:"550px",position:"relative"}} />
								
			                    <div style={{position:"relative",bottom:"300px",left:"120px"}}><FloorPlan/></div>
			                 
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="tab-pane fade" id="liton_tab_3_3">
			            <div className="ltn__product-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-6">
			                  <div className="apartments-plan-info ltn__secondary-bg text-color-white">
			                    <h2>4 BHK</h2>
			                    <p>Entrance Foyer,4 Bed Rooms With 4 Toilets,Powder Toilet Living & Dining Room,Family Lounge ,Kitchen,One Sky Deck,1 STR With Toilet,And Balconies.</p>
			                    <div className="apartments-info-list apartments-info-list-color mt-40">
								<ul>
			                        <li><label>Total Area</label> <span>3720 Sq. Ft</span></li>
			                        <li><label>Built Up Area</label> <span>2949 Sq. Ft</span></li>
			                        <li><label>Carpet Area</label> <span>2202 Sq. Ft</span></li>
			                        <li><label>Balcony Area</label> <span>656 Sq. Ft</span></li>
									
			                      </ul>
								  <div style={{marginLeft:"100px",width:"250px",marginTop:"40px"}}><CheckPrice /></div>
			                    </div>
			                  </div>
			                </div>
			                <div className="col-lg-6">
			                  <div className="apartments-plan-img">
			                    <img src={"https://i.imgur.com/VxBdSPq.jpg"} alt="#" style={{height:"580px"}} />
								<div style={{position:"relative",bottom:"300px",left:"120px"}}><FloorPlan/></div> 
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="tab-pane fade" id="liton_tab_3_4">
			            <div className="ltn__product-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-6">
			                  <div className="apartments-plan-info ltn__secondary-bg text-color-white">
			                    <h2>Top Garden</h2>
			                    <p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
			                      Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
			                      eiusmod tempor.Incididunt labore et dolore magna aliqua.
			                      sed ayd minim veniam.</p>
			                    <div className="apartments-info-list apartments-info-list-color mt-40">
			                      <ul>
			                        <li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
			                        <li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
			                        <li><label>Bathroom</label> <span>45 Sq. Ft</span></li>
			                        <li><label>Belcony/Pets</label> <span>Allowed</span></li>
			                        <li><label>Lounge</label> <span>650 Sq. Ft</span></li>
			                      </ul>
			                    </div>
			                  </div>
			                </div>
			                <div className="col-lg-6">
			                  <div className="apartments-plan-img">
			                    <img src={publicUrl+"assets/img/others/10.png"} alt="#" />
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="tab-pane fade" id="liton_tab_3_5">
			            <div className="ltn__product-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-6">
			                  <div className="apartments-plan-info ltn__secondary-bg text-color-white">
			                    <h2>Double Height</h2>
			                    <p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
			                      Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
			                      eiusmod tempor.Incididunt labore et dolore magna aliqua.
			                      sed ayd minim veniam.</p>
			                    <div className="apartments-info-list apartments-info-list-color mt-40">
			                      <ul>
			                        <li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
			                        <li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
			                        <li><label>Bathroom</label> <span>45 Sq. Ft</span></li>
			                        <li><label>Belcony/Pets</label> <span>Allowed</span></li>
			                        <li><label>Lounge</label> <span>650 Sq. Ft</span></li>
			                      </ul>
			                    </div>
			                  </div>
			                </div>
			                <div className="col-lg-6">
			                  <div className="apartments-plan-img">
			                    <img src={publicUrl+"assets/img/others/10.png"} alt="#" />
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default ApartmentV1