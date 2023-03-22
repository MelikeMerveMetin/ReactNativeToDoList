import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    paddingTop: 10,
    color: "#006400",
    fontWeight: "bold",
  },
  input: {
    padding: 10,
    margin: 15,
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 2,
  },
  buttonContainer: {
    backgroundColor: "#228b22",
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  listContainer: {
    marginBottom: 20,

    borderBottomColor: "#66cd00",
    borderBottomWidth: 2,
    paddingBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listText: {
    fontSize: 25,
    paddingLeft: 15,
  },
  listDelete: {
    marginRight: 15,
    backgroundColor: "#228b22",
    borderRadius: 10,
    width: 65,
    alignItems: "center",
    justifyContent: "center",
  },
  listDeleteText: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
});
