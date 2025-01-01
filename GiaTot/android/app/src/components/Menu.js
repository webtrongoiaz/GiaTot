import React, {useState, useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import axios from 'axios';

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios
      .get('https://giatot.info/wp-json/menus/v1/menus/main')
      .then(response => {
        setMenuItems(response.data.items);
      });
  }, []);

  return (
    <FlatList
      data={menuItems}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <Text>{item.title}</Text>}
    />
  );
}
