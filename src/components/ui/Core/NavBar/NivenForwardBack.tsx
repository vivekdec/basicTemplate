import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import PropTypes from "prop-types";
import { Feather } from '@expo/vector-icons'; 
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const NivenForwardBack = (props:any) => {
  let { leftOnPress, text, containerStyle } = props;

  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: hp(2),
        alignItems: "center",
        ...containerStyle,
      }}
    >
      {/* back button */}
      <TouchableOpacity
        onPress={() => leftOnPress()}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Feather
          style={{
            color: "white",
            fontSize: hp("3.5%"),
            marginLeft: 10,
          }}
          name={"arrow-left"}
        />
      </TouchableOpacity>

      {/* title text */}
      <Text
        style={{
          fontSize: hp(2.5),
          fontWeight: "600",
          fontStyle: "normal",
          textAlign: "center",
          color: "#ffffff",
          flex: 6,
        }}
      >
        {text}
      </Text>

      {/* dummy view */}
      <View style={{ flex: 1 }} />
    </View>
  );
};

NivenForwardBack.propTypes = {
  containerStyle: PropTypes.object,
  leftOnPress: PropTypes.func,
  text: PropTypes.string,
};

NivenForwardBack.defaultProps = {
  text: "",
};
