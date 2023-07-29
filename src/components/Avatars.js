import React from "react";
import { View, StyleSheet, Image } from "react-native";
import theme from "../../assets/themes";

const Avatars = ({ avatars }) => {
  return (
    <View>
      {avatars.map((avatar, index) => (
        <Image
          key={index}
          source={avatar.image}
          style={[
            styles.avatarStyle,
            { zIndex: index, marginLeft: index * 16 },
            index !== avatar.length - 1 && { position: "absolute" },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  avatarStyle: {
    resizeMode: "cover",
    width: theme.imageHeight.xs,
    height: theme.imageHeight.xs,
    borderRadius: theme.imageHeight.xs / 2,
    borderWidth: theme.borderRadius.xs,
    borderColor: theme.colors.white,
  },
});

export default Avatars;
