import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useForm } from "react-hook-form"
import SVGIcon from "./SVGIcon.js"

export default function Contact() {
  const data = useStaticQuery(graphql`
    query {
      allContentJson {
        edges {
          node {
            contact {
              id
              link
            }
          }
        }
      }
    }
  `)
  const { contact } = data.allContentJson.edges[0].node
  return (
    <section id="contact" className="contact section capsule">
      <div className="contact container">
        <h2>Contact me</h2>
        <div className="social-links">
          {contact.map(({ id, link }) => (
            <SocialLinks key={id} id={id} link={link} />
          ))}
        </div>
        <p>- or -</p>
        <h5>Email me: </h5>
        <EmailForm />
      </div>
    </section>
  )
}

function SocialLinks({ id, link }) {
  return (
    <div className={`icon-container ${id}`}>
      {
        <a href={`https://${link}`} target="_blank" rel="noreferrer">
          <SVGIcon name={id} size={50} />
        </a>
      }
    </div>
  )
}

function EmailForm() {
  const [emailStatus, setEmailStatus] = useState(null)
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    fetch(process.env.GATSBY_API_URL, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(res => setEmailStatus(true))
      .catch(err => setEmailStatus(false))
  }

  if (!emailStatus) {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="_subject" value="Portfolio Contact" />
        <div className="form-input">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            ref={register({ required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="form-input">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="_replyto"
            placeholder="Email"
            ref={register({ required: true })}
          />
          {errors._replyto && <span>This field is required</span>}
        </div>
        <div className="form-input">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            placeholder="Message here"
            ref={register({ required: true })}
          />
          {errors.message && <span>This field is required</span>}
        </div>
        <button className="btn submit-btn" type="submit">
          Send
        </button>
      </form>
    )
  }
  return (
    <div>
      {emailStatus === true ? (
        <p>Thank you! Email was sent. I'll respond within 2 days.</p>
      ) : (
        <p>
          Oops! Sorry. Your email was not sent. Please reach me at any of social
          media.
        </p>
      )}
    </div>
  )
}
