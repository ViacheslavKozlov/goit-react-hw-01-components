import PropTypes from "prop-types";
import style from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className={style.container}>
      <h2>Transactions</h2>
      <table className={style.table}>
        <thead>
          <tr className={style.tableHead}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr className={style.tableRow} key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnLine: PropTypes.bool.isRequired
    })
  )
};

export default TransactionHistory;
