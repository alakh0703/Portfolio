import React ,{useEffect, useRef}from 'react';
import './ProjectCatalog.css';
import Project from './Project';
import connectImg from '../Images/connect-wallpaper.png'
import cartImg from '../Images/cart-wallpaper.png'
import chatImg from '../Images/chat-wallpaper.png'
import Contact from './Contact';
import gotoIcon from '../Images/arrow-34-128.png'
import jotionImg from '../Images/temp.png'
function ProjectCatalog(props) {
  const projlogRef = useRef(null);

  
  
  
  const goback = () => {
    props.setCatalog(false)
  }
  const [projects, setProjects] = React.useState([
    {
      id: 4,
      title: "Jotion - a notion clone",
      desc: "A clone of NOTIOn made by following tutorial of CodeWithAntonio",
      tech: "Topics covered include: React, Nextjs, Tailwind, Convex, Clerk, etc",
      img: jotionImg,
      link: 'https://main--comfy-jelly-fb46bb.netlify.app/'
    },
    {
      id:1,
      title:'Connect',
      desc: "A web app that inspired by Google's gmail along with personal task manager",
      tech: "Topics Covered include: React, Node, Express, MongoDB, JWT, REST API, Material UI, and more",
      img: connectImg,
      link: 'https://connect-blond-chi.vercel.app/'


    },
  {
    id:2,
    title:'Cart-Simulator',
    desc: "A Simple web app that simulates a shopping cart with ability to add items, remove items and filter products",
    tech: "Topics Covered include: React, React Hooks, Fake Product API, and more",
    img: cartImg,
    link: 'https://cart-simulator.vercel.app/'
  },
{
  id:3,
  title:'Chat-Breeze',
  desc: "A simple chat app with ability to create a room and chat with friends",
  tech: "Topics Covered include: React, React Hooks, Socket.io, and more",
  img: chatImg,
  link: 'https://chat-breeze.vercel.app/'
}])

  return (
    <div className='project_catalog' ref={projlogRef}>
      <p className='pc_goback' onClick={goback}>
      <img src={gotoIcon} alt='goto' className='pc_goto' />
      Alakh Patel</p>
      <p className='pc_title'>All Projects</p>
      <div className='project_catalog_main'>
       {projects.map((project) => (
            <Project
            tp='catalog'
              key={project.id}
              title={project.title}
              desc={project.desc}
              tech={project.tech}
              img={project.img}
              link={project.link}
            />
          ))}
          </div>
    </div>
  )
}

export default ProjectCatalog
