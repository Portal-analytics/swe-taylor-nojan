import React from "react";
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import Settings from "./Settings.js";
import Home from "./Home.js";
import Profile from "./Profile.js";

const window = Dimensions.get("window");
const uri = "https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png";

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: "gray",
    padding: 20
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
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
  profile: {
    fontSize: 20,
    fontWeight: "900"
  }
});

module.exports = class Menu extends React.Component {
  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{ uri }} />
          <Text style={styles.name}>killme</Text>
          <NativeRouter>
            <View>
              <Link
                to={"/Profile"}
                style={styles.profile}
                underlayColor="#f0f4f7 "
              >
                <Text>Profile</Text>
              </Link>
              <Route exact path={`/Profile`} component={Profile} />
            </View>
          </NativeRouter>
        </View>
      </ScrollView>
    );
  }
};
