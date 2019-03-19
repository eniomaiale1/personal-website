import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from "react-router-dom";

const drawerWidth = 320;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    border:'0',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    border:'0',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 0,//theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: 0,//theme.spacing.unit * 9 + 1,
    },
    border:'0',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class NavMenu extends React.Component {
  state = {
    open: false,
  };

  handleToogle = () => {this.setState({ open: !this.state.open });};

  closeMenu = () => {this.setState({ open: false });};

  handleSocialClick(type){
    let url = "";
    switch (type) {
      case "lk":
        url = "https://www.linkedin.com/in/enio-maiale-64215032/";
        break;
      case "ig":
        url = "https://www.instagram.com/eniomaiale/";
        break;
      case "fb":
        url = "https://www.facebook.com/enio.maiale";
        break;
      case "yt":
        url = "https://www.youtube.com/user/eniomaiale";
        break;
      case "tw":
        url = "https://twitter.com/eniomaiale";
    }
    this.closeMenu();
    var win = window.open(url, '_blank');
    win.focus();
    return;
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />

        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div>
            <div class="menu-left-part">
                <div class="search-holder">
                    <label>
                        <input type="search" class="search-field" placeholder="Type here to search..." value="" name="s" title="Search for:"/>
                    </label>
                </div>
                <div class="site-info-holder">
                    <h1 class="site-title">enio.io</h1>
                    <p class="site-description" style={{whiteSpace:'initial'}}>
                      Navigate through the different sections, and find more information about me, and the things that I love to do. Have Fun!
                    </p>
                </div>
                <nav id="header-main-menu">
                    <ul class="main-menu sm sm-clean">
                        <li><Link to="/home" onClick={this.closeMenu}>Home</Link></li>
                        <li><Link to="/about" onClick={this.closeMenu}>About Me</Link></li>
                        <li><Link to="/hobbies" onClick={this.closeMenu}>Hobbies</Link></li>
                        <li><Link to="/resume" onClick={this.closeMenu}>Resume</Link></li>
                        <li><Link to="/poc" onClick={this.closeMenu}>Proofs of Concept</Link></li>
                        <li><Link to="/contact" onClick={this.closeMenu}>Contact Me</Link></li>
                    </ul>
                </nav>
                <footer>
                    <div class="footer-info">
                        © 2019 ENIO.IO Enio Maiale's Personal Website <br/> Written with <i class="fa fa-code"></i> <a href="https://reactjs.org/">REACTJS</a>.
                    </div>
                </footer>
            </div>
          </div>
        </Drawer>
        <main style={{padding:'0px'}}>
          <div class="menu-right-part" style={{position:'absolute' }}>
              <div class="logo-holder">
                  <Link to="/home">
                      <img src="images/logo.png" alt="Suppablog WP"/>
                  </Link>
              </div>
              <div class="toggle-holder" style={{boxSizing:'unset'}} onClick={this.handleToogle}>
                  <div id="toggle">
                      <div class="menu-line"></div>
                  </div>
              </div>
              <div class="social-holder">
                  <div class="social-list">
                      <a onClick={() => this.handleSocialClick('lk')}><i class="fa fa-linkedin"></i></a>
                      <a onClick={() => this.handleSocialClick('ig')}><i class="fa fa-instagram"></i></a>
                      <a onClick={() => this.handleSocialClick('fb')}><i class="fa fa-facebook"></i></a>
                      <a onClick={() => this.handleSocialClick('yt')}><i class="fa fa-youtube-play"></i></a>
                      <a onClick={() => this.handleSocialClick('tw')}><i class="fa fa-twitter"></i></a>
                  </div>
              </div>
              <div class="fixed scroll-top"><i class="fa fa-caret-square-o-up" aria-hidden="true"></i></div>
          </div>
        </main>
      </div>
    );
  }
}

NavMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NavMenu);