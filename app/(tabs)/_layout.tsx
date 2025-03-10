import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function _layout() {
  return (
      <Tabs>
          <Tabs.Screen
              name="index"
              options={{
                  title: "Home",
                  headerShown:false
              }}
          />
    </Tabs>
  )
}

const styles = StyleSheet.create({})