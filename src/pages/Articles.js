import React from 'react'
import sortBy from 'lodash.sortby'
import rawArticles from 'portfolio-and-cv/articles.json'
import Page from '../Page'
import Link from '../Link'
import PageTitle from '../PageTitle'
import './Articles.css'
import { dateToTimestamp } from '../utils'

let articles = rawArticles.map((rawArticle, i) => {
    const article = {
        ...rawArticle,
        timestamp: dateToTimestamp(rawArticle.date),
        type: {
            'blog-post': 'blog post',
            'academic': 'academic article'
        }[rawArticle.type]
    }

    return article
})

articles = sortBy(articles, article => -article.timestamp)

export default function() {
    const ArticleElems = articles.map((article, i) => (
        <li key={i}>
            <span className="Articles__date">{article.date}</span>
            {article.externalUrl ? 
                <a href={article.externalUrl} target="_blank" rel="noreferrer noopener">
                    <span className="Articles__name">{article.title}</span>
                </a> :
                <Link href={article.url}>
                    <span className="Articles__name">{article.title}</span>
                </Link>
            }
            <div className="Articles__info">
                {article.type}
            </div>
        </li>
    ))

    return (
        <Page className="Articles">
            <PageTitle text="Articles and blog posts" />
            <ul>{ArticleElems}</ul>
        </Page>
    )
}
