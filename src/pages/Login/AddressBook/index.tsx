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

const AddressBook = ({ navigation }: any) => {
  const { nivenColors }: any = useContext(ThemeContext);
  const { nivenStrings }: any = useContext(StringContext);

  return (
    <NivenContainer footerActiveIndex={1} navbar={false}>
      {/* home screen navbar */}
      <View style={styles.center}>
        <Text>This is the AddressBook screen</Text>
       
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

export default AddressBook;
