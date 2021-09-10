import React from 'react';
import '../css/Profile.css';
import Image from 'react-bootstrap/Image';
import Sarah from '../assets/sarahphoto.jpg';
import Justin from '../assets/justinphoto.jpg';
import email from '../assets/emailIcon.png';
import Chris from '../assets/chris-photo.jpg';
import Haustin from '../assets/haustin-photo.jpg';
import gitHub from '../assets/gitHubIcon.png';
import linkedIn from '../assets/linkedInLogo.png';
import '../css/AboutUs.css';

const AboutUs = () => {
  return (
    <div id='aboutusDiv'>
      <div key={1} id="sarahaboutus">
        <h1>Sarah Creager</h1>
        <Image id="sarahProfileImage" src={Sarah} alt={'Sarah Creagar'} roundedCircle />
        <div id="sarahLinks">
          <a id="sarahLinkedIn" href='https://www.linkedin.com/in/sarah-creager/' target='_blank'>
            <img alt="linkedIn" src={linkedIn} />
          </a>
          <a id="sarahGithub" href='https://github.com/SarahCreager' target='_blank'>
            <img alt="GitHub" src={gitHub} />
          </a>
          <a id="sarahEmail" href='mailto:sarah.f.jamieson@gmail.com' target='_blank'>
            <img alt="email" src={email} />
          </a>
        </div>
        <p>Sarah is a former ICU nurse and musician, pursuing her passion for software development.<br/> She is committed to creating software that's accessible to everyone, with an approachable and inviting touch.</p>
      </div>
      <div key={2} id="justinaboutus">
        <h1>Justin Hamerly</h1>
        <Image id="justinProfileImage" src={Justin} alt={'Justin Hamerly'} roundedCircle />
        <div id="justinLinks">
          <a id="justinLinkedIn" href='https://www.linkedin.com/in/justin-hamerly-spain/' target='_blank'>
            <img alt="linkedIn" src={linkedIn} />
          </a>
          <a id="justinGithub" href='https://github.com/JustinHamerly' target='_blank'>
            <img alt="GitHub" src={gitHub} />
          </a>
          <a id="justinEmail" href='mailto:suvimountain@icloud.com' target='_blank'>
            <img alt="email" src={email} />
          </a>
        </div>
        <p>Justin comes from a design background - from architectural design to costume design.<br/> He believes great design comes from resourcefulness and diverse teams.  He is client focused and objective driven.</p>
      </div>
      <div key={3} id="chrisaboutus">
        <h1>Christopher Burk</h1>
        <Image id="chrisProfileImage" src={Chris} alt={'Chris Burk'} roundedCircle />
        <div id="chrisLinks">
          <a id="chrisLinkedIn" href='https://www.linkedin.com/in/christopherburk/' target='_blank'>
            <img alt="linkedIn" src={linkedIn} />
          </a>
          <a id="chrisGithub" href='https://github.com/cburk2019' target='_blank'>
            <img alt="GitHub" src={gitHub} />
          </a>
          <a id="chrisEmail" href='mailto:c.burk.tech@gmail.com' target='_blank'>
            <img alt="email" src={email} />
          </a>
        </div>
        <p>Christopher is transitioning from retail management and finance. He is striving to break into the tech industry and progressively work his way into management.<br/> He believes that all people should have access to anything and all things technology and is committed to reaching and helping those without it. He loves people!</p>
      </div>
      <div key={4} id="haustinaboutus">
        <h1>Haustin Kimbrough</h1>
        <Image id="haustinProfileImage" src={Haustin} alt={'Haustin Kimbrough'} roundedCircle />
        <div id="haustinLinks">
          <a id="haustinLinkedIn" href='https://www.linkedin.com/in/haustin-kimbrough/' target='_blank'>
            <img alt="linkedIn" src={linkedIn} />
          </a>
          <a id="haustinGithub" href='https://github.com/hkimbrough22' target='_blank'>
            <img alt="GitHub" src={gitHub} />
          </a>
          <a id="haustinEmail" href='mailto:haustin.kimbrough@hotmail.com' target='_blank'>
            <img alt="email" src={email} />
          </a>
        </div>
        <p>Haustin comes from a military background specifically in the intelligence industry and, most recently, as an educator for the US Army. Married to his beautiful wife Shania, they have an eight month old daughter, Winter Sofia Kimbrough, keeping them company.<br/> He is a foodie who loves video games, deer hunting, mowing the grass, and marvel movies! He looks forward to his career in tech and dreams of owning his own business one day!</p>
      </div>
    </div>
  );
};


export default AboutUs;
