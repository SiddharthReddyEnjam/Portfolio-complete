import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import './styles/query.css';

const App = () => {
  return (
    <div className='App'>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
