import React from 'react'
import Skill from './Skill';
import './Project.css';

import linkIcon from "../Images/link-64.png"



function Project(props) {
  const viewProject = () => {
    window.open(props.link, '_blank')
  }
  const isCatalog = props.tp === 'catalog' ? true : false
  return (
    <div className={isCatalog ?  'project3':'project'} onClick={viewProject}>   
        <div className='project_left'>
            <img src={props.img} alt='Wallpaper' className='pro_img'/>
        </div>
        <div className='project_right'>
            <p className='project_title'>{props.title}
            <img src={linkIcon} alt='link' className='link_icon'/>
            </p>
            <p className='project_desc'>{props.desc}
            <br/><br/>
           {props.tech}
            </p>

            </div>  
    </div>
  )
}

export default Project