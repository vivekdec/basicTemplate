// RootNavigation.js

import * as React from "react";
import { DrawerActions } from "@react-navigation/native";
import { useIsDrawerOpen } from "@react-navigation/drawer";

export const isMountedRef: any = React.createRef();

export const navigationRef: any = React.createRef();

// to navigate new screen
export function navigate(name: any, params = null) {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

// to open drawer menu
export function openDrawer() {
  navigationRef.current.dispatch(DrawerActions.openDrawer());
}

// to close drawer menu
export function closeDrawer() {
  navigationRef.current.dispatch(DrawerActions.closeDrawer());
}

// to go back previous screen
export function goBack() {
  navigationRef.current.goBack();
}

// to control is drawer menu open or not?
export function isDrawerOpen() {
  return useIsDrawerOpen();
}

// if the screen is focused
export function isFocused() {
  return navigationRef.current.isFocused();
}
