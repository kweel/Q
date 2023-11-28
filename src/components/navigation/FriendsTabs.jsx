import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScroll from '../ProfileScroll';
import { useContext } from 'react';
import FriendsDataContext from '../contexts/FriendsDataContext';
import RequestsDataContext from '../contexts/RequestsDataContext';
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
        {props => <ProfileScroll {...props} data={friends}/>}
      </BottomTabs.Screen>
      <BottomTabs.Screen name="Requests" key = "Requests">
        {props => <ProfileScroll {...props} data={requests}/>}
      </BottomTabs.Screen>
    </BottomTabs.Navigator>
  );
}
export default FriendsTabs;