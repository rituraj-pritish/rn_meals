import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavouritesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>fav</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavouritesScreen;
