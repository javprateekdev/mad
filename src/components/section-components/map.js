import React, { Component } from 'react';



class Map extends Component {

    render() {

        

    return <div className="google-map mb-120" id='map'>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.746661802073!2d77.37331051440513!3d28.547333494684235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce505caa7abb9%3A0xcd4c63bb8252dd44!2sMAHAGUN%20MEDALLEO%20SECTOR%20107%20NOIDA!5e0!3m2!1sen!2sin!4v1670062403686!5m2!1sen!2sin" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
		</div>
        }
}


export default Map