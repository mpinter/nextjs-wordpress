import Link from 'next/link'
import React from 'react'
import WPAPI from 'wpapi'
import Header from '../components/Header'

const Home = ({pageContent}) => (
  <>
    <Header />
    <div dangerouslySetInnerHTML={pageContent} />
    <Link href="/about">
      <a title="About Page">About Page</a>
    </Link>
  </>
)

Home.getInitialProps = async ({req}) => {
  const wp = new WPAPI({endpoint: 'http://localhost/wp-json'})
  // example of useful parameters - this will probably crash unless you ahve my database
  // a good starting point is await wp.pages()
  // also useful - await wp.pages().slug('sample-page')
  const page = (await wp.pages().param({parent: 7, per_page: 100, search: 'hu'}))[0]
  return {pageContent: {__html: page.content.rendered}}
}

export default Home
