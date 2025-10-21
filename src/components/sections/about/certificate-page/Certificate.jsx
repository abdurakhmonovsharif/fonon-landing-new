import { useSelector } from 'react-redux';
import BrandDynamicPage from "../BrandDynamicPage.jsx";

const translations = {
    en: {
        title: "Our Certificates",
    },
    uz: {
        title: "Bizning Sertifikatlar",
    },
    ru: {
        title: "Наши Сертификаты",
    },
};

const Certificate = () => {
    const language = useSelector(state => state.language.current);
    const t = (key) => translations[language][key] || translations.en[key];

    const factoryData = {
        title: t('title'),
        heroImage: "",
        sections: [],
        galleryImages: [
            "https://fononjewelry.com/tema/genel/uploads/belgeler/goldmoon_zertifikate_a3_22-1.jpg",
            "https://fononjewelry.com/tema/genel/uploads/belgeler/goldmoon_zertifikate_a3_22-2.jpg",
            "https://fononjewelry.com/tema/genel/uploads/belgeler/goldmoon_zertifikate_a3_22-3.jpg",
            "https://fononjewelry.com/tema/genel/uploads/belgeler/goldmoon_zertifikate_a3_22-4.jpg",
            "https://fononjewelry.com/tema/genel/uploads/belgeler/goldmoon_zertifikate_a3_22-5.jpg",
            "https://fononjewelry.com/tema/genel/uploads/belgeler/goldmoon_zertifikate_a3_22-6.jpg",
        ],
    };

    return <BrandDynamicPage {...factoryData} />;
};

export default Certificate;