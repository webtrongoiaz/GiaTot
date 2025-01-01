import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';

export default function Header({onMenuPress}) {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
      <Image
        source={{uri: 'https://giatot.info/wp-content/uploads/2024/12/logo.png'}}
        style={{width: 100, height: 40}}
      />
      <TouchableOpacity onPress={onMenuPress}>
        <Text>Menu</Text>
      </TouchableOpacity>
    </View>
  );
}
