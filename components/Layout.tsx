import React from 'react'
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
}

interface LayoutProps {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout
