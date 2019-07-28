import React from 'react'
import {Link} from 'react-router-dom'
import './Page.css'

class Page extends React.Component {

    constructor(props) {
        super(props)
        this.pageRef = React.createRef()
    }

    render () {
        return (
            <div className="Page" ref={this.pageRef}>
                <Link to='/' className="Page__navigate_index">
                    <div>
                        {'<'}
                    </div>
                </Link>
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