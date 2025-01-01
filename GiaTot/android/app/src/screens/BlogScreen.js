import React, {useState, useEffect} from 'react';
import {ScrollView, Text} from 'react-native';
import axios from 'axios';

export default function BlogScreen() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://giatot.info/wp-json/wp/v2/posts?categories=1')
      .then(response => {
        setPosts(response.data);
      });
  }, []);

  return (
    <ScrollView>
      {posts.map(post => (
        <Text key={post.id}>{post.title.rendered}</Text>
      ))}
    </ScrollView>
  );
}
