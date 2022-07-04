import React from 'react'
import { NavLink } from 'react-router-dom'

type PropsType = {
  link: string
  page: string
}

const Link: React.FC<PropsType> = ({ link, page }) => {
  return (
    <NavLink to={link}>
      {page}
    </NavLink>
  )
}

export default Link