/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Switch, StatusBar, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { ThemeContext } from './src/context/ThemeContext'
import { MyColor } from './src/styles/Color'
import Button from './src/components/Button'
import MyKeyword from './src/components/MyKeyword'

const App = () => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={theme}>
    <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: '#000000' }]}>
      <Text>Open up APP</Text>
      <StatusBar />
      <Switch
        value={theme === 'light'}
        onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <MyKeyword />
    </SafeAreaView>
    </ThemeContext.Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:MyColor.light ,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
