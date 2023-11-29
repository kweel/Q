import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScrollData from '../helper/ScrollData';
import { useContext } from 'react';
import FriendsDataContext from '../contexts/FriendsDataContext';
import RequestsDataContext from '../contexts/RequestsDataContext';
import FriendCard from '../helper/FriendCard';
function FriendsTabs(props) {
  const BottomTabs = createBottomTabNavigator();
  const [friends,setFriends]=useContext(FriendsDataContext)
  const [requests,setRequests]=useContext(RequestsDataContext)
  const friendsProps={data:friends}
  const requestsProps={data:requests}
  return (
    <BottomTabs.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: '#000000',
      },
      tabBarActiveTintColor: 'white',
    }}>
      <BottomTabs.Screen name="Current Friends" key = "Friends">
        {props => <ScrollData {...props} data={friends} Element={FriendCard}/>}
      </BottomTabs.Screen>
      <BottomTabs.Screen name="Requests" key = "Requests">
        {props => <ScrollData {...props} data={requests} Element={FriendCard}/>}
      </BottomTabs.Screen>
    </BottomTabs.Navigator>
  );
}
export default FriendsTabs;