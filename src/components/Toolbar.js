import React from 'react';
import '../App.css';
import './Toolbar.css';

function Toolbar() {
  return (
      <div className="toolbar-area hidden-md">
      <div className="container">
          <div className="row">
              <div className="col-md-5">
                  <div className="toolbar-contact">
                      <ul>
                          <li><i className="flaticon-email"></i><a href="mailto:admission@hicoder.in">admission@hicoder.in</a></li>
                          <li><i className="flaticon-call"></i><a href="tel:+919206980980">(+91) 9206 980 980</a></li>
                      </ul>
                  </div>
              </div>
              <div className="col-md-7">
                  <div className="toolbar-sl-share">
                      <ul>
                          <li className="opening"> <i className="flaticon-clock"></i> Mon - Fri: 10:00am - 06.00pm</li>
                          <li><a href="https://www.facebook.com/hicoderofficial" target="_blank"><i className="fa fa-facebook"></i></a></li>
                          <li><a href="https://www.instagram.com/hicoderofficial/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                          <li><a href="https://twitter.com/hicoderofficial" target="_blank"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="https://www.linkedin.com/company/69513594/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
   );
}

export default Toolbar;
