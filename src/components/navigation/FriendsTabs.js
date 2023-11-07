import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileScroll from '../ProfileScroll';
const FriendsTabs = createMaterialTopTabNavigator();
//much taken from https://reactnavigation.org/docs/material-top-tab-navigator
function FriendsTabs() {
  return (
    <FriendsTabs.Navigator>
      <FriendsTabs.Screen name="Friends" component={ProfileScroll} />
      <FriendsTabs.Screen name="Requests" component={ProfileScroll} />
    </FriendsTabs.Navigator>
  );
}
export default FriendsTabs;