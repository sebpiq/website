import React from 'react'
import { articles } from './pages/Articles'
import Link from './Link'
import './Tile.css'
import './TileArticles.css'

const ARTICLES_COUNT = 4
const ABSTRACT_CROP_LENGTH = 130

const cropTextAtSpace = (text, cropLength) => {
    let i = cropLength
    if (text.length < cropLength) {
        return text
    }
    while (text[i] !== ' ' && i > 0) {
        i--
    }
    return text.slice(0, i) + (i > 0 ? ' ...' : '')
}

export default function(props) {
    return (
        <div className="Tile TileArticles">
            <div className="Tile__header">
                <span>Publications</span>
            </div>
            <div className="Tile__body">
                {articles.slice(0, ARTICLES_COUNT).map((article, i) => {
                    const abstract = article.abstract ? 
                        <span className="TileArticles__abstract">
                            {cropTextAtSpace(article.abstract, ABSTRACT_CROP_LENGTH)}
                        </span> : 
                    null
                    return (
                        <div className="TileArticles__entry"  key={article.title}>
                            {article.externalUrl ? 
                                <a href={article.externalUrl} target="_blank" rel="noreferrer noopener">
                                    <span>{article.title}</span>
                                    {abstract}
                                </a> :
                                <Link href={article.url}>
                                    <span>{article.title}</span>
                                    {abstract}
                                </Link>
                            }
                        </div>
                    )
                })}
            </div>
            <div key="footer" className="Tile__footer">
                <Link href="/articles/">
                    <span>+ MORE</span>
                </Link>
            </div>
        </div>
    )
}