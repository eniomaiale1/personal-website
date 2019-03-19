import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div>
      <div id="content" class="site-content" style={{width:'94vw', height:'100vh', overflowY:'scroll', overflowX:'hidden'}} >
        <div class="page-header-image relative">
            <img src="images/travel1.jpg" alt="About"/>
        </div>


        <article style={{paddingTop:"30px"}}>
            <div class="content-1070 center-relative entry-content">
                <div class="content-900 center-relative">
                    <h1 class="entry-title">Few Words About Me</h1>
                    <div class="one_half ">
                        <p>I was born in Caracas, Venezuela on February 6th, 1983. I studied Computer Science in Nueva Esparta University. I got my degree in Computer Science in 2005. I was always passioned about technology and computers in general, but my main passion is Software Engineering.</p>
                        <p>I lived in Maracay, Venezuela a couple years when I was a kid. My mother Maira Belen decided to move to Caracas when I was 5 years old, since that moment I lived in Caracas till 2011 that I had the opportunity to move to Florida.</p>
                    </div>
                    <div class="one_half last">
                        <p>An insurance company that I used to work gave me the opportunity to move to the Miami headquater. Currently I am working as Director Software Engineer in Miami Heat. <i class="fa fa-dribbble"></i></p>
                        <p>Passioned to fitness in general. My main kind of training is crossfit. I have been practicing it for more than 4 years. Lately I have been participating in some competitions, and I am planning to keep doing it. Since nutrition is key in fitness, I have been taking care of nutrition, and my style of living.<br/></p>
                    </div>
                    <div class="clear"></div>
                    <br/>
                    <br/>
                    <div class="clear"></div>
                </div>
            </div>
        </article>
        </div>
      </div>
    );
  }
}

export default About;
