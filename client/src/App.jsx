import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import './styles/query.css';
import Chatbot from './components/Chatbot';
import { useState, useEffect } from 'react';
// import useScrollRestoration from './animations/useScrollRestoration';

const App = () => {
  const systemTheme = useSystemTheme();
  const [darkTheme, setDarkTheme] = useState(systemTheme);
  // useScrollRestoration();

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={`App ${darkTheme && 'dark-theme'} `}>
      <ScrollToTop />
      <Navbar toggleTheme={toggleTheme} darkTheme={darkTheme} />
      <Outlet context={{ darkTheme }} />
      <Chatbot darkTheme={darkTheme} />
      <Footer darkTheme={darkTheme} />
    </div>
  );
};

const useSystemTheme = () => {
  const [systemTheme, setSystemTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    // Add event listener
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup event listener
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return systemTheme === 'dark' ? true : false;
};

export default App;
