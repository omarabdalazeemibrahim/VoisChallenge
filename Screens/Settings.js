import React ,{useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View, StyleSheet, Dimensions,SafeAreaView,ScrollView ,TouchableOpacity } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CountryFlag from "react-native-country-flag";
import { NewsContext } from '../API/Context';
import i18n from '../i18n';


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Settings = () => {
    const { darkTheme, setDarkTheme ,language ,setLanguage } = useContext(NewsContext);
    const { t } = useTranslation();
    
    return (
        <View style={{ ...styles.view, backgroundColor: darkTheme ? "black" : "white" }}>
            <Text
                style={{ ...styles.subtitle, color: darkTheme ? "white" : "black" }} >
                <Ionicons
                    name="md-settings"
                    size={22}
                    color="#007FFF"
                />
                {t("Settings")}
            </Text>
            <SafeAreaView style={{ ...styles.container, backgroundColor: darkTheme ? "black" : "white" }}>
                <ScrollView style={{ ...styles.scrollView, backgroundColor: darkTheme ? "black" : "white" }}>
                    <Text style={{ ...styles.subtitle, color: darkTheme ? "white" : "black" }} >{t("Dark Mode")} /{t("Light Mode")} </Text>
                    <View style={{...styles.modeView}}>
                        <TouchableOpacity onPress={() => setDarkTheme(!darkTheme)} style={{...styles.left,padding:15}}>
                            <Text
                                style={{ ...styles.text, color: darkTheme ? "white" : "black" }}>
                                <Icon
                                    name="theme-light-dark"
                                    size={35}
                                    color="#007FFF"
                                />
                                {t("Change")}  {t("Mode")}
                            </Text>
                        </TouchableOpacity>
                        <View style={{ ...styles.modeView }}>
                            <Text style={{ ...styles.language, color: darkTheme ? "white" : "black" }} > {t("Change")} {t("Application")} {t("Language")} </Text>
                            <TouchableOpacity onPress={() => i18n.changeLanguage('en')} style={{ ...styles.left, padding: 15 }}>
                                <CountryFlag isoCode="gb" size={25} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => i18n.changeLanguage('fr')} style={{ ...styles.left, padding: 15 }}>
                                <CountryFlag isoCode="fr" size={25} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => i18n.changeLanguage('de')} style={{ ...styles.left, padding: 15 }}>
                                <CountryFlag isoCode="de" size={25} />
                            </TouchableOpacity>
                        </View>
                       



                    </View>
                    
                    
                
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        flex: 1,
        height: windowHeight,
        width: windowWidth,
        

    },
    scrollView: {

        height: windowHeight,
        width: windowWidth,
        padding: 5
    },
    subtitle: {
        padding:15,
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 8,
        alignContent: "center",
        alignItems:"center",
        marginHorizontal: 5,
        borderBottomColor: "#007FFF",
        borderBottomWidth: 5,
        alignSelf: "flex-start",
        borderRadius: 10,
    },
    language: {
        padding: 15,
        fontSize: 15,
        fontWeight: "bold",
        paddingBottom: 8,
        alignContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
        borderBottomColor: "#007FFF",
        borderBottomWidth: 5,
        
        borderRadius: 10,
    },
    modeView: {
        alignContent: "center",
        alignItems: "center",
        padding:10,
        flex: 1,
        height: windowHeight,
        width: windowWidth,


    },
})

export default Settings;
