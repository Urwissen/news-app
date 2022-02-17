import React from 'react'
import Article from "./Article.js"
import key from '../apiKey.js';

export const Main = () => {
  const [articles, setArticles] = React.useState([])

  React.useEffect(() => {
    var url = 'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2022-02-17&' +
    'sortBy=popularity&' +
    'apiKey=' + key;

    var req = new Request(url);

    fetch(req)
    .then(response => response.json())
    .then(data => setArticles(data.articles))
  }, [])
 
  console.log(articles)

  return (
    <main>
      {articles.map((article, index) => {
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
        
      })}
    </main>
  )
}
