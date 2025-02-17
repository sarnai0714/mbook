import React from "react";
import { Link } from "expo-router";
import { View, Text } from "react-native";

const about = () => {
  return (
    <View>
      <Text>About Page</Text>
      <Link href="/Aboutus">
        <Text>Go to About Us</Text>
      </Link>
    </View>
  );
};

export default about;
