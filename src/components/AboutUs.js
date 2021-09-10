import React from 'react';
import '../css/Profile.css';
import Image from 'react-bootstrap/Image';
import Sarah from '../assets/sarahphoto.jpg';
import Justin from '../assets/justin-photo.jpg';
import email from '../assets/emailIcon.png';
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
        <p>Sarah is a former ICU nurse and musician, pursuing her passion for software development. She is committed to creating software that's accessible to everyone, with an approachable and inviting touch.</p>
      </div>
      <div key={2} id="justinaboutus">
        <h1>Justin Hamerly</h1>
        <Image id="justinProfileImage" src={Justin} alt={'Justin Hamerly'} roundedCircle />
        <div id="justinLinks">
          <a id="justinLinkedIn" href='https://www.linkedin.com/in/justin-hamerly-spain/'  target='_blank'>
            <img alt="linkedIn" src={linkedIn} />
          </a>
          <a id="justinGithub" href='https://github.com/JustinHamerly' target='_blank'>
            <img alt="GitHub" src={gitHub} />
          </a>
          <a id="justinEmail" href='mailto:suvimountain@icloud.com' target='_blank'>
            <img alt="email" src={email} />
          </a>
        </div>
        <p>Bio Here</p>
      </div>
      <div key={3} id="chrisaboutus">
        <h1>Christopher Burk</h1>
        <Image id="chrisProfileImage" src='' alt={'Chris Burk'} roundedCircle />
        <div id="chrisLinks">
          <a id="chrisLinkedIn" href='https://www.linkedin.com/in/christopherburk/'  target='_blank'>
            <img alt="linkedIn" src={linkedIn} />
          </a>
          <a id="chrisGithub" href='https://github.com/cburk2019' target='_blank'>
            <img alt="GitHub" src={gitHub} />
          </a>
          <a id="chrisEmail" href='mailto:c.burk.tech@gmail.com' target='_blank'>
            <img alt="email" src={email} />
          </a>
        </div>
        <p>Bio Here</p>
      </div>
      <div key={4} id="haustinaboutus">
        <h1>Haustin Kimbrough</h1>
        <Image id="haustinProfileImage" src='' alt={'Haustin Kimbrough'} roundedCircle />
        <div id="haustinLinks">
          <a id="haustinLinkedIn" href='https://www.linkedin.com/in/haustin-kimbrough/'  target='_blank'>
            <img alt="linkedIn" src={linkedIn} />
          </a>
          <a id="haustinGithub" href='https://github.com/hkimbrough22' target='_blank'>
            <img alt="GitHub" src={gitHub} />
          </a>
          <a id="haustinEmail" href='mailto:haustin.kimbrough@hotmail.com' target='_blank'>
            <img alt="email" src={email} />
          </a>
        </div>
        <p>Bio Here</p>
      </div>
    </div>
  );
};


export default AboutUs;
