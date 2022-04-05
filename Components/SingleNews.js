import React, { useContext } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NewsContext } from '../API/Context';
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;


const SingleNews = ({ item, index }) => {
    const { navigate } = useNavigation();
    const { darkTheme, setDarkTheme } = useContext(NewsContext);
    return (
        <View style={{ ...styles.view, backgroundColor: darkTheme ? "black" : "white" }}>
            <Text style={{ ...styles.title, color: darkTheme ? "white" : "black"}}>{item.title}</Text>
            <TouchableOpacity style={styles.opacity} onPress={() => navigate("newsDetails", { detailedItem: item })}>

                {item.urlToImage ?


                    (<Image style={styles.image} source={{ uri: item.urlToImage }} />) :
                    (<Image style={styles.image} source={require("../Images/newError.webp")} />)

                }



            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        height: windowHeight,
        width: windowWidth,
        
        transform: [{ scaleY: 1 }]

    },
    title: {
        padding: 20,
        alignContent: "center",
        alignItems: 'center',
        fontSize: 30,
        fontWeight: "bold",
        paddingBottom: 10,
       
    },
    image: {
        height: "45%",
        resizeMode: "cover",
        width: windowWidth,
        borderRadius: 20,
        padding: 4,
        

    },
    opacity: {
        height: windowHeight,
        padding:5,
        width: windowWidth,


    },
    description: {
        padding: 15,
        flex: 1,
        fontSize: 16,
        fontWeight: "600",
        paddingTop: 15,
        paddingBottom: 10,
        color: "white"
    },
})

export default SingleNews;
