import React, { useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { NewsContext } from '../API/Context';
import { categories, sources } from '../API/api'
import Carousel from 'react-native-snap-carousel'
import Search from '../Components/Search';
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
import { useTranslation } from 'react-i18next';


const DiscoverScreen = () => {
    var x = "";
    const { t } = useTranslation();
    const windowWidth = Dimensions.get("window").width;
    const SLIDE_WIDTH = Math.round(windowWidth / 3.5);
    const {darkTheme, setcategory, setSource } = useContext(NewsContext);
    return (
        <View style={{ ...styles.discover, backgroundColor: darkTheme ? "black" : "white" }}>
            <Search />
            <Text style={{ ...styles.subtitle, color:darkTheme? "white":"black" }}>
               {t("Categories")}
            </Text>
            <Carousel
                layout={"default"}
                data={categories}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={styles.category}
                        onPress={() => setcategory(item.name)}
                    >
                        <Image source={{ uri: item.pic }} style={styles.categoryImage} />
                        <Text
                            style={{ ...styles.name, color: darkTheme ? "white" : "black" }}
                        >
                         {t(item.name.toString())}
                        </Text>
                    </TouchableOpacity>
                )}
                sliderWidth={windowWidth}
                itemWidth={SLIDE_WIDTH}
                activeSlideAlignment={"start"}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
            />
            <Text
                style={{ ...styles.subtitle, color: darkTheme ? "white" : "black" }}
            >
                {t("Sources")}
      </Text>
            <ScrollView style={{ ...styles.scrollView, backgroundColor: darkTheme ? "black" : "white"}}>
                <View style={{ ...styles.sources, backgroundColor: darkTheme ? "black" : "white"}}>
                    {sources.map((s) => (
                        <TouchableOpacity
                            onPress={() => setSource(s.id)}
                            key={s.id}
                            style={{ ...styles.sourceContainer, backgroundColor: darkTheme?"white": "black"}}
                        >
                            <Image source={{ uri: s.pic }} style={styles.sourceImage} />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollView: {
       
        width: windowWidth,

    },
    categoryImage: {
        height: "100%",
        width: "100%",
        resizeMode: "contain",
    },
    discover: {
        padding: 10,
        alignItems: "center",
        
        width: windowWidth,
        height: "100%"
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 8,
        marginHorizontal: 5,
        borderBottomColor: "#007FFF",
        borderBottomWidth: 5,
        alignSelf: "flex-start",
        borderRadius: 10,
    },
    name: {
        fontSize: 12,
        textTransform: "capitalize",
    },
    category: {
        height: 130,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    sources: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingVertical: 5,

    },
    sourceContainer: {
        height: 110,
        width: "40%",
        borderRadius: 10,
        margin: 15,
       
    },
    sourceImage: {
        height: "90%",
        borderRadius: 10,
        resizeMode: "cover",
    },
})

export default DiscoverScreen 