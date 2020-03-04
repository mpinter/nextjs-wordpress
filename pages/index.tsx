import {NextPage} from 'next'
import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'

const Home: NextPage<{userAgent: string}> = ({userAgent}) => (
  <>
    <Header />
    <h1>Hello world! - user agent: {userAgent}</h1>
    <Link href="/about">
      <a title="About Page">About Page</a>
    </Link>
  </>
)

Home.getInitialProps = async ({req}) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent
  return {userAgent}
}

export default Home
