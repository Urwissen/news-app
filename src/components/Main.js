import React from 'react'
import Article from "./Article.js"
import key from '../apiKey.js';

export const Main = () => {
  const [articles, setArticles] = React.useState([])

  React.useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?' +
    'country=de&' +
    'sortBy=popularity&' +
    'apiKey=' + key;

    const req = new Request(url);

    fetch(req)
    .then(response => response.json())
    .then(data => setArticles(data.articles))
  }, [])
 
  console.log(articles)

  return (
    <main>
      {articles? articles.map((article, index) => {
        return (
          <Article
            key={index}
            title = {article.title}
            author = {article.author}
            img = {article.urlToImage}
            date = {article.publishedAt}
            articleUrl = {article.url}
          />
        )
        
      }) : "loading..."}
    </main>
  )
}
