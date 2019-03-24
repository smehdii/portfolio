import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../Header"
import Footer from "../Footer"
import styles from "./Layout.module.scss"

const Layout = ({ children, showHome = true }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            fullName
            twitterHandle
          }
        }
      }
    `}
    render={data => (
      <div className={styles.pageWrapper}>
        <Header siteMetadata={data.site.siteMetadata} showHome={showHome} />
        <div className={styles.contentContainer}>{children}</div>
        <Footer siteMetadata={data.site.siteMetadata} />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showHome: PropTypes.bool,
}

export default Layout
