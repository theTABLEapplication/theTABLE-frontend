import React from 'react';
import '../css/Profile.css';
import Image from 'react-bootstrap/Image';

const AboutUs = () => {
  return (
    <div id='aboutusDiv'>
      <div key={1} id="sarahaboutus">
        <h1>Sarah Creager</h1>
        <Image id="sarahProfileImage" src='' alt={'Sarah Creagar'} roundedCircle />
        <p id="sarahEmail"><a href='mailto:sarah.f.jamieson@gmail.com' target='_blank'>Email</a></p>
        <p id="sarahGithub"><a href='https://github.com/SarahCreager' target='_blank'>GitHub</a></p>
        <p id="sarahLinkedIn"><a href='https://www.linkedin.com/in/sarah-creager/' target='_blank'>LinkedIn</a></p>
        <p>Bio Here</p>
      </div>
      <div key={2} id="justinaboutus">
        <h1>Justin Hamerly</h1>
        <Image id="justinProfileImage" src='' alt={'Justin Hamerly'} roundedCircle />
        <p id="justinEmail"><a href='mailto:suvimountain@icloud.com' target='_blank'>Email</a></p>
        <p id="justinGithub"><a href='https://github.com/JustinHamerly' target='_blank'>GitHub</a></p>
        <p id="justinLinkedIn"><a href='https://www.linkedin.com/in/justin-hamerly-spain/' target='_blank'>LinkedIn</a></p>
        <p>Bio Here</p>
      </div>
      <div key={3} id="chrisaboutus">
        <h1>Christopher Burk</h1>
        <Image id="chrisProfileImage" src='' alt={'Chris Burk'} roundedCircle />
        <p id="chrisEmail"><a href='mailto:c.burk.tech@gmail.com' target='_blank'>Email</a></p>
        <p id="chrisGithub"><a href='https://github.com/cburk2019' target='_blank'>GitHub</a></p>
        <p id="chrisLinkedIn"><a href='https://www.linkedin.com/in/christopherburk/' target='_blank'>LinkedIn</a></p>
        <p>Bio Here</p>
      </div>
      <div key={4} id="haustinaboutus">
        <h1>Haustin Kimbrough</h1>
        <Image id="haustinProfileImage" src='' alt={'Haustin Kimbrough'} roundedCircle />
        <p id="haustinEmail"><a href='mailto:haustin.kimbrough@hotmail.com' target='_blank'>Email</a></p>
        <p id="haustinGithub"><a href='https://github.com/hkimbrough22' target='_blank'>GitHub</a></p>
        <p id="haustinLinkedIn"><a href='https://www.linkedin.com/in/haustin-kimbrough/' target='_blank'>LinkedIn</a></p>
        <p>Bio Here</p>
      </div>
    </div>
  );
};


export default AboutUs;
