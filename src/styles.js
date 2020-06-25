import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  controls: {
    flexDirection: "row",
    marginTop: 50,
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
  },
  pageContent: {
    marginVertical: 20,
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  title: { fontWeight: "bold", fontSize: 20 },
  thumbnail: {
    alignSelf: "center",
    margin: 15,
  },
});
