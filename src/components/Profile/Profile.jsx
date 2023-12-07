import PropTypes from 'prop-types'
import './Profile.css'

export const Profile = ({ username, tag, location, avatar, stats }) => {
    const { followers, views, likes } = stats || {};
  return (
       
        <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{username}</p>
                <p className="tag">{ tag}</p>
    <p className="location">{location}</p>
  </div>
  <ul className="stats">
    <li className='list-item'>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li className='list-item'>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li className='list-item'>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
      </div>   
    )
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
}