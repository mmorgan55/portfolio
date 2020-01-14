import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import "./About.css";

const About = () => {
    return (
        <div className="AboutMePage">
            <Card id="AboutMeImage">
                <Image src="https://scx2.b-cdn.net/gfx/news/hires/2019/redwhitebutr.jpg" fluid thumbnail/>
            </Card>

            <Card id="AboutMeText">
                <Card.Title style={{textAlign: 'center',  fontSize: '48px'}}>
                    ABOUT ME
                </Card.Title>
                <Card.Body style={{fontSize: '20px'}}>
                    About me text shall go here at some point in the near future.
                </Card.Body>
            </Card>
        </div>
    );
}

export default About;