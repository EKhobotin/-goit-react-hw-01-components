import PropTypes from 'prop-types'
import s from './FriendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
    console.log(isOnline);
    const x = false;
    return (        
        <li className={s.item}>           
    
    <span className={`${s.status} ${isOnline ? s.online : s.offline}`}></span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{ name}</p>
</li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}