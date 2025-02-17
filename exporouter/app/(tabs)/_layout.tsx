import { Tabs } from "expo-router";
import {AntDesign} from "@expo/vector-icons"
const _layout = () => {
 return (
   <Tabs>
    {/* <Tabs.Screen name="home"></Tabs.Screen> */}
     <Tabs.Screen name="index" options={{title:"Home", tabBarIcon: () => <AntDesign name="home" size={28} color="aqua" />,}}></Tabs.Screen>
     <Tabs.Screen name="user/[id]" options={{title:"User", tabBarIcon: () => <AntDesign size={28} name="user" color="aqua" />,}}></Tabs.Screen>
     <Tabs.Screen name="About" options={{  headerTitle: "About",tabBarIcon: () => <AntDesign name="rightcircle" size={28} color="aqua" />, }}></Tabs.Screen>
   </Tabs>
 );
};
export default _layout;
