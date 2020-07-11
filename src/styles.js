import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  dummyContainer: {
    width: 120,
  },
  refreshButton: {
    width: 50,
  },
  langPicker: {
    width: 120,
  },
  pageContainer: {
    flex: 1,
    marginBottom: 20,
  },
  pageContent: {
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
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
