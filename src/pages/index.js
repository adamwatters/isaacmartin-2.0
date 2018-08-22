import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Github from '../components/github'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/projects/">Go to projects</Link>
    <Link to="/build/">Read about this build</Link>
    <Github />
  </Layout>
)

export default IndexPage