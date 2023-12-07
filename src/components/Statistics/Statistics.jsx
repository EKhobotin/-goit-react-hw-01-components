import PropTypes from 'prop-types'
import s from './Statistics.module.css'

export const Statistics = ({title,stats}) => {
    return (
      <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}

        <ul className={s.list}>
                {stats.map((item) =>
                (
                  <li className={s.item} key={item.id} style = {{backgroundColor: randomColor()}}>
                    <span className={s.label}>{item.label}</span>
                    <span className={s.percentage}>{item.percentage}%</span>
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