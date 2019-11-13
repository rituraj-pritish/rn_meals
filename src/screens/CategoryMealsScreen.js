import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import COLORS from '../../constants/COLORS';

const CategoryMealsScreen = ({ navigation }) => {
  const title = navigation.getParam('title');

  return (
    <View style={styles.screen}>
      <Text>Cat meals</Text>
      <Text>Cat : {title}</Text>
    </View>
  );
};

//returns an object containing options
CategoryMealsScreen.navigationOptions = navigationData => ({
  headerTitle: navigationData.navigation.getParam('title'),
  
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
