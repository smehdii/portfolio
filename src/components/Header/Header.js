import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styles from "./Header.module.scss"

const Header = ({ showHome }) => (
  <header>
    <div>
      {showHome ? (
        <div className={styles.menuItem}>
          <Link to="/">Home</Link>
        </div>
      ) : null}
      <div className={styles.menuItem}>
        <Link to="/about/">About</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteMetadata: PropTypes.object,
  showHome: PropTypes.bool,
}

export default Header
