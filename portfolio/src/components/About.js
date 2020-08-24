import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Skills from "./Skills.js"
export default function About() {
  const data = useStaticQuery(graphql`
    query {
      allContentJson {
        edges {
          node {
            personal_statement
          }
        }
      }
    }
  `)
  const { personal_statement } = data.allContentJson.edges[0].node
  return (
    <section id="about" className="about section capsule">
      <div className="about container">
        <h2>About Me</h2>
        <div className="about content">
          <p>{personal_statement}</p>
          <img src="https://via.placeholder.com/300" alt="place holder" />
        </div>
      </div>
      <Skills />
    </section>
  )
}
