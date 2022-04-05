import React, { useContext } from 'react'
import { View, StyleSheet, Text, StatusBar, useWindowDimensions } from 'react-native'
import Tabs from './Components/Tabs';
import Context, { NewsContext } from './API/Context';
import Navigation from './Components/Navigation';
import i18n from './i18n'


function App() {
  const { darkTheme } = useContext(NewsContext);
  return (
    <View style={{ ...styles.container, backgroundColor: darkTheme? "#282C35":"white" }}>
      <Navigation />
    </View>
  )
}
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,

    }
  }
)

export default () => {
  return (
    <Context>
      <App />
    </Context>
  )
}