import React from "react";

import { View, Text, StyleSheet } from "react-native";

const Homescreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prueba</Text>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fce8e6",
  },
  title: {
    borderRadius: 30,
    margin: 30,
    padding: 20,
    textAlign: "center",
    fontSize: 40,
    fontWeight: "500",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "grey",
  },
  image: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
    alignSelf: "center",
    borderRadius: 100,
    height: "43%",
    width: "80%",
    borderWidth: 1,
    borderColor: "grey",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 10,
    backgroundColor: "royalblue",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
