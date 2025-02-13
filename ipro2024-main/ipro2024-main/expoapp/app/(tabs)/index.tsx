import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  useWindowDimensions,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ccc" }}>
    <ScrollView >
      <View style={{ height: 150 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            //justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <View>
              <Image
                style={styles.imgContainerTop}
                source={{
                  uri: "https://d3tfpmmm736cqr.cloudfront.net/r_sm_h/images/newsfeed/item/generate/cover/66c52f2a_e5872d_1.983.jpg",
                }}
              />
              {/* Icon overlay on the image */}
              <AntDesign
                name="heart"
                size={20}
                color="red"
                style={{ position: "absolute", top: 5, right: 15 }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
        <View style={{ flexDirection: "row", flex: 3, alignItems: "center"}}>
          <Text style={{ fontWeight: 800 }}>Энэ сарын онцлох</Text>
          <AntDesign name="star" size={18} color="gold" />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 1,
            marginBottom:10
          }}
        >
        </View>
      <View style={{marginBottom:10}}>
        <Text style={{ fontSize: 10 }}>Аудио ном</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          //justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <AntDesign
                name="heart"
                size={16}
                color="pink"
                style={{ position: "absolute", top: 5, right: 15 }}
              />
            <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          </View>
        ))}
      </ScrollView>
      <View style={{ flexDirection: "row",marginTop:10 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: 800,marginRight:2}}>Зөвхөн Mbook - ээс</Text>
          <FontAwesome6 name="headset" size={18} color="grey"/>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: 800 }}>Бүгд</Text>
          <AntDesign name="right" size={18} color="gold" />
        </View>
      </View>
      <View style={{marginBottom:10}}>
        <Text style={{ fontSize: 10 }}>Аудио номууд</Text>
      </View>
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          // justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          </View>
        ))}
      </ScrollView>
      <View style={{ flexDirection: "row",marginTop:10 }}>
        <View style={{ flexDirection: "row", flex: 3, alignItems: "center" }}>
          <Text style={{ fontWeight: 800 }}>Анх удаа ном сонсох гэж байна уу?</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: 800}}>Бүгд</Text>
          <AntDesign name="right" size={18} color="gold" />
        </View>
      </View>
      <View style={{marginBottom:10}}>
        <Text style={{ fontSize: 10 }}>Унших завгүй бол
          <Text style={{ fontSize: 16 }}> сонсоод </Text>
          үз
        </Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          //justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          </View>
        ))}
      </ScrollView>
      <View style={{ flexDirection: "row" ,marginTop:10}}>
        <View style={{ flexDirection: "row", flex: 3, alignItems: "center" }}>
          <Text style={{ fontWeight: 800 }}>Багц номууд</Text>
          <AntDesign name="book" size={18} color="green" />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 1,
            marginBottom:10
          }}
        >
          <Text style={{ fontWeight: 800}}>Бүгд</Text>
          <AntDesign name="right" size={18} color="gold" />
        </View>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          //justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <View style={{marginBottom:10}}>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          </View>
        ))}
      </ScrollView>
      <ImageBackground source={{ uri: 'https://d3tfpmmm736cqr.cloudfront.net/r_sm_h/images/newsfeed/item/generate/cover/677cda45_1a1814_1.983.jpg' }} style={{width:"auto",height:200}}>
      <View style={{ flexDirection: "row", flex: 3, alignItems: "center" }}>
          <Text style={{ fontWeight: 800,color:"white",marginLeft:10 ,marginRight:3}}>Credit books</Text>
          <FontAwesome6 name="star-and-crescent" size={16} color="yellow" />
        </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          //justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        <Image
              style={styles.imgContainer}
            />
        {Array.from({ length: 10 }).map((_, index) => (
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          </View>
        ))}
      </ScrollView>
      </ImageBackground>
        
      <View style={{ flexDirection: "row",marginTop:10 }}>
        <View style={{ flexDirection: "row", flex: 3, alignItems: "center" }}>
          <Text style={{ fontWeight: 800,marginRight:2 }}>Заавал сонсох 10 ном</Text>
          <FontAwesome6 name="headset" size={18} color="grey"/>
        </View>
      </View>
      <View style={{flexDirection: "row",alignItems: "center" ,marginBottom:10}}>
        <Text style={{ fontSize: 10 }}>Subscription/Credit эрхээрээ аваарай</Text>
        <AntDesign name="star" size={18} color="gold" />
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          //justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <View style={{marginBottom:10}}>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <AntDesign
                name="heart"
                size={16}
                color="pink"
                style={{ position: "absolute", top: 5, right: 15 }}
              />
            <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          </View>
        ))}
      </ScrollView>
      {/* 8 */}
      <ImageBackground source={{ uri: 'https://plus.unsplash.com/premium_photo-1701534008693-0eee0632d47a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3Dc' }} style={{width:"auto",height:200}}>
      <View style={{flexDirection:"row"}}>
        <View>
          <Text style={{ fontWeight: 800,color:"white",marginLeft:20}}>Burii - н санал болгох номууд</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: 800,color:"gold" }}>Бүгд</Text>
          <AntDesign name="right" size={18} color="gold" />
        </View>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          //justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        <Image
              style={styles.imgContainer}
            />
        {Array.from({ length: 10 }).map((_, index) => (
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          </View>
        ))}
      </ScrollView>
      </ImageBackground>
        
                {/* 10 tsagiin buteeluud */}
                <View style={{ flexDirection: "row",marginTop:10 }}>
        <View>
          <Text style={{ fontWeight: 800,marginRight:2}}>+10 цагийн бүтээлүүд</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: 800}}>Бүгд</Text>
          <AntDesign name="right" size={18} color="gold" />
        </View>
      </View>
      <View style={{marginBottom:10}}>
        <Text style={{ fontSize: 10 }}>Аудио ном</Text>
      </View>
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          // justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          </View>
        ))}
      </ScrollView>
{/* 2024 best */}
<View style={{ flexDirection: "row",marginTop:10 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: 800,marginRight:2}}>2024 Бестселлер</Text>
          <FontAwesome6 name="star" size={18} color="gold" />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: 800}}>Бүгд</Text>
          <AntDesign name="right" size={18} color="gold" />
        </View>
      </View>
      <View style={{marginBottom:10}}>
        <Text style={{ fontSize: 10 }}>Аудио ном</Text>
      </View>
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          // justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <FontAwesome6 
            name="headphones-simple" 
            size={16} 
            color="grey" 
            style={{ position: "absolute", top: 5, right: 15 }}
            />
            <AntDesign
                name="heart"
                size={16}
                color="pink"
                style={{ position: "absolute", top: 5, right: 32 }}
              />
            <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          </View>
        ))}
      </ScrollView>
          {/* -5 tsagiin buteeluud */}
      <View style={{ flexDirection: "row",marginTop:10 }}>
        <View>
          <Text style={{ fontWeight: 800}}>-5 цагийн бүтээлүүд</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 1,
            
          }}
        >
          <Text style={{ fontWeight: 800 }}>Бүгд</Text>
          <AntDesign name="right" size={18} color="gold" />
        </View>
      </View>
      <View style={{marginBottom:10}}>
        <Text style={{ fontSize: 10 }}>Аудио ном</Text>
      </View>
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          // justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          </View>
        ))}
      </ScrollView>
        {/* unegui audio nom */}
        <View style={{flexDirection:"row",marginTop:10}}>
        <View>
          <Text style={{ fontWeight: 800}}>Үнэгүй аудио номууд</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: 800 }}>Бүгд</Text>
          <AntDesign name="right" size={18} color="gold" />
        </View>
      </View>
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          // justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <View style={{marginTop:10}}>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          </View>
        ))}
      </ScrollView>
          {/* zohiolcid */}
          <View style={{flexDirection:"row",marginTop:10}} >
        <View style={{ flexDirection: "row", flex: 3, alignItems: "center" }}>
          <Text style={{ fontWeight: 800,marginRight:2}}>Зохиолчид</Text>
          <FontAwesome6 name="headset" size={18} color="grey"/>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: 800 }}>Бүгд</Text>
          <AntDesign name="right" size={18} color="gold" />
        </View>
      </View>
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          // justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <View style={{marginTop:10}}>
            <Image
              style={styles.imgContainerZ}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <Text style={{ color: "gray", textAlign:"center"}}>James</Text>
          </View>
        ))}
      </ScrollView>
      {/* hevleliin gazruud */}
      <View style={{flexDirection:"row",marginBottom:10}}>
        <View  style={{  flexDirection: "row", flex: 3}}>
          <Text  style={{  fontWeight: 800,marginRight:3}} >Эрхлэн гаргагч, хэвлэлийн газрууд   
          <FontAwesome6 name="headset" size={18} color="grey"/></Text>
        </View>
        {/* numberOfLines={2} ellipsizeMode="tail" */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: 800}}>Бүгд</Text>
          <AntDesign name="right" size={18} color="gold" />
        </View>
      </View>
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          // justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <View>
            <Image
              style={styles.imgContainerZ}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <Text style={{ color: "gray", textAlign:"center"}}>James</Text>
          </View>
        ))}
      </ScrollView>
      {/* mbook nomiin club */}
      <View style={{ flexDirection:"row"}}>
      <View style={{ flexDirection: "row", flex: 3, alignItems:"center"}}>
          <Text style={{ fontWeight: 800,marginBottom:-10}} >Mbook номын клуб-с санал болгох нь </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 1,
            marginTop:20
          }}
        >
          <Text style={{ fontWeight: 800}}>Бүгд</Text>
          <AntDesign name="right" size={18} color="gold" />
        </View>
      </View>
      <View style={{flexDirection:"row",marginBottom:10}}>
        <Text style={{ fontSize: 10 }}>Бидний сонссон номууд...</Text>
      </View>

      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          // justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <View style={{marginBottom:50}}>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }}></View>
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  a: ThirdRoute,
  b: ThirdRoute,
  c: ThirdRoute,
  d: ThirdRoute,
  e: ThirdRoute,
  f: ThirdRoute,
  g: ThirdRoute,
  h: ThirdRoute,
  i: ThirdRoute,
});

