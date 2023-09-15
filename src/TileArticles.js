import React from 'react'
import { articles } from './pages/Articles'
import Link from './Link'
import './Tile.css'
import './TileArticles.css'

const ARTICLES_COUNT = 3

export default function(props) {
    return (
        <div className="Tile TileArticles">
            <div className="Tile__header">
                <span>Articles and posts</span>
            </div>
            <div className="Tile__body">
                {articles.slice(0, ARTICLES_COUNT).map((article, i) => 
                    <div className="TileArticles__entry"  key={article.title}>
                        {article.externalUrl ? 
                            <a href={article.externalUrl} target="_blank" rel="noreferrer noopener">
                                <span>{article.title}</span>
                            </a> :
                            <Link href={article.url}>
                                <span>{article.title}</span>
                            </Link>}
                    </div>
                )}

                <div className="TileArticles__entry">
                    <Link href="/articles/">
                        <span>+ MORE</span>
                    </Link>
                </div>

            </div>
        </div>
    )
}