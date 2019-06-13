import React, { Component } from 'react'

class BitCoinPrice extends Component {

    _renderCurrencies() {
        const { bpi } = this.props
        return Object.keys(bpi)
            .map(currency => (
                <div key={currency}>
                    1 BTC is {bpi[currency].rate}
                    <span>{currency}</span>
                </div>
            ))
    }

    render() {
        return (
            <div>
                {this._renderCurrencies()}
            </div>
        )
    }
}

export default BitCoinPrice