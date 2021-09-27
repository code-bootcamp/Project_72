import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export default function Loading() {
  return (
    <View style={styles.lodingContainer}>
      <ActivityIndicator size="large" color="#6646ee" />
    </View>
  );
}

const styles = StyleSheet.create({
  lodingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
