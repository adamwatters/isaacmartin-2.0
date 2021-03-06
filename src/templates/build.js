import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import GithubIssues from '../components/githubissues'

export const BuildPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Layout>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h3 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h3>
                <PageContent className="content" content={content} />
                <GithubIssues repo="isaac-martin/isaacmartin-2.0" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

BuildPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const BuildPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <BuildPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

BuildPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BuildPage

export const buildPageQuery = graphql`
  query BuildPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
