import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  renderTrackerPage = () => (
    <>
      <div className="head-container">
        <h1 className="heading-1">Cryptocurrency Tracker</h1>
        <img
          className="currency-logo"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
      </div>
      <CryptocurrenciesList />
    </>
  )

  render() {
    return <div className="bg-container">{this.renderTrackerPage()}</div>
  }
}

export default CryptocurrencyTracker
