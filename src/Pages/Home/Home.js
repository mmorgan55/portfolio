import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import './Home.css';

const Home = (props) => {

  return (
    <div className="Home">
    
      <p id="Title">MATTHEW MORGAN PORTFOLIO</p>

      <Image id="HomeImage" src="https://scx2.b-cdn.net/gfx/news/hires/2019/redwhitebutr.jpg" fluid thumbnail />

      <Card id="IntroCard">
        <Card.Body>
          A short quip/introduction of M5. (that's me)
        </Card.Body>
      </Card>

      <Button id="About" variant="primary">
        About Me
      </Button>

      <Button id="Resume" variant="primary">
        Resume
      </Button>

      <Button id="Projects" variant="primary">
        Projects
      </Button>

      <Button id="Contact" variant="primary">
        Contact
      </Button>


    </div>
  );
}

export default Home