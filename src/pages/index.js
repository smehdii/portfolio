import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

// import Layout from "@components/Layout"
// import React from 'react'
// import SEO from '@components/seo'
import NameBoard from "../components/NameBoard"
// import IBuildSection from '@components/IBuildSection'
// import IBlogSection from '@components/IBlogSection'

const IndexPage = ({ data }) => (
  <Layout showHome={false}>
    <SEO
      title="Full Stack Dev"
      keywords={[`developer`, `engineer`, `react`, `javascript`]}
    />
    <NameBoard />
  </Layout>
)

export default IndexPage
