import React, { useState, useContext } from 'react'
import { View, StyleSheet, Text, StatusBar, useWindowDimensions } from 'react-native'
import { SceneMap, TabView } from 'react-native-tab-view';
import DiscoverScreen from '../Screens/DiscoverScreen';
import NewsScreen from '../Screens/NewsScreen';
import TopNavigation from './TopNavigation';
import { NewsContext } from '../API/Context';

const Tabs = () => {
    const renderScene = SceneMap({
        first: DiscoverScreen,
        second: NewsScreen,
    })
    const layout = useWindowDimensions();
    const { index, setIndex } = useContext(NewsContext)
    const [routes] = useState([
        { key: "first", title: "Discover" },
        { key: "second", title: "News" }
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
        />
    );
}
const styles = StyleSheet.create({})
export default Tabs;
