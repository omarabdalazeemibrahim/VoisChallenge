import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Search": "Search",
            
        },
    },
    ar: {
        translation: {
            "Discover": "تصفح المزيد",
            "All News":"كل الأخبار",
            "entertainment": "ترفيهي",
            "health": "صحة",
            "science": "علوم",
            "sports": "رياضة",
            "technology": "تكنولوجيا",
            "News Link":"رابط الأخبار",
            "general": "عام",
            "business":"أعمال"
            ,"Sources":"مصادر",
            "Categories": "تصنيفات",
            "Search": "بحث"
        },
    },
    fr: {
        translation: {
            "Settings": "Réglages",
            "Dark Mode": "Mode Sombre",
            "Light Mode": "Mode Lumière",
            "Change": "Changement",
            "Application": "Application",
            "Language": "Langue",
            "Discover":  "Découvrir",
            "All News":  "Toutes les nouvelles",
            "entertainment": "divertissement",
            "health": "santé",
            "science": "la science",
            "sports": "des sports",
            "technology": "La technologie",
            "News Link": "Lien d'actualité",
            "general": "général",
            "business": "affaires"
            , "Sources": "Sources",
            "Categories": "Catégories",
            "Search": "Rechercher",
            "News": "Nouvelles",
            "Link": "Lien",
            "Read": "Lire",
            "More": "Suite",
            "Clcik": "Cliquez sur",
            "Here": "Ici"
        },
    },
    de: {
        translation: {
            "Settings": "Instellingen",
            "Dark Mode": "Donkere modus",
            "Light Mode": "Lichtmoduse",
            "Change": "Wijziging",
            "Application": "Sollicitatie",
            "Language": "Taal",
            "Discover": "Ontdekken",
            "All News": "Al het nieuws",
            "entertainment": "amusement",
            "health": "Gezondheid",
            "science": "wetenschap",
            "sports": "sport",
            "technology": "technologie",
            "News Link": "Nieuwslink",
            "general": "algemeen",
            "business": "bedrijf"
            , "Sources": "Bronnen",
            "Categories": "Categorieën",
            "Search": "Zoekopdracht",
            "News": "Nieuws",
            "Link": "Koppeling",
            "Read": "Lezen",
            "More": "Meer",
            "Clcik": "Klik",
            "Here":"Hier"
        },
    },
};


i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng:'en',

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;