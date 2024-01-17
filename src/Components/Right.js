import React, {useRef, useEffect} from 'react';
import './Right.css';
import Project from './Project';
import ProjectCatalog from './ProjectCatalog';
import SkillSection from './SkillSection';

//
import connectImg from '../Images/connect-wallpaper.png'
import cartImg from '../Images/cart-wallpaper.png'
import chatImg from '../Images/chat-wallpaper.png'
import Contact from './Contact';
import gotoIcon from '../Images/arrow-32-128.png'
import jotionImg from '../Images/temp.png'
import syncImg from '../Images/sync.png'

function Right(props) {

  const [showCatalog, setShowCatalog] = React.useState(false)
  const [skillType, setSkillType] = React.useState('all')

  const go2Catalog = () => {
    setShowCatalog(true)
    // scroll to to of the page
    window.scrollTo(0, 0)
  }

  const [projects, setProjects] = React.useState([
    {
      id: 4,
      title: "Jotion - a notion clone",
      desc: "A clone of NOTION made by following tutorial of CodeWithAntonio",
      tech: "Topics covered include: React, Nextjs, Tailwind, Convex, Clerk, etc",
      img: jotionImg,
      link: 'https://main--comfy-jelly-fb46bb.netlify.app/'
    },
     {
      id: 5,
      title: "SynchroNaut - A Project Mangement tool",
      desc: "A project management tools with capability of chatting, collaborate between users, etc",
      tech: "Topics covered include: React, CSS, Firebase, Nodejs, Expressjs, MongoDB, etc",
      img: syncImg,
      link: "https://synchronaut.vercel.app/"
    },
    {
      id:1,
      title:'Connect',
      desc: "A web app that inspired by Google's gmail along with personal task manager",
      tech: "Topics Covered include: React, Node, Express, MongoDB, JWT, REST API, Material UI, and more",
      img: connectImg,
      link: 'https://connect-blond-chi.vercel.app/'


    }

])


  const chanegSkillType = (e) => {
    setSkillType(e.target.value)
  }

  // scroll -
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (isInViewport(aboutRef.current)) {
        props.setPort('about')
      } else if (isInViewport(skillsRef.current)) {
        props.setPort('skills')
      } else if (isInViewport(projectsRef.current)) {
        props.setPort('projects')
      } else if (isInViewport(contactRef.current)) {
        props.setPort('contact')
      }
    };

    // Add an event listener for scroll events
    const main= mainRef.current
    main.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to check if an element is in the viewport
  const isInViewport = (element) => {
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    return (
      rect.top >= -4 &&
      rect.bottom <= window.innerHeight 
      

    );
  };

  return (
    <div className={showCatalog ? 'right2':'right'} ref={mainRef}>
                {showCatalog && <ProjectCatalog setCatalog={setShowCatalog} />}

      <p className='right_about_title'>About Me</p>
      <div className='right_intro' id='about' ref={aboutRef}>
        <p className='right_intro1'>
        Throughout my academic journey at Centennial College in Toronto, I've been deeply immersed in the realms of Software Engineering and Artificial Intelligence. My passion for these fields has driven me to take on a variety of personal projects, spanning disciplines such as Full Stack Web development, Data Science, Artificial Intelligence, and Databases. These projects have not only expanded my technical skills but also allowed me to explore the practical applications of my studies.<br/><br/>
        Collaborating with fellow students on academic projects has further enriched my education, providing hands-on experience and fostering a spirit of teamwork. As I continue on this path, my aim is to leverage my knowledge and creativity to contribute to the ever-evolving tech landscape.<br/><br/>
        Beyond my digital pursuits, I find solace in listening to music, quality time with loved ones, and virtual adventures
        </p>
        </div>
        <div className='right_projects' id='projects' ref={projectsRef}>
          {projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              desc={project.desc}
              tech={project.tech}
              img={project.img}
              link={project.link}
            />
          ))}
          <p className='catalog' onClick={go2Catalog}>View Project Catalog
          <img src={gotoIcon} className='gotoIcon' alt='gotoIcon' />
          </p>
        </div>

      <div className='right_skills' id='skills' ref={skillsRef}>
        <select className='right_skills_select' onChange={chanegSkillType}>
          <option value='all'>All</option>
          <option value='full_stack'>Full Stack</option>
          <option value='front'>Frontend</option>
          <option value='back'>Backend</option>
          <option value='data_science'>Data Science</option>
          <option value='database'>Database</option>
          <option value='test'>Testing</option>
          <option value='android'>Android</option>
          <option value='lang'>Languages</option>
          <option value='vtools'>Visualization Tools</option>
          <option value='other'>Other Tech</option>
        </select>

        <SkillSection type={skillType}/>
        
        </div>
<div className='right_contact' id='contact' ref={contactRef}>
  <p className='reachme'>Reach out to me</p>
  <p className='reachme_tag'>I'm currently looking for new opportunities, my inbox is always open. 
  <Contact  />

</p>
  </div>
       
    </div>
  )
}

export default Right
