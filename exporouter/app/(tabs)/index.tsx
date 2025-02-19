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
