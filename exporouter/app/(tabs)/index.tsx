import React from "react";
import { Link, router } from "expo-router";
import { View, Text, Pressable ,Image} from "react-native";

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
      {/* Зураг нэмэх хэсэг */}
      <Pressable onPress={() => router.push("/")}>
      <Image 
        source={{ uri: "data:image/jpeg;base64,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" }} 
        style={{ width: 150, height: 150, marginVertical: 20 }} 
      /></Pressable>
   </View>);};

export default index;
