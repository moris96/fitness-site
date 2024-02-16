import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Importing social media icons
import './Trainers.css';

const Trainers = () => {
  return (
    <div id='trainers'>
        {/* <h1>Our Trainers</h1> */}
        <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap">
            <div className="card d-flex position-relative flex-column">
            <div className='imgContainer'>
                <img className='leo' src='https://pbs.twimg.com/profile_images/599698770385719297/EZARvtxK_400x400.jpg' />
            </div>
            <div className="content">
                <h2>Leonidas</h2>
                {/* Social media icons */}
                <div className="social-icons">
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <p>The legend himself: King Leonidas of Sparta. He who led 300 men against an army of tens of thousands from Persia. No man is more worthy of training you to be a shield and spear of Sparta.</p>
            </div>
            </div>
            
            <div className="card d-flex position-relative flex-column">
            <div className='imgContainer'>
                <img className='kass' src='https://cdn.vox-cdn.com/thumbor/8vaZT34oP9t_etgrtyjbja8tb2o=/0x0:3806x2142/1200x800/filters:focal(1463x45:2071x653)/cdn.vox-cdn.com/uploads/chorus_image/image/61706841/Screen_Shot_2018_09_10_at_12.07.18_PM.0.png' />
            </div>
            <div className="content">
                <h2>Kassandra</h2>
                {/* Social media icons */}
                <div className="social-icons">
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <p>Hero of Sparta, Athens, and Atlantis. Descendant and worthy heir of Leonidas. She will help coach you on your journey as a Demigod as well as other valuable skills like stealth, archery, and hunting. She is also our resident Beast Master and will guide you on how to train and befriend the mightiest of creatures.</p>
            </div>
            </div>

            <div className="card d-flex position-relative flex-column">
            <div className='imgContainer'>
                <img className='krat' src='https://oyster.ignimgs.com/mediawiki/apis.ign.com/god-of-war-ragnarok/d/dc/Kratos.jpg' />
            </div>
            <div className="content">
                <h2>Kratos</h2>
                {/* Social media icons */}
                <div className="social-icons">
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <p>He of many names: God of War, Ghost of Sparta, son of Zeus, slayer of Gods and Titans alike. Kratos offers the most intense physical training and will only coach those serious enough about ascending to Godhood.</p>
            </div>
            </div>

            <div className="card d-flex position-relative flex-column">
            <div className='imgContainer'>
                <img className='socrates' src='https://pbs.twimg.com/media/Dh29-ZiV4AAptdw.jpg' />
            </div>
            <div className="content">
                <h2>Socrates</h2>
                {/* Social media icons */}
                <div className="social-icons">
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <p>Although born Athenian, Socrates has agreed to teach philosophy and the importance of the arts and sciences to help sharpen warriors' minds so they are sharper in and out of combat. Please note to be careful not to get wrapped up in a philosophical debate lest you wish to debate hours without end.</p>
            </div>
            </div>

        </div>
    </div>
  );
};

export default Trainers;
