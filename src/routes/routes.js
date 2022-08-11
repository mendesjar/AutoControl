import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  HomeView  from "../pages/home/homeView";
import  AutomationView  from "../pages/automation/automationView";
import  ProfileView  from "../pages/profile/profileView";

const Tab = createBottomTabNavigator();

const Routes = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeView} />
            <Tab.Screen name="Automation" component={AutomationView} />
            <Tab.Screen name="Profile" component={ProfileView} />
        </Tab.Navigator>
    )
}
export default Routes;