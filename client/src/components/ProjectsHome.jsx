import { useEffect, useState } from 'react';
import projects from '../data/projects';
import { useNavigate } from 'react-router-dom';
import Loading from '../animations/Loading';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/Bs';

import '../styles/projectshome.css';

const ProjectsHome = () => {
  const [loading, setLoading] = useState(true);
  const [myprojects, setMyprojects] = useState([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const res = await projects;
        setLoading(false);
        setMyprojects(res);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    fetchAllProjects();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const handleExplore = (project) => {
    navigate(`/projectdetails/` + project.id, { state: { project } });
  };

  const handleProjectP = () => {
    // Go to the previous project
    setCurrentProjectIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const handleProjectN = () => {
    // Go to the next project
    setCurrentProjectIndex((prevIndex) =>
      prevIndex < myprojects.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const currentProject = myprojects[currentProjectIndex];
  // const stool = currentProject.tools.split(',').map((item) => item.trim());
  // const slang = currentProject.lang.split(',').map((item) => item.trim());

  return (
    <div className='projecthome-main'>
      <div className='projecthome-component'>
        <h2>Projects</h2>
        <div className='projecthome'>
          <div className='projecthome-splitbtn'>
            <div className='projecthome-img'>
              <img src={currentProject.img} alt='project image' />
            </div>
            <div className='projecthome-overview'>
              <div className='projecthome-info'>
                <h1 className='projecthome-name'>{currentProject.name}</h1>
              </div>
              <div className='projecthome-desc'>
                <ul className='projecthome-lang'>
                  {currentProject.langs.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className='phome-lang'
                        style={{ backgroundColor: item.color }}
                      >
                        {item.lang}
                      </li>
                    );
                  })}
                </ul>
                <ul className='projecthome-tools'>
                  {currentProject.tools.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className='phome-tool'
                        style={{ backgroundColor: item.color }}
                      >
                        {item.tool}
                      </li>
                    );
                  })}
                </ul>
                <p>{currentProject.description}</p>
              </div>
            </div>
          </div>
          <div className='projecthome-details'>
            <button
              className='detailshome-btn btn'
              onClick={() => handleExplore(currentProject)}
            >
              Details
            </button>
          </div>
        </div>
        <div className='reviewhome'>
          <div className='no-btn'>
            <BsFillArrowLeftCircleFill
              className={`
            ${currentProjectIndex === 0 ? 'disable' : 'pn-btn'}`}
              onClick={handleProjectP}
              disabled={currentProjectIndex === 0}
            />
          </div>
          <div className='no-btn'>
            <BsFillArrowRightCircleFill
              className={`
            ${
              currentProjectIndex === myprojects.length - 1
                ? 'disable'
                : 'pn-btn'
            }`}
              onClick={handleProjectN}
              disabled={currentProjectIndex === myprojects.length - 1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHome;
