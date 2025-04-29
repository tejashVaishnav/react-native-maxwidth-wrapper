import React, { ReactNode } from "react";
import { View, StyleSheet, ViewStyle, StyleProp } from "react-native";

interface MaxWidthWrapperProps {
  /**
   * Child components to be wrapped
   */
  children: ReactNode;

  /**
   * Additional styles to apply to the wrapper
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Maximum width of the wrapper
   * @default 600
   */
  maxWidth?: number;
  padding?: number;
}

/**
 * MaxWidthWrapper - A container component that wraps content with a maximum width
 */
export default function MaxWidthWrapper({
  children,
  style,
  maxWidth = 600,
  padding,
}: MaxWidthWrapperProps): React.ReactElement {
  return (
    <View style={[styles.container, { maxWidth, padding }, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
    borderWidth:1,
    borderColor:"white",
    paddingHorizontal: 16,
  },
});
