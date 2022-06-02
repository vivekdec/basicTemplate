import React, { useContext } from "react";
import { View, TouchableOpacity, Text, ScrollView, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { closeDrawer, navigate } from "../../../../RootMethods/RootNavigation";
// import {LoginContext} from "../../../../contexts/LoginContext";
import { fontFamily } from "../../../../values/Styles/NivenStyles";
import { statusBarHeight } from "../../../../values/Constants/NivenConstants";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import { StringContext } from "../../../../contexts/StringContext";

export const NivenDrawerMenu = (props: any) => {
  // const loginContext = useContext(LoginContext);
  const { nivenColors }: any = useContext(ThemeContext);
  const { nivenStrings }: any = useContext(StringContext);

  function _handleLogout() {
    // to let know the navigator user has no more login
    // loginContext.setLogin(false);

    // to close drawer menu after logout
    closeDrawer();
    // to navigate the Home screen
    navigate("Home");
  }

  function _goToProfilePage() {
    // navigate("ProfilePage")
  }

  function _renderMenuItem(icon:any, text:any, navigateTo:any, logout = false) {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          margin: hp("1.5%"),
          marginVertical: hp("2%"),
          marginLeft: wp("1%"),
        }}
        onPress={() => {
          if (!logout) {
            navigate(navigateTo);
          } else {
            _handleLogout();
          }
        }}
      >
        <Feather
          name={icon}
          style={{
            flex: 2,
            fontSize: hp("2.5%"),
            color: "white",
            textAlign: "center",
          }}
        />

        <Text
          style={{
            flex: 8,
            fontSize: hp("2%"),
            color: "white",
            marginLeft: 5,
            fontWeight: "500",
            fontStyle: "normal",
            letterSpacing: 0,
            fontFamily: fontFamily.medium,
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
        flex: 1,
        backgroundColor: nivenColors.mainColor,
        paddingTop: statusBarHeight,
        width: "100%",
      }}
    >
      <ScrollView style={{ marginTop: hp("1%"), marginBottom: hp("1%") }}>
        {/* settings button*/}
        {_renderMenuItem(
          "home",
          nivenStrings.drawerMenu.home,
          "Home",
          false
        )}

        {/* favorites button */}
        {_renderMenuItem(
          "heart",
          nivenStrings.drawerMenu.favorites,
          "Favorites",
          false
        )}

        {/* contact us button */}
        {_renderMenuItem(
          "command",
          nivenStrings.drawerMenu.contactUs,
          "ContactUs",
          false
        )}

        {/* about us button */}
        {_renderMenuItem(
          "info",
          nivenStrings.drawerMenu.aboutUs,
          "AboutUs",
          false
        )}

        {/* about us button */}
        {_renderMenuItem(
          "dollar-sign",
          nivenStrings.drawerMenu.applyFor0Financing,
          "AboutUs",
          false
        )}

        {/* privacy button */}
        {_renderMenuItem(
          "shield",
          nivenStrings.drawerMenu.privacy,
          "Privacy",
          false
        )}

        {/* privacy button */}
        {_renderMenuItem(
          "truck",
          nivenStrings.drawerMenu.shippingAndReturn,
          "Privacy",
          false
        )}

        {/* privacy button */}
        {_renderMenuItem(
          "layout",
          nivenStrings.drawerMenu.findAStore,
          "Privacy",
          false
        )}

         {/* privacy button */}
         {_renderMenuItem(
          "file",
          nivenStrings.drawerMenu.requestaFreeCatalog,
          "Privacy",
          false
        )}

         {/* privacy button */}
         {_renderMenuItem(
          "user",
          nivenStrings.drawerMenu.customerTestimonial,
          "Privacy",
          false
        )}

        {/* logout button */}
        {_renderMenuItem("log-out", nivenStrings.drawerMenu.logout, "", true)}
      </ScrollView>

      
    </View>
  );
};
