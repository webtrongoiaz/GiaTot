import React from 'react';
import {WebView} from 'react-native-webview';

export default function ContactScreen() {
  return (
    <WebView
      source={{
        html: `<form action="https://giatot.info/wp-json/contact-form-7/v1/contact-forms/1cac000/feedback" method="post">
                <input type="text" name="your-name" placeholder="Name" />
                <input type="email" name="your-email" placeholder="Email" />
                <textarea name="your-message" placeholder="Message"></textarea>
                <button type="submit">Send</button>
              </form>`,
      }}
    />
  );
}
