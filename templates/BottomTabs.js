import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AnimatedTab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const StackScreen = ({ animate, styles, item }) => (
  <>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: animate ? item.color : styles.BGCOLOR,
          elevation: 10,
          shadowColor: "grey",
        },
        headerTintColor: styles.Color,
        headerTitleStyle: {
          letterSpacing: 1,
        },
        headerTitleAlign: "center",
      }}>
      <Stack.Screen
        name={item.name}
        component={item.screen}
        options={{
          title: item.name,
        }}
      />
    </Stack.Navigator>
  </>
);

export const BottomTabsAnimated = (props) => {
  return (
    <NavigationContainer>
      <AnimatedTab.Navigator
        shifting={true}
        initialRouteName={props.tabs[0].name}
        activeColor={props.styles.Color}>
        {props.tabs.map((item, ind) => {
          return (
            <AnimatedTab.Screen
              key={ind}
              name={item.name}
              children={() => (
                <StackScreen animate={true} styles={props.styles} item={item} />
              )}
              options={{
                tabBarLabel: item.name,
                tabBarColor: item.color,
                tabBarIcon: ({ color }) => item.icon,
              }}
            />
          );
        })}
      </AnimatedTab.Navigator>
    </NavigationContainer>
  );
};

export const BottomTabs = (props) => {
  const isPropsThere = () => {
    if (props !== undefined) return true;
    else return false;
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        shifting={true}
        tabBarOptions={{ activeTintColor: props.styles.activeColor }}
        initialRouteName={isPropsThere ? props.tabs[0].name : tabs[0].name}
        activeColor={props.styles.activeColor}>
        {props.tabs.map((item, ind) => {
          return (
            <Tab.Screen
              key={ind}
              name={item.name}
              children={() => (
                <StackScreen
                  animate={false}
                  styles={props.styles}
                  item={item}
                />
              )}
              options={{
                tabBarLabel: item.name,
                tabBarIcon: ({ color, focused }) =>
                  focused ? item.focused : item.icon,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
