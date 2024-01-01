import { useEffect, useState } from 'react';
import projects from '../data/projects';
import { useNavigate } from 'react-router-dom';
import Loading from '../animations/Loading';

import '../styles/projects.css';

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [myprojects, setMyprojects] = useState([]);
  const navigate = useNavigate();
  const [checkApi, setCheckApi] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://pzopztdg6g.execute-api.us-east-1.amazonaws.com/default/projectsdata'
  //       );

  //       if (!response.ok) {
  //         setCheckApi(true);
  //         throw new Error('Failed to fetch data');
  //       }

  //       setLoading(false);
  //       setCheckApi(false);
  //       const data = await response.json();
  //       setMyprojects(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // if (setCheckApi === true)
  //   return (
  //     <div className='failed-fetch-main'>
  //       <div className='projects-loading'>
  //         <Loading />
  //       </div>
  //       <p className='failed-fetch'>
  //         Failed to fetch data from api try again after sometime
  //       </p>
  //     </div>
  //   );

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const res = await projects;
        setLoading(false);
        setMyprojects(res);
      } catch (err) {
        setLoading(true);
      }
    };
    fetchAllProjects();
  }, []);

  if (loading) {
    return (
      <div className='projects-loading'>
        <Loading />
      </div>
    );
  }

  const handleExplore = (project) => {
    navigate(`projectdetails/` + project.id, { state: { project } });
  };

  // const handleProjectP = () => {
  //   // Go to the previous project
  //   setCurrentProjectIndex((prevIndex) =>
  //     prevIndex > 0 ? prevIndex - 1 : prevIndex
  //   );
  // };

  // const handleProjectN = () => {
  //   // Go to the next project
  //   setCurrentProjectIndex((prevIndex) =>
  //     prevIndex < myprojects.length - 1 ? prevIndex + 1 : prevIndex
  //   );
  // };

  // const currentProject = myprojects[currentProjectIndex];
  // const stool = currentProject.tools.split(',').map((item) => item.trim());
  // const slang = currentProject.lang.split(',').map((item) => item.trim());

  const projectElements = myprojects.map((project) => {
    return (
      <div className='project' key={project.id}>
        <div className='project-splitbtn'>
          <div className='project-img'>
            <img src={project.imgs} alt='project image' />
          </div>
          <div className='project-overview'>
            <div className='project-info'>
              <h1 className='project-name'>{project.name}</h1>
            </div>
            <div className='project-desc'>
              <ul className='project-lang'>
                {project.langs.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className='p-lang'
                      style={{ backgroundColor: item.color }}
                    >
                      {item.lang}
                    </li>
                  );
                })}
              </ul>
              <ul className='project-tools'>
                {project.tools.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className='p-tool'
                      style={{ backgroundColor: item.color }}
                    >
                      {item.tool}
                    </li>
                  );
                })}
              </ul>
              <p>{project.description}</p>
            </div>
          </div>
        </div>

        <div className='project-details'>
          <button
            className='details-btn btn'
            onClick={() => handleExplore(project)}
          >
            Details
          </button>
        </div>
        {/* <Link to={`/projectdetails/${project.id}`} state={{ project }}>
          View project
        </Link> */}
      </div>
    );
  });

  return (
    <div className='projects-main'>
      <div className='projects-component'>
        <h2>Projects</h2>
        {projectElements}
      </div>
    </div>
  );
};

export default Projects;
