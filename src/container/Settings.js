import React from 'react'
import { SafeAreaView, Text, Button } from 'react-native'

export default ({ navigation }) => (
  <SafeAreaView>
    <Text>Settings</Text>
    <Button title="Back" onPress={() => navigation.pop()} />
  </SafeAreaView>
)
