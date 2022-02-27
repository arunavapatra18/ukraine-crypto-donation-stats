import React from 'react'
import btcimg from "../assets/images/bitcoin-btc-logo.png"
import ethimg from "../assets/images/ethereum-eth-logo.png"

export default function Addresses() {
  return (
    <div className='addresses'>
        <div className="add1">
            <img src={btcimg} alt="BTC" />
            <h1>357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P</h1>
        </div>
        <div className="add2">
        <img src={ethimg} alt="ETH" />
            <h1>0x165CD37b4C644C2921454429E7F9358d18A45e14</h1>
        </div>
    </div>
  )
}
