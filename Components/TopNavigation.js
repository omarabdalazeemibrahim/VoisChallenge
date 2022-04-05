import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons";
import DiscoverScreen from '../Screens/DiscoverScreen'
import NewsScreen from '../Screens/NewsScreen'
import { bold } from 'ansi-colors';
import { NewsContext } from '../API/Context';
import { useNavigation } from '@react-navigation/native';
import I18n from '../API/trans';
import { useTranslation } from "react-i18next";

import { SafeAreaView } from 'react-native-safe-area-context';


const TopNavigation = ({ index, setIndex }) => {
    const { navigate } = useNavigation();
    const { t } = useTranslation();
    const { darkTheme,setDarkTheme, fetchNews } = useContext(NewsContext);
    return (
        <View
            style={{
                ...styles.container,
                backgroundColor: darkTheme?"#282C35":"white",
            }}
            
        >
            
            {index === 0 ? (
               
            <View>
                
                    <TouchableOpacity onPress={() => navigate("settings")} style={styles.left}>
                    <Text
                        style={{ ...styles.text, color:darkTheme? "white":"black" }}>
                            <Ionicons
                                name="md-settings"
                            size={25}
                            color="#007FFF"
                            />
                        
                    </Text>
                    </TouchableOpacity>
                    </View>
              
            
            ) : (
                    <TouchableOpacity
                        style={styles.left}
                        onPress={() => setIndex(index === 0 ? 1 : 0)}
                    >
                        <Icon name="arrow-left-thick" size={15} color="#007FFF" />
                        <Text style={{ ...styles.text, color: darkTheme?"lightgrey" :"black"}}>
                            {t("Discover")}
                        </Text>
                    </TouchableOpacity>
                )}

            <Text style={{ ...styles.center, color: darkTheme ? "white" : "black" }}>
                {index ? t("All News") : t("Discover")}
            </Text>
            {index ? (
                <TouchableOpacity
                    style={styles.right}
                    onPress={() => fetchNews("general")}
                >
                    <Text style={styles.text}>
                        <Icon name="reload" size={24} color="#007FFF" />
                    </Text>
                </TouchableOpacity>
            ) : (
                    <TouchableOpacity
                        style={styles.left}
                        onPress={() => setIndex(index === 0 ? 1 : 0)}
                    >
                        <Text style={{ ...styles.text, color: darkTheme ? "white" : "black" }}>
                            {t("All News")}
                        </Text>
                        <Icon name="arrow-right-thick" size={15} color="#007FFF" />
                    </TouchableOpacity>
                )}
        </View>
    );
};

export default TopNavigation;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
    },
    center: {
        paddingBottom: 6,
        borderBottomColor: "#007FFF",
        borderBottomWidth: 5,
        borderRadius: 10,
        fontSize: 15,
        fontWeight: "700",
    },
    left: {
        
        flexDirection: "row",
        alignItems: "flex-end",
        width: 80,
        justifyContent: "space-between",
    },
    text: {
        fontSize: 12,
    },
    right: {
        width: 80,
        alignItems: "flex-end",
    },
});