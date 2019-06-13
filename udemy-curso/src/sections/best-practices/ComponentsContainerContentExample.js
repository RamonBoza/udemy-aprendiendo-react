import React, { Component } from 'react'
import BitCoinPriceContainer from './container-component'


class ComponentsContainerContentExample extends Component {
    render() {
        return (
            <div>
                <h4>Bitcoin Price</h4>
                <BitCoinPriceContainer />
            </div>
        )
    }
}

export default ComponentsContainerContentExample;