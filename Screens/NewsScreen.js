import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { NewsContext } from '../API/Context';
import Carousel from 'react-native-snap-carousel'
import SingleNews from '../Components/SingleNews';
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;


const NewsScreen = () => {
    const { news: { articles } } = useContext(NewsContext);
    // console.log(articles);
    const [activeIndex, setactiveIndex] = useState();
    const windowHeight = Dimensions.get("window").height;
    return (
        <View style={styles.carousel}>
            {
                articles && (
                    <Carousel
                        layout={"stack"}
                        data={articles.slice(0, 10)}
                        sliderHeight={300}
                        itemHeight={windowHeight}
                        vertical={true}
                        renderItem={({ item }) => (
                            <SingleNews item={item} />
                        )}
                        onSnapToItem={(index) => setactiveIndex(index)}
                    />
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        transform: [{ scaleY: 1 }],
        backgroundColor: "black"
    }
})
export default NewsScreen 