import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions, SafeAreaView, TextInput, TouchableOpacity, Modal } from 'react-native';
import { NewsContext } from '../API/Context';
import Entypo from "react-native-vector-icons/Entypo";
import { useTranslation } from 'react-i18next';
import SingleNews from './SingleNews';
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const Search = () => {
    const { t } = useTranslation();
    const { darkTheme, setDarkTheme } = useContext(NewsContext);
    const { news: { articles } } = useContext(NewsContext);


    const [searchResults, setSearchResults] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentNews, setCurrentNews] = useState();

    const handleSearch = (text) => {
        if (!text) {
            setSearchResults([]);
            return;
        }
        setSearchResults(articles.filter((query) => query.title.includes(text)));
    };
    const handleModal = (n) => {
        setModalVisible(true);
        setCurrentNews(n);
    };

    return (
        <View style={{ width: "100%", position: "relative" }}>
            <TextInput
                style={{
                    ...styles.search,
                    backgroundColor: darkTheme ? "white" : "black",
                    color: darkTheme ? "black" : "white",
                }}
                onChangeText={(text) => handleSearch(text)}
                placeholder={t("Search")}
                placeholderTextColor={darkTheme ? "black" : "white"}

            />
            <View style={styles.searchResults}>
                {searchResults.slice(0, 10).map((n) => (
                    <TouchableOpacity
                        key={n.title}
                        activeOpacity={0.7}
                        onPress={() => handleModal(n)}
                    >
                        <Text
                            style={{
                                ...styles.singleResult,
                                backgroundColor: darkTheme ? "black" : "white",
                                color: darkTheme ? "white" : "black",
                            }}
                        >
                            {n.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={{
                        position: "absolute",
                        zIndex: 2,
                        right: 0,
                        margin: 20,
                        marginTop: 30
                    }}
                >
                    <Entypo name="circle-with-cross" size={30} color= {darkTheme?"white": "black"} />
                </TouchableOpacity>
                <View style={{ height: "100%", transform: [{ scaleY: 1 }] }}>
                    <SingleNews item={currentNews} />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: 'black',

        width: windowWidth,
        padding: 5
    },
    search: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 15,
        marginBottom: 15,
    },
    searchResults: {
        position: "absolute",
        zIndex: 1,
        top: 50,
    }, singleResult: {
        borderRadius: 5,
        padding: 10,
        margin: 0.5,
        shadowColor: "black",
        elevation: 5,
    },
})

export default Search;
