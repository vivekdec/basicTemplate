// ./screens/Home.js

import React, { useContext } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { NivenContainer } from "../../../components/ui/Core/Container/NivenContainer";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { FontAwesome } from "@expo/vector-icons";
import { navigate, openDrawer } from "../../../RootMethods/RootNavigation";
import { StringContext } from "../../../contexts/StringContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import {
  isTablet,
  navbarHeight,
} from "../../../values/Constants/NivenConstants";

const Home = ({ navigation }: any) => {
  const { nivenColors }: any = useContext(ThemeContext);
  const { nivenStrings }: any = useContext(StringContext);

  return (
    <NivenContainer footerActiveIndex={1} navbar={false}>
      {/* home screen navbar */}
      <View
        style={{
          height: navbarHeight,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          backgroundColor: nivenColors.navBarColor,
        }}
      >
        {/* user button */}
        <TouchableOpacity
          onPress={() => {
            openDrawer();
          }}
          style={{ flex: 1.5, alignItems: "center", zIndex: 1 }}
        >
          <FontAwesome
            style={{ fontSize: hp("3%") }}
            color={"white"}
            name={"bars"}
          />
        </TouchableOpacity>

        {/* logo view */}
        <View
          style={{
            width: "100%",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            flex: 7,
            backgroundColor: "white",
          }}
        >
          {/* logo with text */}
          <Image
            source={require("../../../../assets/logo/event-decor-direct-logo.png")}
            style={{ height: hp("3%") }}
            resizeMode={"contain"}
          />
        </View>

        {/* search button */}
        <TouchableOpacity
          onPress={() => {
            navigate("HomeFilter");
          }}
          style={{ flex: 1.5, alignItems: "center" }}
        >
          <FontAwesome
            style={{ fontSize: hp("2.5%") }}
            color={"white"}
            name={"search"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.center}>
        <Text>This is the home screen</Text>
        <Button
          title="Go to About Screen"
          onPress={() => navigation.navigate("Login")} // We added an onPress event which would navigate to the About screen
        />
      </View>
    </NivenContainer>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Home;
