import Ionicons from "@expo/vector-icons/Ionicons"
import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

import pic from "./assets/images/profilee.jpg";

function App() {
 
  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.image} />
      <View style={styles.camera}>
        <Ionicons name="md-camera" size={40} color="white" alignSelf={'center'} marginTop={6} />
        </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>School</Text>
        <Text style={styles.info}>Hogwarts Legacy</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.info}>nanayawkm@gmail.com</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.info}>Nana Yaw</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Nickname</Text>
        <Text style={styles.info}>Traps</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Emergency Contact</Text>
        <Text style={styles.info}>+233509418184</Text>
      </View>

      <Pressable style={styles.button}>
      <Text style={styles.text}>UPDATE PROFILE</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 0,
    backgroundColor: "orange",
  },
  image: {
    marginTop: 100,
    width: 200,
    height: 200,
    marginBottom: 10,
    alignSelf: "center",
    borderRadius: 75,
  },
  detailContainer: {
    flexDirection: "column",
    marginVertical: 20,
  },
  label: {
    marginHorizontal: 50,
    fontSize: 15,
    color: "grey",
    // flex: 2.5,
    paddingHorizontal: 5,
  },
  info: {
    marginHorizontal: 50,
    fontSize: 20,
    paddingHorizontal: 10,
  },

  camera: {
    backgroundColor:'grey',
    width:50,
    height:50,
    borderRadius:100,
    position:'absolute',
    top:120,
    right:75,
  },
  button: {
    marginTop:40,
    backgroundColor:'black',
    width:250,
    alignSelf:'center',
    height:50,
    borderRadius:20,
  },
  text: {
    color:'white',
    textAlign:'center',
    fontSize:20,
    paddingTop:10,
  }
});

export default App;
