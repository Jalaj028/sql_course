import { Grid, Typography } from "@mui/material";
import React from "react";
import { SocialIcon } from 'react-social-icons';

import "../index.css";

function Footer() {
    const date = new Date();
  
      return(
          <div className="footer bg-indigo-900 h-52 text-white pt-4" >
              <Grid container style={{
              textAlign:"center"
          }}>
              <Grid item xs={12} md={4} lg={4} >
              <div className="innerFooter">
                <h2 style={{marginBottom:"1.5rem"}}>Have any queries, reach out:</h2>
                    {/* <a href="#" style={{marginRight:"1rem"}}><SocialIcon network='discord' /></a> */}
                    <a href="#"  style={{marginRight:"1rem"}}><SocialIcon network='facebook' /></a>
                    <a href="#"  style={{marginRight:"1rem"}}><SocialIcon network='instagram' /></a>
                    <a href="#"  style={{marginRight:"1rem"}}><SocialIcon network='youtube' /></a>
                    {/* <a href="#"  style={{marginRight:"1rem"}}><SocialIcon network='whatsapp' /></a> */}
                    
                </div>
                
                
  
                  {/* </p> */}
                  
                  {/* </div> */}
          </Grid>
          <Grid item xs={12} md={4} lg={4} >
                  <div className="innerFooter"><h2>Time:</h2>
              <Typography variant="h6">{date.toLocaleString()}</Typography>
                  
                  </div>
          </Grid>
          </Grid>
          
          </div>
          
      )
      }
      
  export default Footer;
  
  