import React, { Component } from 'react';

import parse from 'html-react-parser';
import Dialog from '../../Dialog';
class VideoV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__about-us-area section-bg-1 bg-image-right-before pt-120 pb-90" id="video">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-info-wrap">
			          <div className="section-title-area ltn__section-title-2--- mb-20">
			            <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Building Facilities</h6>
			            <h1 className="section-title">Why To Choose Mahagun Medalleo?</h1>
			            <p style={{color:"black"}}>Mahagun Medalleo is the newly launched residential project at Sector 107 Noida by Mahagun Group. It is strategically located at Noida Expressway.</p>
			          </div>
			          <ul className="ltn__list-item-half ltn__list-item-half-2 list-item-margin clearfix" style={{color:"black"}}>
			            <li>
			              <i className="icon-done" />
			              	Modern Homes surrounded by Park, Lush Greens
			            </li>
			            <li>
			              <i className="icon-done" />
			              	Best Connectivity to Noida Express-way, Noida Sector-62, NH-24
			            </li>
			            <li>
			              <i className="icon-done" />
						  	A Separate Retail Plaza
			            </li>
			            <li>
			              <i className="icon-done" />
			              RFID At project Entrance
			            </li>
			            <li>
			              <i className="icon-done" />
			              A rare combination of inspired architecture
			            </li>
			            <li>
			              <i className="icon-done" />
			              	Loaded with Ultra Luxury Amenities
			            </li>
			          </ul>
					  <div className="btn-wrapper animated go-top">
			                    <div style={{marginLeft:"90px",borderRadius:"0px"}}><Dialog/></div>
			                  </div>
			          <div className="  ltn__animation-pulse2 text-center mt-30">
			            <a className="ltn__video-play-btn bg-white--- ltn__secondary-bg" href="https://www.youtube.com/embed/56jz-9_9iT4?autoplay=1&showinfo=0" data-rel="lightcase">
			              <i className="icon-play  ltn__secondary-color--- white-color" />
			            </a>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-img-wrap about-img-left">
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default VideoV2