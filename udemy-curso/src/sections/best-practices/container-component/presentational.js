import React, { Component } from 'react'

const BitCoinPrice = ({bpi}) => {

    return (
        <div>
            {Object.keys(bpi)
                .map(currency => (
                    <div key={currency}>
                        1 BTC is {bpi[currency].rate}
                        <span>{currency}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default BitCoinPrice