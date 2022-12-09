import React, { Fragment } from "react";
import emailjs from "emailjs-com";
import {Dialog} from '@mui/material'
const Dialogbox = () => {
   
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hke3oqd",
        "template_odg5gm6",
        e.target,
        "7XzuGFqC7w-jNN4J3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

 
  

  return (
    <div >
      <div className="theme-btn-1 btn btn-effect-1" style={{padding:"10px",borderRadius:"10px",fontSize:"16px",fontWeight:"600"}} onClick={handleClickOpen}>FloorPlan
      </div>
      <Dialog open={open} onClose={handleClose}>
      <form style={{float:"center"}}>
      <div >
      <div>
        <div>
          <div style={{height:"420px",width:"380px",border:"5px solid #c1a356"}}>
            <h2 style={{marginLeft:"8px"}}>To Download Complete</h2>
            <h2 style={{marginLeft:"100px"}}> FloorPlan</h2>
            <div >
           
      
      <form className="contact-form" onSubmit={sendEmail}>
        
        <input type="text" name="user_name"  placeholder='Name' style={{height:"50px",width:"350px",margin:"10px"}}/> 
        <input type="text" name="contact_number" placeholder="Contact" style={{height:"50px",width:"350px",margin:"10px"}}/>
        <input type="email" name="user_email" placeholder="Email" style={{height:"50px",width:"350px",margin:"10px"}}/>
        <input type="submit"  style={{background:"#420d46",color:"#c1a356"}}/>
      </form>
 
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </form>
       
      </Dialog>
    </div>
  );
}

export default Dialogbox ;