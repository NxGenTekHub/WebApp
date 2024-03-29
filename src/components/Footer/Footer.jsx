import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerColumn">
          <div className="columnTitle">
            Company
            <hr className='columnTitleHR'/>
          </div>
          <div className="columnText">
            <div className="columnTextItem">
              <a href="/#">About</a>
              {/* <button onClick={handleAboutClick} className="link-button">About</button> */}
            </div>
            <div className="columnTextItem">
              <a href="/#">Services</a>
            </div>
            <div className="columnTextItem">
              <a href="/#">Community</a>
            </div>
            <div className="columnTextItem">
              <a href="/#">Blog</a>
            </div>
          </div>
        </div>
        <div className="footerColumn">
          <div className="columnTitle">
            Resources
            <hr className='columnTitleHR'/>
          </div>
          <div className="columnText">
            <div className="columnTextItem">
              <a href="/#">Help</a>
            </div>
            <div className="columnTextItem">
              <a href="/#">Terms</a>
            </div>
            <div className="columnTextItem">
              <a href="/#">Privacy</a>
            </div>
          </div>
        </div>
        <div className="footerColumn">
          <div className="columnTitle">
            Support
            <hr className='columnTitleHR'/>
          </div>
          <div className="columnText">
            <div className="columnTextItem">
              <a href="/#">Quick Search</a>
            </div>
            <div className="columnTextItem">
              <a href="/#">Popular Help Topics</a>
            </div>
            <div className="columnTextItem">
              <a href="/#">Product FAQs</a>
            </div>
          </div>
        </div>
        <div className="footerColumn">
          <div className="columnTitle">
            Contact
            <hr className='columnTitleHR'/>
          </div>
          <div className="columnText">
            <div className="columnTextItem">
              Phone: +1 (443) 254-7691
            </div>
            <div className="columnTextItem">
              Email: <u><a href='/#'>hr@nxgentekhub.com</a></u>
            </div>
            <div className="columnTextItem">
              Address:  5023 Crape Myrtle ct, <br/>Ellicott City, MD 21042
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
