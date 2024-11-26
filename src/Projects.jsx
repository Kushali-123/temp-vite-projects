import React from 'react'
import { useFetchProjects } from './fetchProjects'

const Projects = () => {
  const { loading, projects } = useFetchProjects()
  console.log(loading, projects)

  if (loading) {
    return (
      <div className="projects">
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <div className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className='projects-center'>
        {projects.map((project) => {
          const {url, title, img, id} = project;
          return(
            <a key = {id} href={url} target='_blank' rel = 'noreferrer' className='project'>
              <img src = {img} alt = {title} className='img'></img>
              <h5>{title}</h5>
            </a>
          )
        })}
      </div> 
    </div>
  )
}

export default Projects
