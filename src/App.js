import './App.scss';
import React from "react";
import Header from './components/Header';
import Addresses from './components/Addresses';
import axios from 'axios';
import MainBody from './components/MainBody';

class App extends React.Component{
  constructor(){
    const ETH_ADDRESS = "0x165CD37b4C644C2921454429E7F9358d18A45e14"
    const BTC_ADDRESS = "357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P"
    super()
    this.state = {
      eth_url: "https://api.ethplorer.io/getAddressInfo/"+ETH_ADDRESS+"?apiKey="+process.env.REACT_APP_API_KEY,
      btc_url: "https://blockchain.info/q/addressbalance/"+BTC_ADDRESS,
      balance_btc: null,
      balance_eth: null
    }
  }

  async componentDidMount(){
    const responseA = await axios.get(this.state.eth_url)
    this.setState({
      balance_eth: responseA.data.ETH.balance
    })
    const responseB = await axios.get(this.state.btc_url)
    this.setState({
      balance_btc: responseB.data
    })
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Addresses />
        <MainBody balance={[this.state.balance_btc, this.state.balance_eth]}/>
      </div>
    );
  }
}

export default App;
