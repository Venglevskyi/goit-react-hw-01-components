import React from "react";
import PropTypes from "prop-types";

import styles from "./statistics.module.css";

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className={styles.item} style = {{
          backgroundColor: randomTheme(),
        }}>
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: " "
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  )
};

const randomTheme = () => {
  const colors = [
    "#4fc4f6",
    "#a33cf2",
    "#e64c65",
    "#21b8c6",
    "#009688",
    "#795548"
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};


export default Statistics;
