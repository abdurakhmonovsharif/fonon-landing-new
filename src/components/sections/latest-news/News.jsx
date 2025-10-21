import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetNewsQuery } from "../../../lib/redux/services/newsApi.js";
import { ChevronRight } from 'lucide-react';

const BASE_URL = 'http://localhost:9090';

const translations = {
    en: {
        relatedNews: 'Further Reading',
        noImage: 'Image unavailable',
        backButton: 'Back',
    },
    uz: {
        relatedNews: "Qo'shimcha O'qish",
        noImage: 'Rasm mavjud emas',
        backButton: 'Orqaga',
    },
    ru: {
        relatedNews: 'Дополнительное Чтение',
        noImage: 'Изображение недоступно',
        backButton: 'Назад',
    },
};

const News = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const language = useSelector(state => state.language.current);
    const t = (key) => translations[language][key] || translations.en[key];
    const { data: news } = useGetNewsQuery();

    const currentNews = news?.find(item => item.id.toString() === name);
    const relatedNews = news?.filter(item => item.id.toString() !== name).slice(0, 4) || [];

    const getImageUrl = (imagePath) => {
        if (!imagePath) return '';
        return imagePath.startsWith('http') ? imagePath : `${BASE_URL}${imagePath}`;
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString(language === 'uz' ? 'uz-UZ' : language === 'ru' ? 'ru-RU' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getNewsTitle = (item) => {
        if (language === 'uz') return item.titleUz || item.titleEn;
        if (language === 'ru') return item.titleRu || item.titleEn;
        return item.titleEn;
    };

    const getNewsBody = (item) => {
        if (language === 'uz') return item.bodyUz || item.bodyEn;
        if (language === 'ru') return item.bodyRu || item.bodyEn;
        return item.bodyEn;
    };

    if (!currentNews) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center max-w-md">
                    <h2 className="text-2xl font-light text-gray-400 tracking-wide mb-10">
                        Article Not Found
                    </h2>
                    <button
                        onClick={() => navigate(-1)}
                        className="px-12 py-3 border border-gray-900 text-gray-900 text-sm tracking-[0.15em] uppercase font-light hover:bg-gray-900 hover:text-white transition-all duration-500"
                    >
                        {t('backButton')}
                    </button>
                </div>
            </section>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Navigation Breadcrumb */}
            <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16 py-8">
                <button
                    onClick={() => navigate(-1)}
                    className="text-xs text-gray-500 tracking-widest uppercase font-light hover:text-gray-900 transition-colors duration-300 flex items-center gap-2"
                >
                    ← {t('backButton')}
                </button>
            </div>

            {/* Main Container */}
            <div className="max-w-[1800px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

                    {/* LEFT SIDE - CURRENT NEWS ARTICLE */}
                    <div className="lg:col-span-8 px-8 md:px-12 lg:px-16 py-12 lg:py-20">
                        <article>
                            {/* Featured Image */}
                            <div className="mb-20 aspect-video overflow-hidden bg-gray-50 group">
                                {currentNews.images?.[0] ? (
                                    <img
                                        src={getImageUrl(currentNews.images[0])}
                                        alt={getNewsTitle(currentNews)}
                                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                                        <span className="text-gray-400 text-sm font-light">{t('noImage')}</span>
                                    </div>
                                )}
                            </div>

                            {/* Metadata */}
                            <div className="flex items-center gap-6 mb-12">
                                <p className="text-xs text-gray-500 tracking-widest uppercase font-light">
                                    {formatDate(currentNews.publishedAt)}
                                </p>
                                <div className="w-12 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                            </div>

                            {/* Title */}
                            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-gray-950 mb-16 leading-[1.1] tracking-tight">
                                {getNewsTitle(currentNews)}
                            </h1>

                            {/* Accent Line */}
                            <div className="w-16 h-px bg-gray-950 mb-16"></div>

                            {/* Body Content */}
                            <div
                                className="prose prose-lg max-w-none text-gray-700 font-light leading-8 [&_p]:mb-8 [&_p]:text-gray-700 [&_p]:text-base [&_h2]:text-3xl [&_h2]:font-light [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:text-gray-950 [&_h3]:text-xl [&_h3]:font-light [&_h3]:mt-8 [&_h3]:text-gray-900"
                                dangerouslySetInnerHTML={{ __html: getNewsBody(currentNews) }}
                            />

                            {/* Additional Images */}
                            {currentNews.images?.length > 1 && (
                                <div className="mt-20 space-y-16">
                                    {currentNews.images.slice(1).map((img, idx) => (
                                        <figure key={idx} className="group">
                                            <div className="aspect-video overflow-hidden bg-gray-50">
                                                <img
                                                    src={getImageUrl(img)}
                                                    alt={`${getNewsTitle(currentNews)} - ${idx + 1}`}
                                                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000"
                                                />
                                            </div>
                                        </figure>
                                    ))}
                                </div>
                            )}

                            {/* Bottom Divider */}
                            <div className="w-full h-px bg-gray-200 mt-20 pt-0"></div>
                        </article>
                    </div>

                    {/* RIGHT SIDE - RELATED NEWS */}
                    <div className="lg:col-span-4 bg-gray-50 px-8 md:px-12 lg:px-12 py-12 lg:py-20 border-l border-gray-200 lg:border-l-[1px]">
                        {/* Section Title */}
                        <h3 className="text-xs text-gray-600 tracking-[0.2em] uppercase mb-12 font-light letter-spacing">
                            {t('relatedNews')}
                        </h3>

                        {/* Divider */}
                        <div className="w-8 h-px bg-gray-900 mb-12"></div>

                        {/* News List */}
                        <div className="space-y-16">
                            {relatedNews.map((item, idx) => (
                                <div
                                    key={item.id}
                                    onClick={() => navigate(`/yangiliklar/${item.id}`)}
                                    className="group cursor-pointer transition-all duration-500"
                                >
                                    {/* Thumbnail */}
                                    <div className="overflow-hidden mb-6 aspect-[4/3] bg-gray-100">
                                        {item.images?.[0] ? (
                                            <img
                                                src={getImageUrl(item.images[0])}
                                                alt={getNewsTitle(item)}
                                                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                                                <span className="text-gray-400 text-xs font-light">{t('noImage')}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Date */}
                                    <p className="text-xs text-gray-500 uppercase tracking-wider font-light mb-3">
                                        {formatDate(item.publishedAt)}
                                    </p>

                                    {/* Title */}
                                    <h4 className="text-base font-light text-gray-950 leading-[1.4] group-hover:text-gray-600 transition-colors duration-300 line-clamp-3 mb-4">
                                        {getNewsTitle(item)}
                                    </h4>

                                    {/* Read More Link */}
                                    <div className="flex items-center gap-3 text-xs text-gray-500 group-hover:text-gray-900 transition-colors duration-300">
                                        <span className="tracking-wider uppercase font-light">Read</span>
                                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>

                                    {/* Divider */}
                                    {idx < relatedNews.length - 1 && (
                                        <div className="h-px bg-gray-200 mt-16"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;