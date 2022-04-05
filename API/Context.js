import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { getNewsAPI, getSourceAPI } from "./api";



export const NewsContext = createContext();


const Context = ({ children }) => {
    const [news, setnews] = useState([]);
    const [category, setcategory] = useState("general");
    const [index, setIndex] = useState(1);
    const [source, setSource] = useState();
    const [darkTheme, setDarkTheme] = useState(true);
    const [language, setLanguage] = useState('en');
    
    
    


    const fetchNews = async (reset = category) => {
        const { data } = await axios.get(getNewsAPI(reset))
        setnews(data);
        setIndex(1)

    };

    const fetchNewsFromSource = async () => {
        try {
            const { data } = await axios.get(getSourceAPI(source));
            setnews(data);
            setIndex(1)
        } catch (error) {
            console.log(error)
            console.log("error")
        }
    };


    useEffect(() => {
        fetchNews()
    }, [category])

    useEffect(() => {
        fetchNewsFromSource()
    }, [source])
    return (<NewsContext.Provider value={{
        news,
        darkTheme,
        index,
        setIndex,
        fetchNews,
        setcategory,
        setSource,
        setDarkTheme,
        language,
        setLanguage
    }}>{children}
    </NewsContext.Provider>)
}
export default Context;