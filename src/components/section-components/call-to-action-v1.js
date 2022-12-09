import React, { Component } from 'react';

import Dialog from '../../Dialog';
class CallToActonV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom" >
			  <div className="container">
			    <div className="row"  >
			      <div className="col-lg-12" s >
			        <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---"style={{color:"#ffd897"}} >
			          <div className="coll-to-info text-color-white">
			            <h1>To Get a step Closer to your dream home?</h1>
			            <p>We can help you realize your dream of a new home</p>
			          </div>
			          <div className="btn-wrapper go-top">
			            <div><Dialog /></div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default CallToActonV1