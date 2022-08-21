import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const About = () => {
  return (
    <Layout pageTitle = "About me">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby</p>
    </Layout>
  )
}

export const Head = () => (
    <>
        <title>About Me</title>
        <meta name='site about me' content='This is a site about me' />
    </>
)
export default About