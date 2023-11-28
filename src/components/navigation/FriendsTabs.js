import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScroll from '../ProfileScroll';
const BottomTabs = createBottomTabNavigator();
//much taken from https://reactnavigation.org/docs/material-top-tab-navigator
function FriendsTabs() {
  return (
    <BottomTabs.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: '#000000',
      },
      tabBarActiveTintColor: 'white',
    }}>
      <BottomTabs.Screen name="Friends" key = "Friends" component={ProfileScroll} />
      <BottomTabs.Screen name="Requests" key="Requests" component={ProfileScroll} />
    </BottomTabs.Navigator>
  );
}
export default FriendsTabs;