import React, { useContext } from "react";
import { View, StatusBar } from "react-native";
import {
  platform,
  statusBarHeight,
} from "../../../../values/Constants/NivenConstants";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import { StringContext } from "../../../../contexts/StringContext";

export const NivenStatusBar = (props: any) => {
  const { nivenColors }: any = useContext(ThemeContext);
  const { nivenStrings }: any = useContext(StringContext);

  return (
    <View>
      {platform === "ios" ? (
        // ios status bar
        <View>
          <View
            style={{
              backgroundColor: nivenColors.statusbarColor,
              height: statusBarHeight,
            }}
          />
          <StatusBar
            backgroundColor={nivenColors.statusbarColor}
            barStyle="light-content"
          />
        </View>
      ) : (
        // android status bar
        <StatusBar
          backgroundColor={nivenColors.statusbarColor}
          barStyle="light-content"
        />
      )}
    </View>
  );
};
