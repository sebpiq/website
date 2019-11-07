import React from 'react'
import './Page.css'

class Page extends React.Component {

    constructor(props) {
        super(props)
        this.pageRef = React.createRef()
    }

    render () {
        const classes = 'Page ' + (this.props.className || '')
        return (
            <div className={classes} ref={this.pageRef}>
                {this.props.children}
                <button className="Page__scroll_to_top" onClick={this._scrollToTop}>^</button>
            </div>
        )
    }

    _scrollToTop = () => {
        this.pageRef.current.scrollTo(0, 0)
    }
}

export default Page