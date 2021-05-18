import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './style.scss'

function LinkFooter(props) {
  const { title, listLink } = props
  return (
    <div className="link-list">
      <h3 className="link-list__title">{title}</h3>
      <ul className="link-list__list">
        {listLink.map((item) => (
          <li className="link-list__li" key={item.id}>
            <Link className="link-list__link" to="/">
              {item.link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
LinkFooter.propTypes = {
  title: PropTypes.string.isRequired,
  listLink: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default LinkFooter