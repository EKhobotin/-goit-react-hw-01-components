import PropTypes from 'prop-types'
import { FriendListItem } from './FriendListItem.jsx'
import './FriendList.css'

export const FriendList = ({friends}) => {
    return (        
        <ul className="friend-list">
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