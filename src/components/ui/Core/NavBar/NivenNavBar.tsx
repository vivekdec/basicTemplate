import React, { useContext } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { navbarHeight } from "../../../../values/Constants/NivenConstants";
import { fontFamily } from "../../../../values/Styles/NivenStyles";
import { goBack, openDrawer } from "../../../../RootMethods/RootNavigation";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import { StringContext } from "../../../../contexts/StringContext";

interface IProps{
  title?: string;
}

export const NivenNavBar = (props:IProps) => {
  const { nivenColors }:any = useContext(ThemeContext);
  const { nivenStrings }:any = useContext(StringContext);

  let { title="" } = props;

  return (
    <View
      style={{
        height: navbarHeight,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        zIndex: 999,
        backgroundColor: nivenColors.navBarColor,
      }}
    >
      {/* back button */}
      <TouchableOpacity
        onPress={() => goBack()}
        style={{
          flex: 1.5,
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 5,
        }}
      >
        <FontAwesome
          style={{ fontSize: hp("4%") }}
          color={"white"}
          name={"angle-left"}
        />
      </TouchableOpacity>

      {/* page title */}
      <Text
        style={{
          flex: 7,
          fontSize: hp("2%"),
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          fontFamily: fontFamily.bold,
        }}
      >
        {title}
      </Text>

      {/* user button */}
      <TouchableOpacity
        onPress={() => {
          openDrawer();
        }}
        style={{ flex: 1.5, alignItems: "center" }}
      >
        <FontAwesome style={{ fontSize: hp("3%") }} color={"white"} name={"bars"} />
      </TouchableOpacity>
    </View>
  );
};

