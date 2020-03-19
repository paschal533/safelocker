import React from 'react';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import PublishIcon from '@material-ui/icons/Publish';
import SecurityIcon from '@material-ui/icons/Security';
import MemoryIcon from '@material-ui/icons/Memory';
import Button from '@material-ui/core/Button';
import LinkIcon from '@material-ui/icons/Link';
import Grid from "@material-ui/core/Grid";


const Premium = () => {
    return (
        <div className="pro-container">  
           <h3 className="pro">Pro version</h3>   
         <div className="pro-icon">
            <Grid container spacing={0}> 
              <Grid item sm={4} xs={6}>
                <CloudDownloadIcon className="font" /><span> Bulk download</span>   
              </Grid>
              <Grid item sm={4} xs={6}> 
                <AccessibilityIcon  className="font" /><span> Access Everywhere  </span>
              </Grid>
              <Grid item sm={4} xs={6}> 
                <PublishIcon  className="font" /><span> FTP upload</span>
              </Grid> 
              <Grid item sm={4} xs={6}> 
                <SecurityIcon className="font"/><span>top security</span>    
              </Grid>
              <Grid item sm={4} xs={6}>
                <MemoryIcon className="font" /><span> 1TB Memory</span> 
              </Grid>
              <Grid item sm={4} xs={6}>
                <LinkIcon  className="font"/><span> Direct download link</span>
              </Grid> 
            </Grid>
        </div>
               
            <p>what are you waiting for? GO PRO</p>
            <Button variant="outlined"   size="medium" className="pro-button">
                GO PRO
            </Button>
        </div>

    )
}

export default Premium;