const routes = [
  { key: "first", title: "Танд зориулсан" },
  { key: "second", title: "Аудио ном" },
  { key: "third", title: "Цахим ном" },
  { key: "a", title: "Цахим ном" },
  { key: "b", title: "Цахим ном" },
  { key: "c", title: "Цахим ном" },
  { key: "d", title: "Цахим ном" },
  { key: "e", title: "Цахим ном" },
  { key: "f", title: "Цахим ном" },
  { key: "g", title: "Цахим ном" },
  { key: "h", title: "Цахим ном" },
  { key: "i", title: "Цахим ном" },
];

export default function index() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            scrollEnabled={true} // Tab-ууд гүйлгэх боломжтой болно
            style={{ backgroundColor: "orange" }}
          />
        )}
      />
      <View style={{ flexDirection: "row" }}>
        <Text>HELLO WORLD</Text>
        <FontAwesome6 name="chevron-right" size={24} color="plum" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  imgContainer: {
    height: 100,
    width: 100,
    marginRight: 10,
    marginLeft: 10,
  },
  imgContainerZ: {
    height: 100,
    width: 100,
    marginRight: 10,
    marginLeft: 10,
    borderRadius:50,
  },
  imgContainerTop: {
    height: 100,
    width: 200,
    marginRight: 10,
    marginLeft: 10,
  },
  imgContainerP: {
    height: 100,
    width: 200, 
    marginRight: 10,
    marginLeft: 10,
}

});
