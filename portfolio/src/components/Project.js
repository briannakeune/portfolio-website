import React from "react"
import SVGIcon from "./SVGIcon.js"
import groaPreview from "../images/groa.png"
import lambdaBugTrackerPreview from "../images/lambdaBugTracker.png"
import appraisersBffPreview from "../images/appraisersBFF.png"

export default function Project({ project, index }) {
  const { name, description, deployed_link, position, repos, tech } = project
  const fe_repo = repos[0]
  return (
    <div className={`project container index-${index}`}>
      {project.name === "Gróa" ? (
        <h2 id="projects" className="container">
          Projects
        </h2>
      ) : null}
      <div className="project-content">
        <ProjectImage projectName={name} />
        <div className="project-info">
          <ProjectTitle
            deployed_link={deployed_link}
            name={name}
            position={position}
          />
          <ProjectInfo
            description={description}
            tech={tech}
            fe_repo={fe_repo}
            deployed_link={deployed_link}
          />
        </div>
      </div>
    </div>
  )
}

function ProjectTitle({ deployed_link, name, position }) {
  return (
    <div className="title">
      <a href={deployed_link}>
        <h4>{name}</h4>
      </a>
      <p>{position}</p>
    </div>
  )
}
function ProjectInfo({ description, tech, fe_repo, deployed_link }) {
  return (
    <div className="project-info">
      <p className="description">{description}</p>
      <ProjectStack tech={tech} />
      <ProjectLinks fe_repo={fe_repo} deployed_link={deployed_link} />
    </div>
  )
}
function ProjectStack({ tech }) {
  return (
    <div className="project-tech-stack">
      <ul>
        {tech.map((tool, index) => (
          <li key={`${tool}-${index}`}>{tool}</li>
        ))}
      </ul>
    </div>
  )
}
function ProjectLinks({ fe_repo, deployed_link }) {
  return (
    <div className="project-links">
      <a href={deployed_link}>
        <SVGIcon name={"external-link-symbol"} size={30} />
      </a>
      <a href={fe_repo}>
        <SVGIcon name={"github-logo"} size={30} />
      </a>
    </div>
  )
}

function ProjectImage({ projectName }) {
  const previews = {
    Gróa: groaPreview,
    "Appraiser's BFF": appraisersBffPreview,
    "Lambda Bug Tracker": lambdaBugTrackerPreview,
  }
  return (
    <div className="project-img">
      <img
        src={previews[projectName]}
        alt={`Preview of ${projectName} homepage.`}
      />
    </div>
  )
}
