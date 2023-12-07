import PropTypes from 'prop-types'
import './FriendListItem.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
    console.log(isOnline);
    return (
        
        <li className="item-friend">             
    
        <span className={`status-friend ${isOnline ? 'online' : 'offline'}`}></span>    


            
            {/* {isOnline ? <span className="status-friend online"></span> : <span className="status-friend offline"></span>} */}
            


  <img className="avatar-friend" src={avatar} alt="User avatar" width="48" />
            <p className="name-friend">{ name}</p>
</li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}