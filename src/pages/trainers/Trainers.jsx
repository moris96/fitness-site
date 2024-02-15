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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi in leo in eros commodo volutpat ac sed dolor.</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi in leo in eros commodo volutpat ac sed dolor.</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi in leo in eros commodo volutpat ac sed dolor.</p>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Trainers;
