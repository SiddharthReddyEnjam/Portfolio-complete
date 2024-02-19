import '../styles/footer.css';
import { AiOutlineCopy, AiFillCopy } from 'react-icons/ai';
import { useState } from 'react';

const resume_link =
  'https://drive.google.com/file/d/190gOypXWl3E1NpZ_twvlVUdg2t9rYT79/view?usp=drive_link';

const Footer = () => {
  const [fill, setFill] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = async () => {
    setFill(true);
    await navigator.clipboard.writeText(resume_link);
    setTimeout(() => {
      setFill(false);
    }, 500);
  };

  return (
    <div className='footer'>
      <div className='footer-main'>
        <div className='footer-component'>
          <div className='footer-name'>
            <h2>Siddharth Reddy Enjam</h2>
            <div className='resume-copy'>
              <a href={resume_link} target='_blank' rel='noopener noreferrer'>
                Click to view resume..
              </a>

              <div
                className='tooltip-container'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <button className='no-btn copy-link' onClick={handleCopy}>
                  {fill ? <AiFillCopy /> : <AiOutlineCopy />}
                </button>
                {isHovered && (
                  <div className='tooltip-text'>{fill ? 'copied' : 'copy'}</div>
                )}
              </div>
            </div>
          </div>

          <div className='footer-links'>
            <p className='social'>Social</p>
            <a
              href='mailto: siddharthenjam@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <ion-icon name='mail'></ion-icon>Mail
            </a>
            <a
              href='https://www.linkedin.com/in/siddharth-enjam/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <ion-icon name='logo-linkedin'></ion-icon>Linked In
            </a>
            <a
              href='https://github.com/SiddharthReddyEnjam'
              target='_blank'
              rel='noopener noreferrer'
            >
              <ion-icon name='logo-github'></ion-icon>Github
            </a>
          </div>
        </div>
        <div className='cr'>
          <p>Copyright © 2024 by Siddharth Reddy Enjam</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
