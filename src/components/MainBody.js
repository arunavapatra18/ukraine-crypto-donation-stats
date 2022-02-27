import React from 'react'
import btcimg from "../assets/images/bitcoin-btc-logo.png"
import ethimg from "../assets/images/ethereum-eth-logo.png"

export default function MainBody(props){
    return(
        <div className='main'>
            <div className="btc">
                <img src={btcimg} alt="BTC" />
                <p>{props.balance[0]*0.00000001}</p>
            </div>
            <div className="eth">
            <img src={ethimg} alt="ETH" />
            <p>{props.balance[1]}</p>
            </div>
        </div>
    )
}
