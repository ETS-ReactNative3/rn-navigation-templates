import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import DrawerLeft from "../components/DrawerLeft";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import DrawerCenter from "../components/DrawerCenter";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackScreen = ({ styles, item, navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: styles.HEADCOLOR,
        elevation: 10,
        shadowColor: "grey",
      },
      headerTintColor: styles.COLOR,
      headerTitleStyle: {
        letterSpacing: 1,
      },
    }}>
    <Stack.Screen
      name={item.name}
      component={item.screen}
      options={{
        title: item.name,
        headerLeft: () => (
          <Feather
            name="menu"
            style={{ marginLeft: 15 }}
            size={24}
            color={styles.COLOR}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

export const LDrawer = (props) => {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={props.tabs[0].name}
          drawerContent={(prop) => (
            <DrawerLeft
              profile={props.profile}
              tabs={props.tabs}
              styles={props.styles}
              {...prop}
            />
          )}>
          {props.tabs.map((item, ind) => {
            return (
              <Drawer.Screen key={ind} name={item.name}>
                {(prop) => (
                  <StackScreen styles={props.styles} {...prop} item={item} />
                )}
              </Drawer.Screen>
            );
          })}
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export const CDrawer = (props) => {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={props.tabs[0].name}
          drawerContent={(prop) => (
            <DrawerCenter
              profile={props.profile}
              tabs={props.tabs}
              styles={props.styles}
              {...prop}
            />
          )}>
          {props.tabs.map((item, ind) => {
            return (
              <Drawer.Screen key={ind} name={item.name}>
                {(prop) => (
                  <StackScreen styles={props.styles} {...prop} item={item} />
                )}
              </Drawer.Screen>
            );
          })}
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};
