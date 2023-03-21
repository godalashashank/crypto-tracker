// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, coinData: []}

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))

    this.setState({isLoading: false, coinData: formattedData})
  }

  render() {
    const {coinData, isLoading} = this.state
    return (
      <div className="list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="list-heading">
              <p>Coin Type</p>
              <p>USD</p>
              <p>EURO</p>
            </div>
            <div className="list-items">
              {coinData.map(item => (
                <CryptocurrencyItem item={item} key={item.id} />
              ))}
            </div>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
