import PropTypes from "prop-types"
import React from "react"
// import { HighlightBGPrimary } from '@components/Highlight'
import SocialHandles from "../SocialHandles"
// import styles from './NameBoard.module.scss'
import { StaticQuery, graphql } from "gatsby"

const NameBoard = ({ siteMetadata }) => {
  return <SocialHandles siteMetadata={siteMetadata} />
}

NameBoard.propTypes = {
  siteMetadata: PropTypes.object,
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            fullName
            twitterHandle
            githubHandle
            stackOverflowHandle
            devToHandle
            mediumHandle
            linkedInHandle
          }
        }
        allJavascriptFrontmatter {
          edges {
            node {
              frontmatter {
                portfolioItems {
                  title
                  desc
                  link
                }
              }
            }
          }
        }
      }
    `}
    render={data => <NameBoard siteMetadata={data.site.siteMetadata} />}
  />
)
