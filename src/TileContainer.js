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

const TileContainer = function ({ children, columnCount }) {
    const minRowsPerColumn = Math.floor(children.length / columnCount)
    const remainingTiles = children.length - minRowsPerColumn * columnCount
    let childPointer = 0
    const columnElems = [...Array(columnCount)].map((_, columnIndex) => {
        const extraRow = (columnIndex < remainingTiles ? 1 : 0)
        const rowCount = minRowsPerColumn + extraRow
        const tiles = children.slice(childPointer, childPointer + rowCount)
        childPointer += rowCount
        return (
            <div key={columnIndex}>{tiles}</div>
        )
    })

    return (
        <div className="TileContainer">
            {columnElems}
        </div>
    )
}

export default withSizes(mapSizesToProps)(TileContainer)