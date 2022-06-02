import React, { useContext } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { navigate } from "../../../../RootMethods/RootNavigation";
import PropTypes from "prop-types";
import { footerHeight } from "../../../../values/Constants/NivenConstants";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import { StringContext } from "../../../../contexts/StringContext";

interface IProps {
  activeIndex?: number;
}

export const NivenFooter = (props: IProps) => {
  const { nivenColors }: any = useContext(ThemeContext);
  const { nivenStrings }: any = useContext(StringContext);

  let { activeIndex = 1 } = props;

  function _renderItem(icon: any, text: any, index: any, navigateTo: any) {
    return (
      <TouchableOpacity
        onPress={() => {
          navigate(navigateTo);
        }}
        style={{
          flex: 1,
          alignItems: "center",
          height: "100%",
        }}
      >
        <Feather
          name={icon}
          style={{
            color: activeIndex === index ? nivenColors.mainColor : "#a1a1a1",
            marginTop: hp("1%"),
            fontSize: hp("2.2%"),
          }}
        />

        <Text
          style={{
            color: activeIndex === index ? nivenColors.mainColor : "#a1a1a1",
            fontSize: hp("1.3%"),
            marginTop: hp("0.5%"),
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={{
        height: footerHeight,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        flexDirection: "row",
        backgroundColor: nivenColors.footer,
        shadowColor: "rgba(0, 0, 0, 0.11)",
        shadowOffset: {
          width: 0,
          height: -3,
        },
        shadowRadius: 4,
        shadowOpacity: 1,
        borderTopWidth: 0.5,
        borderTopColor: "#a1a1a1",
        paddingHorizontal: 10,
      }}
    >
      {/* explore button*/}
      {_renderItem("home", nivenStrings.explore, 1, "Home")}

      {/* categories button*/}
      {_renderItem("codepen", nivenStrings._categories, 2, "Categories")}

      {/* cart button*/}
      {_renderItem("shopping-bag", nivenStrings.cart, 3, "Cart")}

      {/* my account button*/}
      {_renderItem("user", nivenStrings.drawerMenu.myAccount, 4, "MyAccount")}
    </View>
  );
};
