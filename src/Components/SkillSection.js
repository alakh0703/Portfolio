import React, { useEffect } from 'react';
import './SkillSection.css';
import Skill from './Skill';

function SkillSection(props) {

  // other -- heroku, vercel, render, azure, spark, 
  const skills = [
    {
      skill: 'React',
      type: ['front', 'full_stack']
    },
    {
      skill: 'Nextjs',
      type: ['front','full_stack']
    },
    {
      skill: 'Clerk',
      type: ['front','full_stack','back']
    }
    ,
    {
      skill: 'Node',
      type: ['back', 'full_stack']
    },
    {
      skill: 'Express',
      type: ['back', 'full_stack']
    },
    {
      skill: 'MongoDB',
      type: ['full_stack','database']
    },{
        skill: 'HTML/CSS',
        type: ['front']
    },
    {
      skill: 'Mongoose',
      type: ['full_stack','other']
    },
    {
      skill:'Oracle SQL',
      type:['full_stack','database']
    },
    {
      skill: 'JavaScript',
      type: ['lang']
    },
    {
      skill: 'Java',
      type: ['lang']
    },
    {
      skill: 'Python',
      type: ['lang','data_science']
    },
    {
      skill: 'Kotlin',
      type: ['lang','android']
    },
    {
      skill: 'C#',
      type: ['lang']
    },
    {
      skill: 'Redux',
      type: ['front','other']
    },
    {
      skill: 'Apollo Client',
      type: ['back', 'full_stack','other']
    },
    {
      skill: 'GraphQL',
      type: ['back', 'full_stack','other']
    },
    
    {
      skill: 'REST APIs',
      type: ['back', 'full_stack','other']
    },
    {
      skill: 'JEST',
      type: ['test'] 
    },
    {
      skill: 'Gits',
      type: ['other']
    },
    {
      skill: 'GitHub',
      type: ['other']
    },
    {
      skill: 'Jira',
      type: ['other']
    },
    {
      skill: 'Socket.io',
      type: ['back', 'full_stack','other']
    },
  
    {
      skill: 'Firebase',
      type: ['back', 'full_stack','database','other']
    },{
      skill: 'WebPack',
        type: ['other','full_stack']
    },
    {
      skill: 'Visio',
      type: ['vtools']
    },
    {
      skill: 'PowerBI',
      type: ['vtools', 'data_science']
    },
    {
      skill: 'Postman',
      type: ['back', 'full_stack','test','other']
    },
    {
      skill: 'Numpy',
      type: ['data_science']
    },
    {
      skill: 'Pandas',
      type: ['data_science']
    },
    {
      skill: 'Matplotlib',
      type: ['data_science']
    },
    {
      skill: 'Seaborn',
      type: ['data_science']
    },
    {
      skill: 'Scikit-learn',
      type: ['data_science']
    },
    {
      skill: 'Stripe',
      type: ['full_stack','back']
    }

  ]

  const [skillsToShow, setSkillsToShow] = React.useState([])

  useEffect(() => {
      if (props.type === 'all') {
        setSkillsToShow(skills)
      } else {
        setSkillsToShow(skills.filter((skill) => skill.type.includes(props.type)))
      }
    
  }, [props.type])
  return (
    <div className='skill-sec'>
      {skillsToShow.map((skill) => (
       
        <Skill
          key={skill.skill}
          skill={skill.skill}
          type={skill.type}
        />
     
      ))}
    </div>
  )
}

export default SkillSection
