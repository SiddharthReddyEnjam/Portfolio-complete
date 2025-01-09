// import { useOutletContext } from 'react-router-dom';
// import '../styles/social.css';

// const Social = () => {
//   const { darkTheme } = useOutletContext();

//   console.log(darkTheme);
//   return (
//     <div className='social-main'>
//       <div className='social-component'>
//         <div
//           className='badge-base LI-profile-badge linkedin-main'
//           data-locale='en_US'
//           data-size='large'
//           data-theme={`${darkTheme ? 'dark' : 'light'}`}
//           data-type='HORIZONTAL'
//           data-vanity='siddharth-enjam'
//           data-version='v1'
//         >
//           <a
//             className='badge-base__link LI-simple-link'
//             href='https://www.linkedin.com/in/siddharth-enjam?trk=profile-badge'
//           ></a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Social;

import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import '../styles/social.css';

const Social = () => {
  const { darkTheme } = useOutletContext();

  useEffect(() => {
    // Clear the existing LinkedIn badge
    const badgeContainer = document.querySelector('.linkedin-main');
    if (badgeContainer) {
      badgeContainer.innerHTML = ''; // Clear old badge
    }

    // Dynamically re-add the LinkedIn badge
    const badge = document.createElement('div');
    badge.className = 'badge-base LI-profile-badge';
    badge.setAttribute('data-locale', 'en_US');
    badge.setAttribute('data-size', 'large');
    badge.setAttribute('data-theme', darkTheme ? 'dark' : 'light');
    badge.setAttribute('data-type', 'HORIZONTAL');
    badge.setAttribute('data-vanity', 'siddharth-enjam');
    badge.setAttribute('data-version', 'v1');
    badgeContainer.appendChild(badge);

    // Reinitialize LinkedIn script
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    badgeContainer.appendChild(script);
  }, [darkTheme]); // Re-run effect when darkTheme changes

  return (
    <div className='social-main'>
      <div className='social-component'>
        <div className='linkedin-main'></div> {/* Empty container for badge */}
      </div>
    </div>
  );
};

export default Social;
