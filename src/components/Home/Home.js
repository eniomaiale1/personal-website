import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
      <div id="content" class="site-content" style={{width:'94vw', height:'100vh', overflowY:'scroll', overflowX:'hidden'}} >
            <div id="blog-wrapper">
                <div class="blog-holder center-relative">
                        <div class="entry-content relative">
                            <div class="content-1170 center-relative">
                                <h1 class="entry-title">
                                    Welcome to my website!
                                </h1>
                                <h3>
                                  A few fun facts about myself
                                </h3>
                                <div class="excerpt" style={{fontSize:'22px'}}>
                                <p>One thing I cannot live without is coffee, I have a golden retriever, his name is Byte, I love elephants. I do crossfit, I am passionate to computer science, I like travel, and eat weird stuff.</p>
                                <br/>
                                <div><strong>Read more about me </strong><Link to="/about" class="read-more"></Link></div>
                                </div>
                                <div class="clear"></div>
                            </div>
                        </div>
                </div>
            </div>

            <div class="featured-image-holder">
                <div class="featured-post-image" style={{backgroundImage:'url(images/me.jpg)'}}></div>

            </div>
            <div class="clear"></div>
        </div>
      </div>
    );
  }
}

export default Home;
