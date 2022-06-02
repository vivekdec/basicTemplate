import {Dimensions, Platform} from "react-native";
import {getStatusBarHeight} from "react-native-status-bar-height";
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DeviceInformation from "../../device/DeviceInformation";

export const isTablet = new DeviceInformation().isTablet();
export const platform = Platform.OS;
export const statusBarHeight = getStatusBarHeight();
export const navbarHeight = hp("6%");
export const footerHeight = platform === "ios" ? hp(8) : hp(6);
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
export const pageHeight = deviceHeight - (navbarHeight + statusBarHeight + footerHeight);
