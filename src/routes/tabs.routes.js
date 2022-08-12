import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeView }  from "../pages/home/homeView";
import { AutomationView }  from "../pages/automation/automationView";
import { ProfileView } from "../pages/profile/profileView";

const Tab = createBottomTabNavigator();

export function TabsRoutes(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#341',
                tabBarInactiveTintColor: '#000',
                tabBarStyle: {
                    showLabel: false,
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    borderRadius: 30,
                }
            }}
        >
            <Tab.Screen name="Automation" component={AutomationView} />
            <Tab.Screen 
                name="Home" 
                component={HomeView}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => { 
                        return <Icon name="home"/>
                    }
                }}
            />
            <Tab.Screen name="Profile" component={ProfileView} />
        </Tab.Navigator>
    )
};