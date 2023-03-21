import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'
import Loader from 'react-loader-spinner'
import './index.css'

class CryptocurrencyTracker extends Component {
  renderTrackerPage = () => {
    return (
      <>
        <h1>Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <CryptocurrenciesList />
      </>
    )
  }

  render() {
    return <div className="bg-container">{this.renderTrackerPage()}</div>
  }
}

export default CryptocurrencyTracker
