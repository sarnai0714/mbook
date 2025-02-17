import React from "react";
import { Link, router } from "expo-router";
import { View, Text, Pressable } from "react-native";

const index = () => {
 return (
   <View>
     <Text>Home page</Text>
     <Link href="/user/1">Go To user 1</Link>
     <Pressable
       onPress={() =>
         router.push({
           pathname: "/user/[id]",
           params: { id: 2, ipro: "ipro" },
         })
       }
     >
       <Text>Go to user 2</Text>
     </Pressable>
   </View>);};

export default index;
