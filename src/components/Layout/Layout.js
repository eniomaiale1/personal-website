import React, { Component } from 'react';
import  NavMenu  from '../NavMenu/NavMenu';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    overflowY: 'scroll',
    //padding: theme.spacing.unit * 3,
  },
});

class Layout extends Component {
  render () {
    const { classes } = this.props;
    return (
     <div className={classes.root}>
        <CssBaseline />
        <NavMenu/>
        <div className={classes.content}>
          {this.props.children}
        </div>
      </div>


    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Layout);