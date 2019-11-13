import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { CATEGORIES } from '../../dummy-data/dummyData';
import COLORS from '../../constants/COLORS';
import { Platform } from '@unimodules/core';

const CategoriesScreen = ({ navigation: { navigate } }) => {
  const renderItem = ({ item: { title, id, color } }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate('CategoryMeals', { title })}
        style={{ ...styles.gridItem, backgroundColor: color }}
      >
        <View>
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;
