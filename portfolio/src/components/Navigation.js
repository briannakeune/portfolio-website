import React from "react"
import { navigate } from "@reach/router"

export default function Navigation() {
  const sections = ["intro", "about", "projects", "contact"]
  return (
    <nav>
      <ul>
        {sections.map(section =>
          !section ? null : <NavButton key={section} sectionID={section} />
        )}
      </ul>
    </nav>
  )
}

function NavButton({ sectionID }) {
  function navigateTo() {
    navigate(`#${sectionID}`)
  }
  return (
    <button
      type="button"
      className="nav-button"
      onClick={navigateTo}
      onKeyDown={navigateTo}
    >
      {sectionID}
    </button>
  )
}
