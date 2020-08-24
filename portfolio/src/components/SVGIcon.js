import React from "react"

import flaticon from "../images/icons-sprite.svg"

export default function SVGIcon({
  name,
  color = `currentColor`,
  size = "100%",
  ...rest
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <use xlinkHref={`${flaticon}#${name}`} />
    </svg>
  )
}
