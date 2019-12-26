import React from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button
          onPress={() => this.props.navigation.toggleDrawer()}
          title="Go to notifications"
        />
      </View>
    );
  }
}
