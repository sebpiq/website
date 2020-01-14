import React from 'react'
import './BackgroundCanvas.css'
import { getRandomEmoji } from './utils'

const INTERVAL_TIME = 150
// e.g. 100/1000 -> 100px font for 1000px screen width (or height if height > width)
const FONT_SCREEN_RATIO = 700 / 1000
const TEXT_COLOR = 'white'
// Whether to keep previous frame and draw on top of it or erase before each frame 
const KEEP_PREVIOUS_FRAME = false
// Size of the square picked for the effect
const SCRAMBLE_SQUARE_SIZE = 0.12
// Range (as a ratio) of the area in which the square is picked
const SCRAMBLE_RANGE = 0.09
// Number of scrambles per touch / move
const SCRAMBLE_ITER = 7

export default class BackgroundCanvas extends React.Component {

    constructor(props) {
        super(props)
        this.canvasRef = React.createRef()
        this.canvasCtx = null
        this.intervalHandle = null
        this.state = {
            background: false
        }
    }

    componentDidMount() {
        this._refsUpdated()
        this._propsUpdated()
        this.intervalHandle = setInterval(this._renderText, INTERVAL_TIME)
    }

    componentDidUpdate() {
        this._propsUpdated()
    }

    componentWillUnmount() {
        if (this.intervalHandle) {
            clearInterval(this.intervalHandle)
        }
    }

    render() {
        const classes = 'BackgroundCanvas' + (this.state.background ? ' background' : '')
        return (
            <canvas 
                className={classes} 
                width={this.props.width}
                height={this.props.height}
                ref={this.canvasRef}
                onClick={this.state.background ? undefined : this._backgroundOnfirstClick}
                // Important to do this onTouchEnd otherwise the user will inadvertently click the links below 
                onTouchEnd={this.state.background ? undefined : this._backgroundOnfirstClick}
            />
        )
    }

    _backgroundOnfirstClick = () => {
        // Timeout here to prevent the first click from going through to tiles and opening a new page
        setTimeout(() => this.setState({ background: true }), 100)
    }

    _refsUpdated() {
        this.canvasCtx = this.canvasRef.current.getContext('2d')
    }

    _propsUpdated() {
        this.canvasCtx.fillStyle = TEXT_COLOR;
        // Bug with chrome on big emojis : https://stackoverflow.com/questions/57245470/html5-canvas-image-data-empty-after-drawing-an-emoji-with-large-font-size-on-c
        // const fontSize = Math.round(
        //     Math.max(this.props.width, this.props.height) * FONT_SCREEN_RATIO
        // )
        // this.canvasCtx.font = `${fontSize}px monospace`
        this.canvasCtx.font = `256px monospace`
        this.canvasCtx.textAlign = 'center'
        this.canvasCtx.textBaseline = 'middle'
        // this.canvasCtx.globalCompositeOperation = 'difference'
    }

    _renderText = () => {
        if (!this.props.width || !this.props.height) {
            return
        }

        // TODO : polyfill
        const character = getRandomEmoji()
        if (KEEP_PREVIOUS_FRAME) {
            this.canvasCtx.clearRect(0, 0, this.props.width, this.props.height)
        }
        this.canvasCtx.fillText(
            character, 
            Math.round(this.props.width / 2), 
            Math.round(this.props.height / 2),
        )

        setTimeout(() => {
            for (let i = 0; i < SCRAMBLE_ITER; i++) {
                const pageX = Math.floor(Math.random() * this.props.width)
                const pageY = Math.floor(Math.random() * this.props.height)
                const squareW = SCRAMBLE_SQUARE_SIZE * this.props.width
                const squareH = SCRAMBLE_SQUARE_SIZE * this.props.height
                const x1 = pageX - squareW / 2
                const y1 = pageY - squareH / 2
                const x2 = x1 + (Math.random() * 2 - 1) * (this.props.width * SCRAMBLE_RANGE)
                const y2 = y1 + (Math.random() * 2 - 1) * (this.props.height * SCRAMBLE_RANGE)
                const imageData1 = this.canvasCtx.getImageData(x1, y1, squareW, squareH)
                const imageData2 = this.canvasCtx.getImageData(x2, y2, squareW, squareH)
                this.canvasCtx.putImageData(imageData1, x2, y2)
                this.canvasCtx.putImageData(imageData2, x1, y1)
            }
        }, INTERVAL_TIME / 2)
    }

}