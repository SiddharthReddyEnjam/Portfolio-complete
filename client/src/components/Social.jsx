import '../styles/social.css';

const Social = () => {
  return (
    <div className='social-main'>
      <div className='social-component'>
        <div
          className='badge-base LI-profile-badge linkedin-main'
          data-locale='en_US'
          data-size='large'
          data-theme='light'
          data-type='HORIZONTAL'
          data-vanity='siddharth-enjam'
          data-version='v1'
        >
          <a
            className='badge-base__link LI-simple-link'
            href='https://www.linkedin.com/in/siddharth-enjam?trk=profile-badge'
          ></a>
        </div>
      </div>
    </div>
  );
};

export default Social;
