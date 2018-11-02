import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Learn to design and code react apps</h1>
    <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Watch a video</Link>
  </Layout>
)

export default IndexPage