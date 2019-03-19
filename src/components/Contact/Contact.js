import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Contact.css';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width:'100%',
  },
  button: {
    margin: theme.spacing.unit,
    width:'100%',
    
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class Contact extends Component {
  static defaultProps = {
    center: {
      lat: 25.945603,
      lng: -80.160433
    },
    zoom: 14
  };
  
  render() {
    const { classes } = this.props;
    return (
      <div>
      <div id="content" class="site-content" style={{width:'94vw', height:'100vh', overflowY:'scroll', overflowX:'hidden'}} >
        <div style={{ height: '40vh', width: '94vw' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCNX77hH9LPt7iOHPYLZ7bH3RSc4DswUuA' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <i class="fa fa-fort-awesome" style={{fontSize:'25px'}} lat={25.945603} lng={-80.160433}></i>

          </GoogleMapReact>
        </div>

        <article>
                <div class="content-1070 center-relative entry-content">
                    <div class="content-900 center-relative">
                        <h1 class="entry-title">Contact</h1>
                        <div class="one_half ">
                        GET IN TOUCH WITH ME!<p></p>
                            <br/>
                            <div class="montserrat">
                                <span style={{color:'#adadad'}}>Address: </span>North Miami Beach, FL, United States<br/>
                                <span style={{color:'#adadad'}}>Phone: </span> +1 305-308-0503<br/>
                                <span style={{color:'#adadad'}}>Email: </span> enio.maiale@gmail.com<br/>
                            </div>
                        </div>
                        <div class="one_half last ">
                        <TextField
                             id="outlined-name-input"
                              label="Name"
                              className={classes.textField}
                              name="name"
                              margin="normal"
                              variant="outlined"
                            />
                        <TextField
                             id="outlined-email-input"
                              label="Email"
                              className={classes.textField}
                              type="email"
                              name="email"
                              autoComplete="email"
                              margin="normal"
                              variant="outlined"
                            />
                            <TextField
                             id="outlined-subject-input"
                              label="Subject"
                              className={classes.textField}
                              name="name"
                              margin="normal"
                              variant="outlined"
                            />
                            <TextField
                              id="outlined-message-static"
                              label="Message"
                              multiline
                              rows="4"
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                            />
                          <Button variant="contained" color="primary" className={classes.button} size="large" style={{backgroundColor:'#5B5B5B'}}>
                            Send&nbsp;&nbsp;
                            <i class="fa fa-envelope"></i>
                          </Button>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </article>
      </div>
    </div>
    );
  }
}

export default withStyles(styles)(Contact);
