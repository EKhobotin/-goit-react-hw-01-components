import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics.jsx'
import { FriendList } from './Friends/FriendList.jsx'
import { TransactionHistory } from './Transaction/TransactionHistory';
import userData from '../data/user.json';
import data from '../data/data.json'
import friends from '../data/friends.json'
import items from '../data/transactions.json'



const { username, tag, location, avatar, stats } = userData

export const App = () => {
 
  return (<>   
    <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats} />  
    <Statistics title="UPLOAD STATS" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={items} />    
    </>
  );
};
