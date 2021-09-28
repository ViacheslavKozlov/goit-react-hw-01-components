import PropTypes from "prop-types";
import style from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <div className={style.stats}>
      {title && <h2 className={style.statsHeadline}>{title}</h2>}
      <ul className={style.statsList}>
        {stats.map(stat => (
          <li key={stat.id} className={style.statsItem}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  )
};

export default Statistics;
