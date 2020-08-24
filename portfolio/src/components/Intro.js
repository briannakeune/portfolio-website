import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Into() {
  const data = useStaticQuery(graphql`
    query ProjectsSectionQuery {
      allContentJson {
        edges {
          node {
            name
            title
          }
        }
      }
    }
  `)
  const { name, title } = data.allContentJson.edges[0].node
  const content = {
    greeting: "Hi my name is\n",
    funFact: "I code every day.",
  }
  return (
    <section id="intro" className="intro section capsule">
      <div>
        <h1>
          <span className="greeting">{content.greeting}</span>
          <span className="header-name accented">{name}</span>
        </h1>
        <p className="tagline">
          {title}
          <span className="accented"> and </span>
          {content.funFact}
        </p>
        {/* <p className='one-liner'>{oneLiner}</p> */}
      </div>
    </section>
  )
}
