import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import { navbarStyle } from "./navbarStyle";

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
interface Props {
  navigation: any;
}

const Navbar = ({ navigation }: any) => {
  return (
    <SafeAreaView style={navbarStyle.container}>
      <TouchableOpacity
        onPress={() => navigation?.navigate("Home")}
        style={navbarStyle.iconWrapper}
      >
        <Ionicons name='home-outline' size={28} color='grey' />
        <Text style={{ fontSize: 10 }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation?.navigate("Gems")}
        style={navbarStyle.iconWrapper}
      >
        <Ionicons name='heart-outline' size={28} color='grey' />
        <Text style={{ fontSize: 10 }}>Gems</Text>
      </TouchableOpacity>
      <TouchableOpacity style={navbarStyle.iconWrapper}>
        <Ionicons name='search-outline' size={28} color='grey' />
        <Text style={{ fontSize: 10 }}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={navbarStyle.iconWrapper}>
        <Ionicons
          name='person-circle-outline'
          size={28}
          color='grey'
          onPress={() => navigation?.navigate("MyAccount")}
        />
        <Text style={{ fontSize: 10 }}>Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Navbar;
