import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import "./About.css";

const About = () => {
    return(
        <div className="AboutMePage">
            <Card id="AboutMeText">
                <Card.Title>
                    ABOUT ME
                </Card.Title>
                <Card.Body>
                    About me text shall go here at some point in the near future.
                </Card.Body>
            </Card>

            <Card id="AboutMeImage">
                <Image src="https://scx2.b-cdn.net/gfx/news/hires/2019/redwhitebutr.jpg" fluid />
            </Card>
        </div>
    );
}

export default About;