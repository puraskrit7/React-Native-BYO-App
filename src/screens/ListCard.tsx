import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function ListCard () {

    return (
      <View
        style={{
          paddingHorizontal: 32,
          alignSelf: "center",
          marginTop: 20,
          backgroundColor: "#FFF",
          height: 182,
          width: 270,
          borderRadius: 90,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingTop: 20,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoBold",
              color: "#4b3ca7",
              fontSize: 20,
            }}
          >
            MUM
          </Text>

          <Text
            style={{
              fontSize: 20,
              color: "#a2a2db",
              paddingHorizontal: 14,
            }}
          >
            - - - - - - - - - -
          </Text>
          <Text
            style={{
              fontFamily: "RobotoBold",
              color: "#4b3ca7",
              fontSize: 20,
            }}
          >
            DEL
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#522289",
              fontSize: 16,
            }}
          >
            09:00 AM
          </Text>

          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#522289",
              paddingLeft: 80,
              fontSize: 16,
            }}
          >
            21:00 PM
          </Text>
        </View>

        <Text
          style={{
            fontFamily: "RobotoRegular",
            color: "#a2a2db",
            fontSize: 12,
          }}
        >
          27 May, 2021
        </Text>

        <Text
          style={{
            fontSize: 17,
            marginRight: -5,
            marginVertical: 8,
            color: "#a2a2db",
          }}
        >
          - - - - - - - - - - - - - - - - - - - - - - -
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginTop: -8,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#522289",
              fontSize: 16,
            }}
          >
            Total Cost
          </Text>
          <Text
            style={{
              fontFamily: "RobotoBold",
              color: "#4b3ca7",
              paddingLeft: 85,
              fontSize: 16,
            }}
          >
            $400
          </Text>
        </View>
      </View>
    );
  
}
