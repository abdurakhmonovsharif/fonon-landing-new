
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import CelebritiesDynamicPage from "./CelebritiesDynamicPage.jsx";
import { useGetCelebritiesQuery } from "../../../lib/redux/services/celebrityApi.js";

const loadingTranslations = {
    en: { loading: "Loading...", error: "Error loading celebrities", noSelected: "No celebrity selected" },
    uz: { loading: "Yuklanmoqda...", error: "Mashhurlarni yuklashda xato", noSelected: "Mashhur tanlanmagan" },
    ru: { loading: "Загрузка...", error: "Ошибка при загрузке знаменитостей", noSelected: "Знаменитость не выбрана" },
};

function Celebrities() {
    const { name } = useParams();
    const navigate = useNavigate();
    const language = useSelector(state => state.language.current);
    const t = (key) => loadingTranslations[language][key] || loadingTranslations.en[key];

    const { data: celebrities, isLoading, error } = useGetCelebritiesQuery();
    const [selectedCelebrity, setSelectedCelebrity] = useState(null);

    const getCelebrityTitle = (celebrity) => {
        if (language === 'uz') return celebrity.titleUz || celebrity.titleEn;
        if (language === 'ru') return celebrity.titleRu || celebrity.titleEn;
        return celebrity.titleEn;
    };

    const getCelebrityBody = (celebrity) => {
        if (language === 'uz') return celebrity.bodyUz || celebrity.bodyEn;
        if (language === 'ru') return celebrity.bodyRu || celebrity.bodyEn;
        return celebrity.bodyEn;
    };

    useEffect(() => {
        if (!celebrities || celebrities.length === 0) return;

        if (name) {
            const celeb = celebrities.find((c) => c.slug === name);
            if (celeb) {
                setSelectedCelebrity(celeb);
            }
        } else {
            setSelectedCelebrity(celebrities[0]);
        }
    }, [name, celebrities]);

    const handleCelebrityClick = (celebrity) => {
        setSelectedCelebrity(celebrity);
        navigate(`/mashhurlar/${celebrity.slug}`);
    };

    if (isLoading) return <div className="min-h-screen bg-black text-white flex items-center justify-center">{t('loading')}</div>;
    if (error) return <div className="min-h-screen bg-black text-white flex items-center justify-center">{t('error')}</div>;
    if (!selectedCelebrity) return <div className="min-h-screen bg-black text-white flex items-center justify-center">{t('noSelected')}</div>;

    const pageData = {
        celebrity: {
            name: getCelebrityTitle(selectedCelebrity),
            image: selectedCelebrity.images?.[0],
            description: getCelebrityBody(selectedCelebrity),
        },
        others: celebrities,
    };

    return (
        <CelebritiesDynamicPage data={pageData} onCelebrityClick={handleCelebrityClick} />
    );
}

export default Celebrities;