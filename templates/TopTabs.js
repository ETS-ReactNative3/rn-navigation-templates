import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

export const TopTabsIconView = (props) => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            indicatorStyle: {
              backgroundColor: props.styles.BOTTOMLINE,
            },
            style: {
              backgroundColor: props.styles.BGCOLOR,
              marginTop: 20,
            },
          }}>
          {props.tabs.map((item, ind) => {
            return (
              <Tab.Screen
                key={ind}
                options={{
                  title: ({ color }) => item.icon,
                }}
                name={item.name}
                component={item.screen}
              />
            );
          })}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export const TopTabsTextView = (props) => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: props.styles.COLOR,
            indicatorStyle: {
              backgroundColor: props.styles.BOTTOMLINE,
            },
            style: {
              backgroundColor: props.styles.BGCOLOR,
              marginTop: 20,
            },
          }}>
          {props.tabs.map((item, ind) => {
            return (
              <Tab.Screen key={ind} name={item.name} component={item.screen} />
            );
          })}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};
