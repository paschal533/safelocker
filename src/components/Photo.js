import React, { Component } from 'react';
import app from './Firebase';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';



  
  
   
export default class Photo extends Component {
     

    state = {
        photos:[]
    }
    componentDidMount(){
        let images=[]
        app.firestore().collection(localStorage.getItem("user_id")).get().then(function(QuerySnapshot) {
            QuerySnapshot.forEach(function(doc) {
                const imageDate={
                    url:doc.data().url,
                }
                images.push(imageDate)
               
            });
        });
         
        this.setState({ photos: images });
    }
     
    render() {
        const items = this.state.photos;
         

        return (
          <div>
           <div className='root'>
             <GridList cellHeight={180} className='gridList'>
              <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
               <ListSubheader component="div">December</ListSubheader>
              </GridListTile>
                {items.map(i => (
                    <GridListTile key={i.src}>
                    <img src={i.src} alt={i.title} />
                    <GridListTileBar
                      title={i.title}
                      subtitle={<span>by: {i.title}</span>}
                      actionIcon={
                        <IconButton aria-label={`info about ${i.title}`} className='icon'>
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </GridListTile>
                     
                )
                )}
            </GridList>
          </div>
                <Link to="/user"> 
                 <Button variant="contained" color="primary" className="btn" startIcon={< KeyboardBackspaceIcon  />} >
                  back
                 </Button>
               </Link>
            </div>
        )

    }
}