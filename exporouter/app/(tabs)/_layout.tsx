import { Tabs } from "expo-router";
import {AntDesign} from "@expo/vector-icons"
const _layout = () => {
 return (
   <Tabs>
    {/* <Tabs.Screen name="home"></Tabs.Screen> */}
     <Tabs.Screen name="index" options={{title:"Home"}}></Tabs.Screen>
     <Tabs.Screen name="user/[id]" options={{title:"User"}}></Tabs.Screen>
     <Tabs.Screen name="about" options={{         headerTitle: "User page",         title: "About",
         tabBarIcon: () => <AntDesign size={28} name="user" color="aqua" />,       }}
></Tabs.Screen>
   </Tabs>
 );
};
export default _layout;
