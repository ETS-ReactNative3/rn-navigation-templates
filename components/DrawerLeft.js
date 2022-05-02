import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Drawer } from "react-native-paper";

const DrawerLeft = (props) => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <View>
            <View
              style={[
                styles.userInfoSection,
                { backgroundColor: props.styles.THEME },
              ]}>
              <View style={{ marginTop: 15 }}>
                <Avatar.Image source={props.profile.image} />
              </View>
              <View style={{ marginLeft: 9, marginTop: 15 }}>
                <Title style={{ color: props.styles.COLOR }}>
                  {props.profile.name}
                </Title>
                <Caption style={{ color: props.styles.COLOR }}>
                  {props.profile.email}
                </Caption>
              </View>
            </View>

            <Drawer.Section style={{ flex: 1, marginTop: 10 }}>
              {props.tabs.map((item, ind) => {
                return (
                  <DrawerItem
                    label={item.name}
                    icon={() => item.icon}
                    pressColor={props.styles.THEME}
                    key={ind}
                    onPress={() => props.navigation.navigate(item.name)}
                    labelStyle={[
                      styles.menuText,
                      { color: props.styles.COLOR },
                    ]}
                  />
                );
              })}
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  menuText: {
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 1,
  },

  userInfoSection: {
    marginBottom: 10,
    flexDirection: "row",
    width: "100%",
    padding: 10,
  },
});

export default DrawerLeft;
