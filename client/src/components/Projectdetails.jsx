import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/projectdetails.css';

const Projectdetails = () => {
  const location = useLocation();
  const project = location.state.project;
  const navigate = useNavigate();
  // const { id } = useParams();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className='project-dtl-main'>
      <div className='pdtl-component'>
        <div className='pdtl'>
          <h1>{project.name}</h1>
          <p className='pdesc'>{project.description}</p>
          <p className='pdetail'>{project.details}</p>
        </div>
        <button className='btn pdtl-btn' onClick={() => handleBack()}>
          {`Go back to project overview <<`}
        </button>
      </div>
    </div>
  );
};

export default Projectdetails;
