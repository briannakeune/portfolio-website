import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Skills() {
  const data = useStaticQuery(graphql`
    query {
      allContentJson {
        edges {
          node {
            skills {
              icon
              id
              sub_skills {
                icon
                id
                type
              }
            }
          }
        }
      }
    }
  `)
  const skills = data.allContentJson.edges[0].node.skills
  return (
    <div id="skills" className="skills-container container">
      {skills.map(({ id, sub_skills }) => {
        return <SkillContainer key={id} skill={id} subSkills={sub_skills} />
      })}
    </div>
  )
}

function SkillContainer({ skill, subSkills }) {
  const skillClass = skill.toLowerCase()
  if (skill === null) return null
  return (
    <div className={`skill-container ${skillClass}`}>
      <h6>{skill}</h6>
      <ul className={`${skillClass}-ul`}>
        {subSkills.map(({ id }) => (
          <li key={`${skill}-${id}`}>- {id}</li>
        ))}
      </ul>
    </div>
  )
}
