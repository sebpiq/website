import React from 'react'
import './TileContainer.css'
import withSizes from 'react-sizes'

// See responsive.css
const mapSizesToProps = ({ width }) => {
    let columnCount = 4
    if (width < 800) {
        columnCount = 1
    } else if (width <= 1500) {
        columnCount = 3
    } else {
        columnCount = 4
    }
    return { columnCount }
}

const TileContainer = function ({ children, columnCount, heroChildren }) {
    // columnCount - 1 because the hero is the first column
    const minRowsPerColumn = Math.floor(children.length / (columnCount - 1))
    const remainingTiles = children.length - minRowsPerColumn * (columnCount - 1)
    let childPointer = 0
    const columnElems = [...Array(columnCount - 1)].map((_, columnIndex) => {
        const extraRow = (columnIndex < remainingTiles ? 1 : 0)
        const rowCount = minRowsPerColumn + extraRow
        const tiles = children.slice(childPointer, childPointer + rowCount)
        childPointer += rowCount
        return (
            <div className='TileContainer__column' key={columnIndex}>{tiles}</div>
        )
    })

    return (
        <div className="TileContainer">
            {columnCount > 1 ? 
                <>
                    <div className="TileContainer__hero">
                        {heroChildren}
                    </div>
                    {columnElems}
                </>: 
                <div className='TileContainer__column'>
                    {heroChildren}
                    {children}
                </div>
            }
        </div>
    )
}

export default withSizes(mapSizesToProps)(TileContainer)