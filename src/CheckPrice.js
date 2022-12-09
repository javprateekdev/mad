import React, { Fragment } from "react";
import emailjs from "emailjs-com";
import {useNavigate} from "react-router-dom";
import {Dialog} from '@mui/material'
import { useForm } from 'react-hook-form';
const Dialogbox = () => {

  const Navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };

      await emailjs.send(
        'service_hke3oqd',
        'template_odg5gm6',
        templateParams,
        '7XzuGFqC7w-jNN4J3'
      );

      

    } catch (e) {
      console.log(e);
    }
  };
 
  

  return (
    <div >
      <div className="theme-btn-1 btn btn-effect-1" style={{padding:"10px",borderRadius:"10px",fontSize:"16px",fontWeight:"600"}} onClick={handleClickOpen}>Check Price
      </div>
      <Dialog open={open} onClose={handleClose}>
      <form style={{float:"center"}}>
      <div >
      <div>
        <div>
          <div style={{height:"450px",width:"380px",border:"5px solid #c1a356"}}>
            <h2 style={{marginLeft:"20px"}}>To Check Complete </h2>
            <h2 style={{marginLeft:"80px"}}> Price Details</h2>
            <div >
           
      
            <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      f
                      className='form-control formInput'
                      placeholder='Your Name'
                    ></input>
                   
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                     
                      className='form-control formInput'
                      placeholder='Your Email address'
                    ></input>
                    
                  </div>
                </div>
                {/* Row 2 of form */}
                
<input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder='Enter Your Phone Number'/>
                <button className='submit-btn' type='submit'>
                  Submit
                </button>
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