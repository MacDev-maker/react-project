import './Contact.css'
import linkedInImg from '../assets/linkedin-icon.png';
import gmailImg from '../assets/gmail-icon.svg';

function Contact() {
  return (
    <footer className='footer-container' id='contact-section'>
      <h1 className='footer-title'>
        Contact
      </h1>

      <div className='contact-reach'>
        <a className="linkedin-link" href="https://linkedin.com/in/maciej-weglarz" target="_blank">
          <img className="author-icon-linkedIn" alt="linkedIn" src={linkedInImg} />
        </a>

        <a className="gmail-link" href="mailto:maciejwegdev@gmail.com" target="_blank">
          <img className="author-icon-gmail" alt="Gmail" src={gmailImg} />
        </a>
      </div>

      <p className='copyright'>
        &copy; 2026 Maciej Węglarz. All rights reserved.
      </p>    
    </footer>
  );
}

export default Contact