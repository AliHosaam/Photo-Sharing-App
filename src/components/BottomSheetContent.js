import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../../assets/themes";

const BottomSheetContent = ({ handleClose }) => {
  return (
    <View style={styles.contentWrapper}>
      <TouchableOpacity
        style={styles.buttonLarge}
        onPress={() => alert("Create new album!")}
      >
        <Text style={styles.buttonTitle}>Create a new album</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSmall} onPress={handleClose}>
        <Text style={styles.buttonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: theme.colors.lightGray,
    padding: theme.spacing.m,
    height: 250,
  },
  buttonTitle: {
    ...theme.textVariants.h2,
  },
  buttonLarge: {
    marginTop: theme.spacing.sm,
    marginHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.l,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.m,
    alignItems: "center",
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonSmall: {
    marginTop: theme.spacing.m,
    marginHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.m,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.m,
    alignItems: "center",
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
});

export default BottomSheetContent;
