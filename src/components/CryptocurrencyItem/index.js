// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {item} = props
  const {id, currencyName, usdValue, euroValue, currencyLogo} = item

  return (
    <div className="item-container">
      <p>
        <img className="img-logo" src={currencyLogo} alt={currencyLogo} />
        {currencyName}
      </p>
      <p>{usdValue}</p>
      <p>{euroValue}</p>
    </div>
  )
}

export default CryptocurrencyItem
