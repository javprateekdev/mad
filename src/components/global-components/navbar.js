import { Dialog } from '@mui/material';
import React, { Component } from 'react';


import Dialogbox from '../../Dialogbox';
import AnchorLink from "react-anchor-link-smooth-scroll";
import {styled} from '@mui/material';

const CustomButtonWrapper = styled("div")(({ theme }) => ({
	
	[theme.breakpoints.down("sm")]: {
	  display: "none",
	},
  }));
  const Wrapper = styled("div")(({ theme }) => ({
	
	[theme.breakpoints.up("sm")]: {
	  display: "none",
	},
  }));
class Navbar extends Component {
	
    render() {
        
        return (
		<div>
           <header >
			
				<div>
				
			<div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white" style={{backgroundColor: '#420d46'}}>
				
				<div>
					<div  style={{height:"100px",width:"150px",display:"flex"}}>
						<img src={"https://i.imgur.com/5Bnog1s.png"} alt="Logo" style={{height:"90px",width:"250px",marginLeft:"15px"}} />
						
						<Wrapper>
					<div style={{height:"220px",width:"200px"}} >
   <a href="+91-81-3030-6040"><img src='https://i.imgur.com/MEi2n7c.gif' /></a>
</div>
					</Wrapper>
						<CustomButtonWrapper>
						<div  style={{display:"flex",marginLeft:"25px"}}>
						
						<AnchorLink href='#home'><div style={{margin:"25px 20px 0 0",fontSize:"20px"}}>Home</div></AnchorLink>
						<AnchorLink href='#video'><div style={{margin:"25px 20px 0 0",fontSize:"20px"}}>Video</div></AnchorLink>
					
						<AnchorLink href='#features'><div style={{margin:"25px 20px 0 0",fontSize:"20px"}}>Features</div></AnchorLink>
						<AnchorLink href='#plan'><div style={{margin:"25px 20px 0 0",fontSize:"20px"}}>FloorPlan</div></AnchorLink>
						<AnchorLink href='#amenities'><div style={{margin:"25px 20px 0 0",fontSize:"20px"}}>Amenities</div></AnchorLink>
						<AnchorLink href='#map'><div style={{margin:"25px 50px 0 0",fontSize:"20px"}}>Map</div></AnchorLink>
						
						
						<div style={{width:"300px",margin:"25px 5px 0 0"}}><Dialogbox /></div>
						
						
						
						<div className="theme-btn-1 btn btn-effect-1" style={{width:"320px",padding:"5px",borderRadius:"10px",height:"45px",margin:"25px 0px 0 0",fontSize:"20px"}} >+91-81-3030-6040
      </div>
	  
						<img src={"https://i.imgur.com/TB6KZcs.png"} alt="Logo" style={{height:"100px",width:"320px",marginLeft:"5px"}} />
						
						</div>
						</CustomButtonWrapper>
						
						</div>
				
					
				
					
					
					
					
						
						
					</div>
					
					</div>
					
					
		
					
					</div>
						
						
					
						
						
						
			
				
				
		
              
			</header>
		</div>
		
        )
    }
}


export default Navbar;