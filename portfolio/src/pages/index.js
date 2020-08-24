import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// local imports
import Navigation from "../components/Navigation.js"
import Intro from "../components/Intro.js"
import About from "../components/About.js"
import Project from "../components/Project.js"
import Contact from "../components/Contact.js"
import "../styles/styles.scss"

export default function GeneralPage() {
  const data = useStaticQuery(graphql`
    query {
      allContentJson {
        edges {
          node {
            projects {
              name
              description
              deployed_link
              position
              repos {
                fe
              }
              tech
            }
          }
        }
      }
    }
  `)
  const { projects } = data.allContentJson.edges[0].node
  return (
    <div className="App">
      <Navigation />
      <main className="main-container">
        <Intro />
        <About />
        {/* <div className="container">
          <h2 id="projects">Projects</h2>
        </div> */}
        {projects.map((project, index) => {
          return (
            <section
              id={`project-${index + 1}`}
              key={index}
              className="project section capsule"
            >
              {/* {project.name === "Gróa" ? (
                <h2 id="projects" className="container">
                  Projects
                </h2>
              ) : null} */}

              <Project project={project} index={index} />
            </section>
          )
        })}
        <Contact />
      </main>
    </div>
  )
}
