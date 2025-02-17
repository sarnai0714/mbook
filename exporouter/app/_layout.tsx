import { Stack } from "expo-router";

const MainLayout = () => {
 return (
   <Stack>
     <Stack.Screen name="(tabs)" options={{ headerTitle: "Home Page", headerShown:false }} />
     <Stack.Screen name="user/[id]" options={{ headerTitle: "USER Page" }} />
<Stack.Screen name="+not-found.tsx" />
   </Stack>
 );};
export default MainLayout
