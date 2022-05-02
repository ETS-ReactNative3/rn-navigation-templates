# rn-navigation-templates

A built-in navigation tabs and drawers for your react-native application.

## Demo:

The package includes 6 different templates for navigation.

<table>
  <tr>
     <td align="center">LDrawer</td>
     <td align="center">CDrawer</td>
     <td align="center">BottomTabsAnimated</td>
  </tr>
  <tr>
    <td><img src="https://github.com/Nikhil1602/Assets/blob/main/LDrawer.gif?raw=true" width=270 height=480></td>
    <td><img src="https://github.com/Nikhil1602/Assets/blob/main/CDrawer.gif?raw=true" width=270 height=480></td>
    <td><img src="https://github.com/Nikhil1602/Assets/blob/main/BottomTabsAnimated.gif?raw=true" width=270 height=480></td>
  </tr>
  <tr>
     <td align="center">TopTabsIconView</td>
     <td align="center">TopTabsTextView</td>
     <td align="center">BottomTabs</td>
  </tr>
  <tr>
    <td><img src="https://github.com/Nikhil1602/Assets/blob/main/TopTabsIconView.gif?raw=true" width=270 height=480></td>
    <td><img src="https://github.com/Nikhil1602/Assets/blob/main/TopTabsTextView.gif?raw=true" width=270 height=480></td>
    <td><img src="https://github.com/Nikhil1602/Assets/blob/main/BottomTabs.gif?raw=true" width=270 height=480></td>
  </tr>
</table>

## Installation

First of all, copy the command

```bash
  npm install rn-navigation-templates
```

Now, if you are working on `expo` project
you have to add one line in the file called `babel.config.js`.

```bash
  module.exports = function (api) {
  ...
  return {
    ...
    plugins: ["react-native-reanimated/plugin"],
  };
};
```

**Note** : You have to add `plugins:` at the end of any text inside return keyword.

Now, you can choose the navigation template you want to add in your project.

## Props:

| Component                         | Props                     | Values                                                       | Description                                                                                                                                                             |
| :-------------------------------- | :------------------------ | :----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<LDrawer />`<br /> `<CDrawer />` | `tabs` `profile` `styles` | `tabs` - array of objects <br/> `profile` `styles` - objects | `tabs` should contains object `name` `icon` `screen` <br /> `profile` should contain `name` `email` `image` <br /> `styles` should contains `HEADCOLOR` `THEME` `COLOR` |
| `<BottomTabsAnimated />`          | `tabs` `styles`           | `tabs` - array of objects <br /> `styles` - objects          | `tabs` should contains objects `name` `icon` `screen` `color` <br /> `styles` should contain only `Color`                                                               |
| `<TopTabsIconView />`             | `tabs` `styles`           | `tabs` - array of objects <br /> `styles` - objects          | `tabs` should contains objects `name` `icon` `screen` <br /> `styles` should contains `BOTTOMLINE` `BGCOLOR`                                                            |
| `<TopTabsTextView />`             | `tabs` `styles`           | `tabs` - array of objects <br /> `styles` - objects          | `tabs` should contains objects `name` `screen` <br /> `styles` should contains `BOTTOMLINE` `BGCOLOR` `COLOR`                                                           |
| `<BottomTabs />`                  | `tabs` `styles`           | `tabs` - array of objects <br /> `styles` - objects          | `tabs` should contains objects `name` `icon` `focused` `screen` <br /> `styles` should contain only `bgColor` `activeColor` `Color`                                     |

**Note**: You have to pass all the props mention above for particular component, otherwise it will throw an error.

## Usage:

- LDrawer

```bash
  import React from "react";
  import Home from "./Screens/Home";
  import Settings from "./Screens/Settings";
  import Message from "./Screens/Message";
  import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
  import bgImage from "./assets/favicon.png";
  import { LDrawer } from "rn-navigation-templates";

  let tabs = [
    {
      name: "Home",
      icon: <FontAwesome5 name="home" size={24} color="black" />,
      screen: Home,
    },
    {
      name: "Settings",
      icon: <Ionicons name="settings" size={24} color="black" />,
      screen: Settings,
    },
    {
      name: "Message",
      icon: <MaterialIcons name="message" size={24} color="black" />,
      screen: Message,
    },
  ];

  const styles = {
    HEADCOLOR: "white",
    THEME: "yellow",
    COLOR: "black",
  };

  const profile = {
    name: "Nikhil",
    email: "nikhil1602@gmail.com",
    image: bgImage,
  };

  export default App = () => {
    return <CDrawer profile={profile} tabs={tabs} styles={styles} />;
  };
```

- BottomTabsAnimated

```bash
  import React from "react";
  import Home from "./Screens/Home";
  import Settings from "./Screens/Settings";
  import Message from "./Screens/Message";
  import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
  import { BottomTabsAnimated } from "rn-navigation-templates";

  let tabs = [
    {
      name: "Home",
      icon: <FontAwesome5 name="home" size={24} color="black" />,
      screen: Home,
      color: 'red'
    },
    {
      name: "Settings",
      icon: <Ionicons name="settings" size={24} color="black" />,
      screen: Settings,
      color: 'blue'
    },
    {
      name: "Message",
      icon: <MaterialIcons name="message" size={24} color="black" />,
      screen: Message,
      color: 'green'
    },
  ];

  const styles = {
    Color: 'white',
  }

  export default App = () => {
    return <BottomTabsAnimated tabs={tabs} styles={styles} />;
  };
```

- TopTabsIconView

```bash
  import React from "react";
  import Home from "./Screens/Home";
  import Settings from "./Screens/Settings";
  import Message from "./Screens/Message";
  import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
  import { TopTabsIconView } from "rn-navigation-templates";

  let tabs = [
    {
      name: "Home",
      icon: <FontAwesome5 name="home" size={24} color="black" />,
      screen: Home,
    },
    {
      name: "Settings",
      icon: <Ionicons name="settings" size={24} color="black" />,
      screen: Settings,
    },
    {
      name: "Message",
      icon: <MaterialIcons name="message" size={24} color="black" />,
      screen: Message,
    },
  ];

  const styles = {
    BOTTOMLINE: "red",
    BGCOLOR: "yellow",
  };

  export default App = () => {
    return <TopTabsIconView tabs={tabs} styles={styles} />;
  };
```

- BottomTabs

```bash
  import React from "react";
  import Home from "./Screens/Home";
  import Settings from "./Screens/Settings";
  import Message from "./Screens/Message";
  import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
  import { BottomTabs } from "rn-navigation-templates";

  let tabs = [
    {
      name: "Home",
      icon: <FontAwesome5 name="home" size={24} color="black" />,
      focused: <FontAwesome5 name="home" size={24} color="red" />,
      screen: Home,
    },
    {
      name: "Settings",
      icon: <Ionicons name="settings" size={24} color="black" />,
      focused: <Ionicons name="settings" size={24} color="red" />,
      screen: Settings,

    },
    {
      name: "Message",
      icon: <MaterialIcons name="message" size={24} color="black" />,
      focused: <MaterialIcons name="message" size={24} color="red" />,
      screen: Message,

    },
  ];

  const styles = {
    activeColor: "red",
    bgColor: "white",
    Color: "black",
  }

  export default App = () => {
    return <BottomTabs tabs={tabs} styles={styles} />;
  };
```

## Author

- [@NikhilBarot](https://www.github.com/Nikhil1602)
