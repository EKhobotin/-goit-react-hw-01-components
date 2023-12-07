import { Profile } from './Profile/Profile';
import userData from '../data/user.json';
import data from '../data/data.json'
import {Statistics} from './Statistics/Statistics.jsx'

const { username, tag, location, avatar, stats } = userData

export const App = () => {
 
  return (<>   
    <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats} />  
    <Statistics title="UPLOAD STATS" stats={data} />
    .</>
  );
};
