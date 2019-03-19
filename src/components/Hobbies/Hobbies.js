import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      flexGrow: 1,
      //maxWidth: 500,
    },
  };

class Hobbies extends Component {
  constructor(props, context){
      super(props,context);
      this.handleSelect = this.handleSelect.bind(this);
      this.state = {
        index: 0,
        direction: null,
        value: 0,
      };
  }
  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { index, direction } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <div id="content" class="site-content" style={{width:'94vw', height:'100vh', overflowY:'scroll', overflowX:'hidden'}} >
            <Paper square className={classes.root}>
                <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                >
                <Tab icon={<i class="fa fa-heart fa-lg"></i>} label="Love" selected={true} />
                <Tab icon={<i class="fa fa-plane fa-lg"></i>} label="Travel" />
                <Tab icon={<i class="fa fa-heartbeat fa-lg"></i>} label="Crossfit" />
                <Tab icon={<i class="fa fa-code fa-lg"></i>} label="Code" />
                <Tab icon={<i class="fa fa-paw fa-lg"></i>} label="Pets" />
                </Tabs>
            </Paper>
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect} interval={2000}
            >
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../../images/travel-header2.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../../images/travel-header.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../../images/01.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Hobbies);
