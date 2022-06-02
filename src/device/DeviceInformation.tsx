import React from "react";
// import Device from 'react-native-device-info';
import * as Device from "expo-device";
// import SyncStorage from 'sync-storage';
// import * as RNLocalize from "react-native-localize";
import { stringAlias } from "../values/Strings/NivenStrings";
import { colorAlias } from "../values/Colors/NivenColors";

export default class DeviceInformation {
  getDeviceId() {
    return Device.osBuildId;
  }

  getDeviceBrand() {
    return Device.brand;
  }

  getDeviceName() {
    return Device.deviceName;
  }

  getDeviceModel() {
    return Device.modelName;
  }

  getDeviceVersion() {
    return Device.osVersion;
  }

  getAppVersion() {
    return Device.osBuildId;
  }

  isEmulator() {
    // return Device.isEmulator();
  }

  isTablet = async () => {
    // return Device.isTablet();
    return await Device.getDeviceTypeAsync();
  };

  getLocalStrings() {
    return stringAlias.EN;

    // let strings = SyncStorage.get("localStrings");

    // if (strings) {
    //     return strings;
    // }
    // else {
    //     let language = RNLocalize.getLocales()[0]["languageCode"];

    //     if (language === "de") {
    //         return stringAlias.DE
    //     }
    //     else {
    //         return stringAlias.EN
    //     }
    // }
  }

  // getLocaleLanguage() {
  //     let language = SyncStorage.get("language");

  //     if (language) {
  //         return language;
  //     }
  //     else {
  //         language = RNLocalize.getLocales()[0]["languageCode"];

  //         if (language === "de") {
  //             return language
  //         }
  //         else {
  //             return "en"
  //         }
  //     }
  // }

  getSelectedTheme() {
    return colorAlias.DEFAULT;

    // let theme = SyncStorage.get("theme");
    // if (theme) {
    //     return theme;
    // }
    // else {
    //     return colorAlias.DEFAULT;
    // }
  }
}
