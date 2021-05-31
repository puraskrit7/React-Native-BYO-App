import React from "react";
import { View, Text, Alert, Modal, Image, ImageBackground } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import ListCard from "./ListCard";
import { ScrollView } from "react-native-gesture-handler";

export default function Detail () {

    return (
      <View
        style={{ height: "100%", width: "100%", backgroundColor:"green" }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 40,
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
          <Icon name="menu" size={30} color="#a2a2db" style={{ width: 30 }} />
          <Icon
            name="account-circle"
            size={33}
            color="#a2a2db"
            style={{ marginLeft: 280 }}
          />
        </View>

        <View
          style={{
            width: "100%",
            marginTop: 50,
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              backgroundColor: "#5facdb",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../images/p.png")}
              style={{ height: 26, width: 26 }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontFamily: "RobotoBold",
              color: "#FFF",
            }}
          >
            MUMBAI
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "#a2a2db",
              paddingHorizontal: 15,
            }}
          >
            - - - - - - - - - - - - - - 
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: "RobotoBold",
              color: "#FFF",
            }}
          >
            DELHI
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 50,
            marginTop: 60,
          }}
        >
          <Image
            source={require("../images/dots.png")}
            style={{ width: 18, height: 16 }}
          />
          <Image
            source={require("../images/filter.png")}
            style={{ marginLeft: 260, width: 20, height: 18 }}
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginVertical: 30,
          }}
        >
                <ListCard></ListCard>
                <ListCard></ListCard>
                <ListCard></ListCard>
                <ListCard></ListCard>
                <ListCard></ListCard>
                <ListCard></ListCard>
                <ListCard></ListCard>
          <View>
          </View>
        </ScrollView>
      </View>
    );
  
}
