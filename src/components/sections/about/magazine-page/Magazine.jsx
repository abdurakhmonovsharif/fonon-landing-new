import { useSelector } from 'react-redux';
import BrandDynamicPage from "../BrandDynamicPage.jsx";
import {useGetJournalsQuery} from "../../../../lib/redux/services/journalsApi.js";

const translations = {
    en: {
        title: "Magazine",
        loading: "Loading magazines...",
        error: "Error loading magazines",
        noMagazines: "No magazines available",
    },
    uz: {
        title: "Jurnal",
        loading: "Jurnallar yuklanmoqda...",
        error: "Jurnallarni yuklashda xato",
        noMagazines: "Mavjud jurnallar yo'q",
    },
    ru: {
        title: "Журнал",
        loading: "Загрузка журналов...",
        error: "Ошибка при загрузке журналов",
        noMagazines: "Журналы недоступны",
    },
};

const Magazine = () => {
    const language = useSelector(state => state.language.current);
    const t = (key) => translations[language][key] || translations.en[key];

    const { data: journals, isLoading, error } = useGetJournalsQuery();

    if (isLoading) {
        return (
            <div className="min-h-screen bg-black text-gray-100 flex items-center justify-center">
                <p>{t('loading')}</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-black text-gray-100 flex items-center justify-center">
                <p className="text-red-500">{t('error')}</p>
            </div>
        );
    }

    if (!journals || journals.length === 0) {
        return (
            <div className="min-h-screen bg-black text-gray-100 flex items-center justify-center">
                <p>{t('noMagazines')}</p>
            </div>
        );
    }

    // Map API data to the format expected by BrandDynamicPage
    const API_BASE_URL = "http://localhost:9090"; // Replace with your actual API base URL

    const constructImageUrl = (imagePath) => {
        if (!imagePath) return '';
        return imagePath.startsWith('http') ? imagePath : `${API_BASE_URL}${imagePath}`;
    };

    const magazineData = {
        title: t('title'),
        heroImage: "",
        sections: [],
        galleryImages: journals.map(journal => constructImageUrl(journal.image)).filter(Boolean),
    };

    return <BrandDynamicPage {...magazineData} />;
};

export default Magazine;