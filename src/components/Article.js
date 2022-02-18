import React from 'react'

const Article = (props) => {
  const [showArticle, setShowArticle] = React.useState(false)
  
  return (
        <article className='article' /* onClick={() => window.open(props.articleUrl, "_blank")}*/>
            <img src={props.img} alt="title"/>
            <h2>{props.title}</h2>
            {props.author ? <p>By: {props.author}</p> : null}
            <time>{props.date.split("T")[0].split("-").reverse().join(".")}</time>
            <button onClick={() => setShowArticle((prev) => !prev)}>Get Full Article</button>
            {showArticle ? <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p> : null}
            <hr />
        </article>
  )
}

export default Article