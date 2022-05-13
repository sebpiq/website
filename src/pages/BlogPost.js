import React from 'react'
import Page from '../Page'
import PageTitle from '../PageTitle'
import rawArticles from 'portfolio-and-cv/articles.json'
import './BlogPost.css'
import { useParams } from 'react-router-dom'
/* eslint import/no-webpack-loader-syntax: off */
import post1 from '!!raw-loader!./articles/2014-09-22-brewing-tea-water-temperature-calculator/article.html'
/* eslint import/no-webpack-loader-syntax: off */
import post2 from '!!raw-loader!./articles/2014-11-17-delegating-audio-processing-to-web-worker/article.html'
/* eslint import/no-webpack-loader-syntax: off */
import post3 from '!!raw-loader!./articles/2015-08-25-network-topologies-for-live-performances/article.html'
/* eslint import/no-webpack-loader-syntax: off */
import post4 from '!!raw-loader!./articles/2016-01-15-audio-glitches-with-linux-terminal/article.html'
/* eslint import/no-webpack-loader-syntax: off */
import post5 from '!!raw-loader!./articles/2017-02-23-using-web-audio-api-in-production/article.html'

const articles = rawArticles.filter(rawArticle => rawArticle.type === 'blog-post')
    .map((rawArticle, i) => ({
        ...rawArticle,
        htmlStr: {
            '/articles/2014-09-22-brewing-tea-water-temperature-calculator': post1,
            '/articles/2014-11-17-delegating-audio-processing-to-web-worker': post2,
            '/articles/2015-08-25-network-topologies-for-live-performances': post3,
            '/articles/2016-01-15-audio-glitches-with-linux-terminal': post4,
            '/articles/2017-02-23-using-web-audio-api-in-production': post5,
        }[rawArticle.url]
    }))

export default function() {
    const {slug} = useParams()
    const matched = articles.filter(article => article.url.split('/').slice(-1)[0] === slug)
    if (matched.length < 1) {
        return 'Blog post not found'
    }
    const article = matched[0]
    return (
        <Page className="BlogPost">
            <PageTitle text={article.title} />
            <div className="BlogPost__publish_date">Publication date : {article.date}</div>
            <div className="BlogPost__content" dangerouslySetInnerHTML={{__html: article.htmlStr }}></div>
        </Page>
    )
}
