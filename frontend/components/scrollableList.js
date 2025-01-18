import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
  { id: '6', title: 'Item 6' },
  { id: '7', title: 'Item 7' },
  { id: '8', title: 'Item 8' },
  { id: '9', title: 'Item 9' },
  { id: '10', title: 'Item 10' },
];

const Separator = () => <View style={styles.separator} />;

const ListItem = ({ title }) => (
  <View style={styles.item}>
    <Text>{title}</Text>
  </View>
);

const HorizontalLineList = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ListItem title={item.title} />}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={Separator}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
    marginHorizontal: 20,
  },
  item: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

export default HorizontalLineList;
