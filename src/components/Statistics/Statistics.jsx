import PropTypes from 'prop-types'
import './Statistics.css'

export const Statistics = ({title,stats}) => {
    return (
        <section className="statistics">
            {title && <h2 className="title">{title}</h2>}

  <ul className="stat-list">
                {stats.map((item) =>
                (
       <li className="item" key={item.id} style = {{backgroundColor: randomColor()}}>
       <span className="label-stat">{item.label}</span>
       <span className="percentage">{item.percentage}%</span>
     </li>)    
)}
  </ul>
</section>
    )
}


Statistics.propTypes = {
title: PropTypes.string,
stats: PropTypes.array.isRequired,
}

function randomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}