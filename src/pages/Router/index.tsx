import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef, isMountedRef } from "../../RootMethods/RootNavigation";

import Login from "../NotLogin/Login";
import Register from "../NotLogin/Register";

import Home from "../Login/Home";
import AboutUs from "../Login/AboutUs";
import AddressBook from "../Login/AddressBook";
import Categories from "../Login/Categories";
import ChangePassword from "../Login/ChangePassword";
import ContactUs from "../Login/ContactUs";
import CustomerTestimonials from "../Login/CustomerTestimonials";
import FindAStore from "../Login/FindAStore";
import LoyaltyProgram from "../Login/LoyaltyProgram";
import MyAccount from "../Login/MyAccount";
import MyCart from "../Login/MyCart";
import MyOrders from "../Login/MyOrders";
import MyWishlist from "../Login/MyWishlist";
import Privacy from "../Login/Privacy";
import RequestAFreeCatalog from "../Login/RequestAFreeCatalog";

import { NivenDrawerMenu } from "../../components/ui/Core/DrawerMenu/NivenDrawerMenu";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="AddressBook" component={AddressBook} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="CustomerTestimonials" component={CustomerTestimonials} />
      <Stack.Screen name="FindAStore" component={FindAStore} />
      <Stack.Screen name="LoyaltyProgram" component={LoyaltyProgram} />
      <Stack.Screen name="MyAccount" component={MyAccount} />
      <Stack.Screen name="MyCart" component={MyCart} />
      <Stack.Screen name="MyOrders" component={MyOrders} />
      <Stack.Screen name="MyWishlist" component={MyWishlist} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="RequestAFreeCatalog" component={RequestAFreeCatalog} />
    </Stack.Navigator>
  );
};

export const Router = (props: any) => {

  useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <NivenDrawerMenu {...props} />}
      >
        <Drawer.Screen name={"HomeScreen"} component={StackScreens} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
