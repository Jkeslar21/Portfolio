import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import MediaCard from './MediaCard'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
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
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {one && <h2>WellDone International • Dashboard</h2>}
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
                     width='575px' />
                <div className='arrow-icons'>
                    <div onClick={selectPictureLeft} className='arrow' ><FaAngleLeft style={{ fontSize: '3rem'}} /></div>
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
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
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
      `}</style>
    </>
  );
}

