import React, {useState, useEffect} from 'react';
import {ScrollView, Text} from 'react-native';
import axios from 'axios';

export default function CouponsScreen() {
  const [content, setContent] = useState('');

  useEffect(() => {
    axios
      .get('https://giatot.info/wp-json/wp/v2/pages?slug=coupon-app-android')
      .then(response => {
        if (response.data.length > 0) {
          setContent(response.data[0].content.rendered);
        }
      });
  }, []);

  return (
    <ScrollView>
      <Text>{content}</Text>
    </ScrollView>
  );
}
