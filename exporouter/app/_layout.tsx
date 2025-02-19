import { Stack } from "expo-router";

const MainLayout = () => {
 return (
   <Stack>
     <Stack.Screen name="(tabs)" options={{ headerTitle: "Home Page", headerShown:false, }} />
     <Stack.Screen name="Aboutus.tsx" options={{ headerTitle: "About us" }} />
<Stack.Screen name="+not-found.tsx" />
   </Stack>
 );};
export default MainLayout
