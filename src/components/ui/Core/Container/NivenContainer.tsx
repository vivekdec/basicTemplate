import React, { useContext } from "react";
import { View, StatusBar } from "react-native";
import { NivenNavBar } from "../NavBar/NivenNavBar";
import PropTypes from "prop-types";
import { NivenFooter } from "../Footer/NivenFooter";
// import {MowToast} from "../../Common/Toast/MowToast";
import { footerHeight } from "../../../../values/Constants/NivenConstants";
import { NivenStatusBar } from "../StatusBar/NivenStatusBar";
// import {MowDialog} from "../../Dialog/MowDialog";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import { StringContext } from "../../../../contexts/StringContext";
 
interface IProps{
  statusBar?: boolean;
  footer?: boolean;
  footerActiveIndex?: number;
  navbar?: boolean;
  title?: string;
  style?: any;
  children?: any;
}

export const NivenContainer = (props: IProps) => {
  const { nivenColors }: any = useContext(ThemeContext);
  const { nivenStrings }: any = useContext(StringContext);

  let {
    statusBar = true,
    footer = true,
    footerActiveIndex = 1,
    navbar = true,
    title = "",
    style,
    children
  } = props;

  return (
    <View
      style={{ backgroundColor: nivenColors.pageBGColor, flex: 1, ...style }}
    >
      {statusBar && <NivenStatusBar />}

      {!statusBar && <StatusBar hidden />}

      {navbar && <NivenNavBar title={title} />}

      <View style={{ flex: 1, paddingBottom: footer ? footerHeight : 0 }}>
        {props.children}
      </View>

      {footer && <NivenFooter activeIndex={footerActiveIndex} />}
      {/* 
            <MowDialog/>

            <MowToast/> */}
    </View>
  );
};


