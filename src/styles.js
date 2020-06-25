import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  controls: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  langPicker: {
    marginLeft: 20,
    alignSelf: "center",
    width: 150,
    height: 30,
  },
  pageContainer: {
    flex: 1,
    marginBottom: 20,
  },
  pageContent: {
    padding: 20,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  thumbnail: {
    margin: 15,
  },
  sourceLink: {
    marginTop: 10,
  },
  sourceLinkText: {
    color: "blue",
  },
});
