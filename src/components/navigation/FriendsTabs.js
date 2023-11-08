import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileScroll from '../ProfileScroll';
const TopTabs = createMaterialTopTabNavigator();
//much taken from https://reactnavigation.org/docs/material-top-tab-navigator
function FriendsTabs() {
  return (
    <TopTabs.Navigator>
      <TopTabs.Screen name="Friends" component={ProfileScroll} />
      <TopTabs.Screen name="Requests" component={ProfileScroll} />
    </TopTabs.Navigator>
  );
}
export default FriendsTabs;