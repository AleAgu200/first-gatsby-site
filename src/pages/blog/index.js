import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import {Link} from 'gatsby'
const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
        <ul>
            {data.allMdx.nodes.map(node => (
                <article key={node.id} >
                    <h2>
                        <Link to={`/blog/${node.frontmatter.slug}`} >
                            {node.frontmatter.title}
                        </Link>
                    </h2>
                    <p>Posted: {node.frontmatter.date}</p>
                </article>
            ))}
        </ul>
    </Layout>
  )
}

//ESTO ES SIN EL PLUGIN DE MARKDOWN
/* export const query = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
            nodes{
                name
            }
        }
    }
` */

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
              frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
                slug
              }
              id
              excerpt
            }
        }
    }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage