import React from 'react'
import { SafeAreaView, Text, Button } from 'react-native'

export default ({ navigation }) => (
  <SafeAreaView>
    <Text>Profile</Text>
    <Button title="Pop" onPress={() => navigation.pop()} />
    <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
  </SafeAreaView>
)
