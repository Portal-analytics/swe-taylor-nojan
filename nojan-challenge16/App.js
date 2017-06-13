import React from "react";
import SideMenu from "react-native-side-menu";
// import Menu from "./Menu";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import Settings from "./Settings.js";
import Home from "./Home.js";
import Profile from "./Profile.js";

const window = Dimensions.get("window");
const uri =
  "https://openclipart.org/image/2400px/svg_to_png/169903/1336392323.png";

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: "gray",
    padding: 20
  },
  menuItem: {
    fontSize: 20
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20
  },
  avatar: {
    width: 30,
    height: 30,
    flex: 1
  },
  name: {
    position: "absolute",
    left: 70,
    top: 20
  },
  item: {
    fontSize: 14,
    fontWeight: "300",
    paddingTop: 5
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#F5FCFF"
  },
  sidebar: {
    backgroundColor: "green"
  },
  nav: {
    marginTop: 25,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "green"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  navbar: {
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    textAlign: "center"
  }
});

class Button extends React.Component {
  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.handlePress.bind(this)}
        style={this.props.style}
      >
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}
class Menu extends React.Component {
  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <NativeRouter>
          <View style={styles.avatarContainer}>
            <View>
              <Link
                to={"/profile"}
                style={styles.subNavItem}
                underlayColor="#f0f4f7 "
              >
                <Text style={styles.menuItem}>Profile</Text>
              </Link>
            </View>
            <Route exact path="/profile" component={Profile} />
          </View>
        </NativeRouter>
      </ScrollView>
    );
  }
}

class Navbar extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <View style={styles.nav}>
            <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text>Home</Text>
            </Link>
            <Link to="/settings" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text>
                <Image style={styles.avatar} source={{ uri }} />
              </Text>
            </Link>
          </View>
          <Route exact path="/" component={Home} />
          <Route exact path="/settings" component={Settings} />
        </View>
      </NativeRouter>
    );
  }
}

module.exports = class Basic extends React.Component {
  state = {
    isOpen: false
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
    return (
      <SideMenu menu={menu} isOpen={this.state.isOpen}>
        <View style={styles.container}>
          <Navbar />
        </View>
      </SideMenu>
    );
  }
};
