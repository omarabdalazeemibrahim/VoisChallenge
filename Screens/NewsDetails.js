import React, { useContext } from 'react';
import {
    View, StyleSheet, Text, Dimensions, Image, ScrollView,
    SafeAreaView, StatusBar, ImageBackground, TouchableOpacity, Linking
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { NewsContext } from '../API/Context';
import { useTranslation } from 'react-i18next';
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const NewsDetails = () => {
   
    const { t } = useTranslation();
    const { params } = useRoute();
    const { darkTheme, setDarkTheme } = useContext(NewsContext);
    console.log(params.detailedItem)
    const item = params.detailedItem;
    return (
        <SafeAreaView style={{...styles.container , backgroundColor: darkTheme ? "black" : "white" }}>
            <ScrollView style={{ ...styles.scrollView, backgroundColor: darkTheme ? "black" : "white" }}>
                <Text style={{ ...styles.title, color: darkTheme ? "white" : "black"}}>{item.title}</Text>
                {
                    item.urlToImage ?
                        (<Image style={styles.image} source={{ uri: item.urlToImage }} />) :
                        (<Image style={styles.image} source={require("../Images/newError.webp")} />)
                }
                <View>
                    <Text style={{ ...styles.description, color: darkTheme ? "white" : "black"}}>{item.description}</Text>
                    <Text style={{ ...styles.description, color: darkTheme ? "white" : "black" }}>Written By :
                   {
                            item.author ? (<Text> {item.author}</Text>) :
                                (<Text>{" Unknown"}</Text>)
                        }
                    </Text>

                    <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                        <Text style={{ ...styles.newsLink, color: darkTheme ? "white" : "black" }}> {t("News")}  {t("Link")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL(item.url)}>

                        <ImageBackground
                            blurRadius={30}
                            style={styles.imageBackground}
                            source={{ uri: item.urlToImage }}
                        >
                            <Text style={styles.readMore1}>
                                {t("Read")}  {t("More")}..{t("Click")}  {t("Here")}
                            </Text>



                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        flex: 1,
        height: windowHeight,
        width: windowWidth,
        backgroundColor: "black",

    },
    scrollView: {
        
        height: windowHeight,
        width: windowWidth,
        padding: 5
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        paddingBottom: 10,
       
    },
    image: {
        height: 250,
        resizeMode: "cover",
        width: windowWidth - 10,
        borderRadius: 20,

    },
    imageBackground: {

        height: 100,
        width: windowWidth,
        justifyContent: "center",
        borderRadius: 20,
        resizeMode: "cover"


    },
    description: {
        padding: 5,
        flex: 1,
        fontSize: 16,
        fontWeight: "600",
        paddingTop: 15,
        paddingBottom: 10,
      
    },
    newsLink: {
        borderBottomColor: "#007FFF",
        borderBottomWidth: 5,
        borderRadius: 10,
        padding: 15,
        flex: 1,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: "900",
        alignContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    readMore: {

        borderRadius: 10,
        padding: 25,
        marginTop: 20,
        flex: 1,
        marginBottom: 10,
        fontSize: 10,
        fontWeight: "900",
        color: "white",
        alignContent: "center",
        alignItems: "center",
        textAlign: "center"
    },

    readMore1: {

        borderRadius: 10,
        padding: 5,
        flex: 1,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: "900",
        color: "white",
        alignContent: "center",
        alignItems: "center",
        textAlign: "center"
    },


})

export default NewsDetails;
