import PropTypes from 'prop-types'
import s from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    return (
        <table className={s.transactionHistory}>
  <thead>
                <tr className={s.trHead}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

            <tbody>
                {items.map(({ type, amount, currency, id }, idx) => (
                    <tr key={id} className={`${s.tr} ${idx % 2 ? s.odd : s.even}`}>
            <td className={s.td}>{type}</td>
            <td className={s.td}>{amount}</td>
            <td className={s.td}>{currency}</td>
          </tr>
        ))}
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.array,
}
