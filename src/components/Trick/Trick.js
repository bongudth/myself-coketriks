import "./Trick.scss"
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

const Trick = () => {
  const [markdown, setMarkdown] = useState(``)

  useEffect(() => {
    readMarkdown()
  }, [])

  const readMarkdown = async () => {
    const response = await fetch(`${process.env.PUBLIC_URL}/markdown.md`)
    const text = await response.text()
    setMarkdown(text)
  }

  return (
    <div className="trick-container">
      <div className="trick-header">
        <div className="trick-title">React Location</div>
        <i className="trick-save fas fa-bookmark"></i>
        {/* <i className="far fa-bookmark"></i> */}
      </div>
      <div className="trick-code">
        <ReactMarkdown children={markdown} />
      </div>
    </div>
  )
}

export default Trick
