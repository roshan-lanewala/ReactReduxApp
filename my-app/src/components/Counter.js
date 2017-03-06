import React from 'react'

export default class Counter extends React.Component {
    static propTypes = {
        value: React.PropTypes.number.isRequired,
        onIncrement: React.PropTypes.func.isRequired,
        onDecrement: React.PropTypes.func.isRequired
    }

    incrementIfOdd = () => {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync = () => {
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props
        return (
            <p>
                Clicked: {value} times
                { ' ' }
                <button onClick={onIncrement}>
                    +
                </button>
                { ' ' }
                <button onClick={onDecrement}>
                    -
                </button>
                { ' ' }
                <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                { ' ' }
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>
            </p>
        )
    }
}