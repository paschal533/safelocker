import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import  './Navbar.css'
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    flexGrow: 1,
    
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
    <div className={classes.root} className="card-container">
    <Grid container spacing={2}>
      <Grid item sm={4} xs={12} className="c">
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="./end-end.jpg"
            title="Contemplative Reptile"
            />
            <CardContent className="card-content">
            <Typography gutterBottom variant="h5" component="h2">
                END-END-ENCRYPTION
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className="card-pragraph" >
                 secure your files, be the only one accessing it..........
            </Typography>
            </CardContent>
        </CardActionArea >
        <CardActions className="card-content">
            <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>
       </Grid>
       <Grid item sm={4} xs={12} className="c">
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image=" ./zs.jpg "
            title="Contemplative Reptile"
            />
            <CardContent className="card-content" >
            <Typography gutterBottom variant="h5" component="h2">
              Accessibility
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className="card-pragraph">
                be able access your files from anywhere around the world .........
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions className="card-content" >
            <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>
       </Grid>

       <Grid item sm={4} xs={12} className="c">
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image=" ./cloud.jpg"
            title="Contemplative Reptile"
            />
            <CardContent className="card-content">
            <Typography gutterBottom variant="h5" component="h2">
                back-up and update
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className="card-pragraph">
                 we makes sure nothing happens to your files ...........
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions className="card-content">
            <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>
       </Grid>
      </Grid> 
     </div>
    </div>
  );
}
