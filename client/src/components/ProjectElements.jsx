// Not using anywhere currently

import { useEffect, useState } from 'react';
import projects from '../data/projects';
import Loading from '../animations/Loading';
import { useNavigate } from 'react-router-dom';

export default function ProjectElements() {
  const [myprojects, setMyprojects] = useState([]);
  const [loading, setLoading] = useState(true);
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
    return (
      <div className='projecthome-main'>
        <div className='projecthome-component'>
          <h2>Projects</h2>
          <Loading />
        </div>
      </div>
    );
  }

  const handleExplore = (project) => {
    navigate(`/projectdetails/` + project.id, { state: { project } });
  };

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

  return <div className='project-elements'>{projectElements}</div>;
}
