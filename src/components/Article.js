import React from 'react'

const Article = (props) => {
  console.log(props.date.split("T"))
  return (
        <article className='article big-bang'>
            <img src={props.img} alt="title"/>
            <h2>{props.title}</h2>
            <p>By: {props.author}</p>
            <date>{props.date.split("T")[0].split("-").reverse().join(".")}</date>
            <hr />
        </article>
  )
}

export default Article