import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiNodedotjs,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { RiReactjsFill } from 'react-icons/ri';

const skillsData = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'programming', icon: 'C' },
      { name: 'MySQL', icon: <SiMysql /> },
    ],
  },
  {
    title: 'Data and AI',
    skills: [
      { name: 'Machine Learning', icon: null },
      { name: 'Data Science', icon: null },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML', icon: <SiHtml5 /> },
      { name: 'CSS', icon: <SiCss3 /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'ReactJs', icon: <RiReactjsFill /> },
      { name: 'NodeJs', icon: <SiNodedotjs /> },
    ],
  },
];

export default skillsData;
