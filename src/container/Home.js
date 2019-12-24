import React from 'react'
import { Text, Button, SafeAreaView } from 'react-native'

export default ({ navigation }) => (
  <SafeAreaView>
    <Text>Home</Text>
    <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
  </SafeAreaView>
)
