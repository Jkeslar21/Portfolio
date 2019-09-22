import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import MediaCard from './MediaCard'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { DiReact, DiNodejsSmall } from "react-icons/di";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io"
import { MdFiberManualRecord, MdBrightness1 } from "react-icons/md";

// const useStyles = makeStyles({
//   card: {
//     background: 'pink'
//   }
// });

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs({image, title, icons, description, one, two, three, four}) {
    // const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [picture, setPicture] = useState(0)
  

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const selectPictureRight = () => {
      if (picture < 4) {
          setPicture(picture+1)
      }
      if (picture === 3) {
          setPicture(0)
      }
  }

  const selectPictureLeft = () => {
      if (picture === 0) {
          setPicture(3)
      }
      if (picture > 0) {
          setPicture(picture-1)
      }
  }

  return (
      <>
    <div>
      {/* <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <div style={{ maxWidth: '345px'}}>
      {one && <MediaCard handleClickOpen={handleClickOpen} image={image} one={one} title={title} />}
      {two && <MediaCard handleClickOpen={handleClickOpen} image={image} two={two} title={title} />}
      {three && <MediaCard handleClickOpen={handleClickOpen} image={image} three={three} title={title} />}
      {four && <MediaCard handleClickOpen={handleClickOpen} image={image} four={four} title={title} />}
      </div>
        
      <Dialog  onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>

        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {one && <h2>{picture === 0 ? 'WellDone International • Index' :
                    picture === 1 ? 'WellDone International • Dashboard' :
                    picture === 2 ? 'WellDone International • Monitors' :
                    picture === 3 ? 'WellDone International • Reports' :
                    null }</h2>}
          {two && <h2>Project 2 Title</h2>}
          {three && <h2>Project 3 Title</h2>}
          {four && <h2>Project 4 Title</h2>}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
             {one && 
                <>
                <img src={picture === 0 ? '../static/IndexModal.png' :
                    picture === 1 ? '../static/DashboardFinal.png' :
                    picture === 2 ? '../static/monitorsFinal.png' :
                    picture === 3 ? '../static/reportsPage.png' :
                    null }
                     alt='WellDone International • Dashboard Screenshot'
                     width='100%' />
                <div className='arrow-icons'>
                    <div onClick={selectPictureLeft} className='arrow' ><FaAngleLeft style={{ fontSize: '3rem'}} /></div>
                    <div className='radio-buttons'>
                    {picture === 0 ? <MdBrightness1 style={{ color: '#1f2a44'}} /> : <IoIosRadioButtonOff onClick={()=>setPicture(0)} style={{ color: '#b7b5b3', cursor: 'pointer'}} />}
                    {picture === 1 ? <MdBrightness1 style={{ color: '#1f2a44'}} /> : <IoIosRadioButtonOff onClick={()=>setPicture(1)} style={{ color: '#b7b5b3', cursor: 'pointer'}} />}
                    {picture === 2 ? <MdBrightness1 style={{ color: '#1f2a44'}} /> : <IoIosRadioButtonOff onClick={()=>setPicture(2)} style={{ color: '#b7b5b3', cursor: 'pointer'}} />}
                    {picture === 3 ? <MdBrightness1 style={{ color: '#1f2a44'}} /> : <IoIosRadioButtonOff onClick={()=>setPicture(3)} style={{ color: '#b7b5b3', cursor: 'pointer'}} />}
                    </div>
                    <div onClick={selectPictureRight} className='arrow' ><FaAngleRight style={{ fontSize: '3rem'}} /></div>
                </div>
                </>} 
            {two && 
                <>
                </>}
            {three && 
                <>
                </>}
            {four && 
                <>
                </>}
          </Typography>
          <Typography gutterBottom>
              {/* Tech-Stack */}
          {one && <div className='tech-stack'><span className='row'><h2>React.js</h2><h2>|</h2><h2>Next.js</h2><h2>|</h2><h2>Node.js</h2><h2>|</h2><h2>Express.js</h2><h2>|</h2><h2>Netlify</h2></span>
                        <span className='row-2'><DiReact style={{ fontSize: '3rem', color: '#61DAFB', marginLeft: '-5px', marginTop: '-7px'}} />
                        <img className='icon-hover front' src='../static/next-text.png' alt='Next Icon' style={{ width: '50px', maxHeight: '50px', marginLeft: '-12px' }} />
                        <DiNodejsSmall style={{ fontSize: '3rem', color: '#83CD29', marginLeft: '-15px'}} />
                        <img className='icon-hover' src='../static/expressFinal.png' alt='Express Icon' style={{ width: '40px', height: '40px' }} />
                        <img className='icon-hover' src='../static/netlify.png' alt='Netlify Icon' style={{ width: '40px', height: '40px' }} />
                   </span> </div>}
          {two && <h2>Project 2 Title</h2>}
          {three && <h2>Project 3 Title</h2>}
          {four && <h2>Project 4 Title</h2>}
          </Typography>
          <Typography gutterBottom>
              {/* Description */}
          {one && <p>{picture === 0 ? <p>Index Page displays a hero image with a dashboard greeting and a "View Dashboard" link.  There is also an "About" section to describe the company, as well as a guided tour, to break down the content you will find by visiting each page in the dashboard.  Additionally, this page is fully customizable through Prismic, a content management system which allows an admin the ability to add new, update existing, or remove content from the dashboard.</p> :
                    picture === 1 ? <p>Dashboard Page showcases sensor statuses, an interactive map, as well as sensor specific details all available at-a-glance.</p> :
                    picture === 2 ? <p>Monitors Page reveals a grid of sensor cards which display sensor specific data.  In the upper-left corner, you'll find the sensor's current status, along with the sensor's unique ID.  In the upper-right corner, you'll see a 14-day spread of that sensor's statuses over the past two weeks, with the sensor's location listed below.  Across the bottom of the card, is an interactive graph exposing the sensor's total water-flow usage over a 24-hour period.  You may click along the graph to unveil the usage for a single date.</p> :
                    picture === 3 ? 'Reports Page description here Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, exercitationem soluta impedit illo excepturi ea ipsam cum earum obcaecati nisi aliquid! Possimus expedita ratione eum necessitatibus? Laudantium architecto perferendis quidem.Expedita nisi eum, aspernatur nostrum' :
                    null }</p>}
          {two && <h2>Project 2 Description</h2>}
          {three && <h2>Project 3 Description</h2>}
          {four && <h2>Project 4 Description</h2>}
          </Typography>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Save changes
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
    <style jsx>{`
                * {
                  font-family: 'Raleway', sans-serif;
                }
                .arrow-icons {
                    display: flex;
                    justify-content: space-between;
                }
                .arrow {
                    color: #1f2a44;
                    transition: 0.4s;
                }
                .arrow:hover {
                    color: #b7b5b3;
                    cursor: pointer;
                }
                .tech-stack {
                    width: 100%;
                }
                .row {
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    margin-bottom: 1%;
                }
                .row-2 {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                
                }
                .invisible {
                    display: none;
                }
                .radio-buttons {
                  display: flex;
                  align-items: center;
                  width: 25%;
                  // border: 1px solid red;
                  justify-content: space-between;
                }
                // .MuiDialog-paperWidthSm {
                //   max-width: 20%;
                // }
      `}</style>
    </>
  );
}

