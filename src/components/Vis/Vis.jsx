import React from 'react';
import { about } from '../../data';
import './Vis.css';
import './../../App.css';

const Vis = () => {
  const pdfUrl = 'https://drive.google.com/file/d/1ExPFegSKCRYduU2u4Ig6WhADbexHOZQC/preview';

  return (
    <div className="vis-container">
      {/* Banner above the PDF viewer */}
      <div className="banner">
        <div className="banner-content">
          <div className="banner-logo-parent">
            <img src={'/BosVisLogo.png'} alt="Vis Logo" className="banner-logo" />
          </div>
          <div className="banner-text-content">
            <div className='text-child'>
              <span className="banner-date vis__section__title">Oct 13-18, 2024</span>
            </div>
            <div className='text-child'>

              <span className="banner-text vis__section__title">Mini-Vis Boston</span>
            </div>
            <div className='text-child'>
              <span className="vis__section__subtitle rsvp-text"><a href="https://forms.gle/BGPeSUtmgoHgha2c9" target="_blank" rel="noreferrer">RSVP</a></span>
              <span className="vis__section__subtitle rsvp-text"><a href="https://join.slack.com/t/boston-vis/shared_invite/zt-2s4vkbvg5-OCFX~flb61l_6YevGkTNNA" target="_blank" rel="noreferrer">Slack</a></span>
            </div>
          </div>
        </div>
      </div>

      {/* Embed PDF */}
      <div className="pdf-viewer">
        <iframe
          src={pdfUrl}
          className="responsive-iframe"
          title="PDF Viewer"
        ></iframe>
      </div>
    </div>
  );
};

export default Vis;