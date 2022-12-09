import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Dialog  from '../../Dialog';

class BannerV3 extends Component {

    render() {

        

    return  <div className="ltn__slider-area ltn__slider-3  section-bg-2" id="home">
			  <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
			    {/* ltn__slide-item */}
			    <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg={"https://i.imgur.com/UuUrKBi.jpg"}>
			      <div className="ltn__slide-item-inner text-center">
			        <div className="container">
			          <div className="row">
			            <div className="col-lg-12 align-self-center">
			              <div className="slide-item-info">
			                <div className="slide-item-info-inner ltn__slide-animation">
			                  <div className="slide-video mb-50 d-none">
			                    <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
			                      <i className="fa fa-play" />
			                    </a>
			                  </div>
			                  <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span>Mahagun Medalleo</h6>
			                  <h1 className="slide-title animated ">Luxury Living  <br />meets the <br/>Perfect Location</h1>
			                  <div className="slide-brief animated">
			                    <p>3&4 BHK In Sector 107 Noida</p>
			                  </div>
			                  <div className="btn-wrapper animated go-top">
			                    <div ><Dialog/></div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    {/* ltn__slide-item */}
			    <div className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg={"https://i.imgur.com/llHEjHO.jpg"}>
			      <div className="ltn__slide-item-inner  text-right text-end">
			        <div className="container">
			          <div className="row">
			            <div className="col-lg-12 align-self-center">
			              <div className="slide-item-info">
			                <div className="slide-item-info-inner ltn__slide-animation">
			                  <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Mahagun Medalleo</h6>
			                  <h1 className="slide-title animated ">NEW-AGE PALACES ARE LOOKING FOR <br />  NEW-AGE ROYALTY</h1>
			                  <div className="slide-brief animated">
			                    <p>Mahagun Medalleo's area is 40000 sq. mt with 2 blocks of G+4 Levels and 6 Block 0f G+28 Levels</p>
			                  </div>
			                  <div className="btn-wrapper animated go-top">
							  <div ><Dialog/></div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    {/* ltn__slide-item */}
			    <div className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg={"https://i.imgur.com/NucXDv1.jpg"}>
			      <div className="ltn__slide-item-inner  text-left">
			        <div className="container">
			          <div className="row">
			            <div className="col-lg-12 align-self-center">
			              <div className="slide-item-info">
			                <div className="slide-item-info-inner ltn__slide-animation">
			                  <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span>Mahagun Medalleo</h6>
			                  <h1 className="slide-title animated ">ADDRESS THAT’S WORTHY OF  <br /> NEW-AGE ROYALTY</h1>
			                  <div className="slide-brief animated">
			                    <p>Mahagun Medalleo is located in well-established Sector 107 of Noida – A central place of Noida.</p>
			                  </div>
			                  <div className="btn-wrapper animated go-top">
							  <div ><Dialog/></div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    {/*  */}
			  </div>
			</div>

        }
}

export default BannerV3