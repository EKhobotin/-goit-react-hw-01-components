import PropTypes from 'prop-types'
import { FriendListItem } from './FriendListItem.jsx'
import s from './FriendList.module.css'

export const FriendList = ({friends}) => {
    return (        
        <ul className={s.list}>
            {friends.map(({avatar,id,name,isOnline}) =>
            (
                <FriendListItem key={id} avatar={avatar} name={ name} isOline={isOnline} />
                )
            )}
</ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array,
}