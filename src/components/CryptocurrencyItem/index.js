// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {item} = props
  const {id, currencyName, usdValue, euroValue, currencyLogo} = item

  return (
    <tr>
      <td>{currencyName}</td>
      <td>{usdValue}</td>
      <td>{euroValue}</td>
    </tr>
  )
}

export default CryptocurrencyItem
