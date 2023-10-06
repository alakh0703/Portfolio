import React, { useEffect } from 'react';
import './Left.css';
import githubIcon from '../Images/icons8-github (1).svg'
import LinkedInIcon from '../Images/icons8-linkedin (1).svg'
import profileIcon from '../Images/profile.jpeg'

function Left(props) {
  const [aboutActive, setAboutActive] = React.useState(true)
  const [projectActive, setProjectActive] = React.useState(false)
  const [skillActive, setSkillActive] = React.useState(false)
  const [contactActive, setContactActive] = React.useState(false)

  useEffect(() => {
    if(props.Port === 'about'){
      setAboutActive(true)
      setProjectActive(false)
      setSkillActive(false)
      setContactActive(false)

    }else if(props.Port === 'projects'){
      setAboutActive(false)
      setProjectActive(true)
      setSkillActive(false)
      setContactActive(false)
    }
    else if(props.Port === 'skills'){
      setAboutActive(false)
      setProjectActive(false)
      setSkillActive(true)
      setContactActive(false)
    }
    else if(props.Port === 'contact'){
      setAboutActive(false)
      setProjectActive(false)
      setSkillActive(false)
      setContactActive(true)
    }


  }, [props.Port])

  function go2Github(){
    // open in new tab
    window.open('https://github.com/alakh0703')

  }
  function go2LinkedIn(){
    window.open('https://www.linkedin.com/in/alakh-patel/')
  }
  return (
    <div className='left'>
      <div className='left__img'>
        <img src={profileIcon} alt='profile' className='profile_img' />
      </div>
       <div className='left__top'>
        <p className='lt__name'>Alakh Patel</p>
        <p className='lt__tagline'>Student at Centennial College</p>
        <p className='lt__tagline2'>Enthusiastic Student of Tech, Innovating<br />  Through Collaboration and Exploration.</p>

        </div>
        <div className='left__middle'>
            <p className={aboutActive ? 'lm_sec1 active':'lm_sec1'}><a href='#about' >About</a></p>
            <p className={projectActive ? 'lm_sec2 active':'lm_sec2'}><a href='#projects'>Projects</a></p>
            <p className={skillActive ? 'lm_sec2 active':'lm_sec2'}><a href='#skills' >Skills</a></p>
            <p className={contactActive ? 'lm_sec3 active':'lm_sec3'}><a href="#contact" >Contact</a></p>
        </div>
        <div className='left__bottom'>

              <img src={githubIcon} alt='github' onClick={go2Github} className='git_icon' />
              <img src={LinkedInIcon} alt='linkedin' onClick={go2LinkedIn} className='link_icon2' />

        </div>
    </div>
  )
}

export default Left