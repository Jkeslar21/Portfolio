import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { DiReact, DiNodejsSmall } from "react-icons/di";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    width: 275,
    backgroundColor: '#e5e7e6',
    color: '#000c1f',
    borderRadius: '12px',
    webkitBoxShadow: '10px 10px 21px -2px rgba(255,255,255,0.75)',
    mozBoxShadow: '10px 10px 21px -2px rgba(255,255,255,0.75)',
    boxShadow: '10px 10px 21px -2px rgba(229,231,230,.75)',
    // border: '2px solid #000c1f' 
    // border: '2px solid #1f2a44'
  },
  media: {
    height: 140,
    // borderBottom: '2px solid #000c1f'
  },
});

export default function MediaCard({ handleClickOpen, image, title, one, two, three, four }) {
  const classes = useStyles();

  return (
      <>
    <Card className={classes.card}>
      <CardActionArea onClick={handleClickOpen}>
        <CardMedia
          className={classes.media}
          image={image}
          title={
              one ? "WellDone International" :
              two ? "Project 2" :
              three ? "Project 3" :
              four ? "Project 4" :
              null
            }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {one && <div className='icon-container'>
                    <div className='row'>
                        <DiReact style={{ fontSize: '3rem', color: '#61DAFB'}} />
                        <img className='icon-hover front' src='../static/next-text.png' alt='Next Icon' style={{ width: '50px', maxHeight: '50px', marginRight: '5%' }} />
                        <DiNodejsSmall style={{ fontSize: '3rem', color: '#83CD29'}} />
                    </div>
                    <div className='row'>
                        <img className='icon-hover' src='../static/expressFinal.png' alt='Express Icon' style={{ width: '40px', height: '40px', marginTop: '2%', paddingLeft: '2%' }} />
                        <img className='icon-hover' src='../static/netlify.png' alt='Netlify Icon' style={{ width: '40px', height: '40px', marginTop: '2.25%', paddingLeft: '2%' }} />
                    </div>
            </div>}
            {/* {two &&}
            {three &&}
            {four &&} */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        {one && <a target="_blank" href="https://dev-welldone.netlify.com">View</a>}
          {two && 'View'}
          {three && 'View'}
          {four && 'View'}
        </Button>
        <Button size="small" color="primary">
          {one && <a target="_blank" href="https://github.com/labs15-well-done/frontend">GitHub</a>}
          {two && 'GitHub'}
          {three && 'GitHub'}
          {four && 'GitHub'}
        </Button>
      </CardActions>
    </Card>
    <style jsx>{`
                .icon-container {
                    display: flex;
                    flex-direction: column;
                }
                .row {
                    display: flex;
                    justify-content: space-around;
                }
                a {
                    text-decoration: none;
                    color: black;

                }
      `}</style>
  </>
  );
}