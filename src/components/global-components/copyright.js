import React, { Component } from 'react';


class CopyRight extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

        return (
			<div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
			<div className="container-fluid ltn__border-top-2">
				<div className="" style={{display:"flex"}}>
				
				<div className="col-md-6 col-12">
					<h4>Disclaimer</h4>
					<p>This site is for information purpose only and should not be treated as the official information. <span className="current-year" /></p>
					</div>
				</div>
			</div>
			</div>
        )
    }
}


export default CopyRight