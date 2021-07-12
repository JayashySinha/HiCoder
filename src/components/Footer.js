import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
    <img className ='footer-img'  src="https://hicoder.in/assets/images/bg/footer-bg-bw.jpg"/>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
        <div className="footer-details">
        <h1><img className="footer-logo" src="https://hicoder.in/assets/images/logo-dark.png"/></h1>
        <p className="footer-delails-text"><br/>HiCoder enables students in being capable to<br/>develop production grade application by availing<br/>full stack development, Soft skills, Analytics and<br/>project management skills to get a core software<br/>job in the Industry.</p>
        <br/><br/>
        <button type="button" class="btn btn-primary btn-lg">APPLY NOW</button>
        <br/><br/>

        </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Info</h2>
            <Link to='/'>Home</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Blog</Link>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Contact</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'><small> 264/L3, Kavuri Hills Phase 2, HiTech City, Madhapur, Telangana,
                                    India, PIN: 500033</small></Link>
            <Link to='/'><a href="tel:+919206980980">(+91) 9206 980 980</a></Link>
            <Link to='/'><a href="mailto:admission@hicoder.in">admission@hicoder.in</a></Link>
            <Link to='/'><i class="flaticon-clock"/>10:00AM - 06:00PM</Link>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <hr/>
        <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' >
            <p className="copyright">© Copyright | 2020 HiCoder Pvt. Ltd. | All Rights Reserved.<br/>Privacy Policy | Terms of Service | * Registration Charges Applied</p>
             
            </Link>
          </div>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
