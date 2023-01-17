import React from 'react'

const BlogsLayout = ({children}: any) => {
  return (
    <div>
        <h1>Blog layout</h1>
        <main>{children}</main>
    </div>
  )
}

export default BlogsLayout