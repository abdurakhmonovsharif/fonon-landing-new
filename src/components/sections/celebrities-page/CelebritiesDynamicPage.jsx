import React from 'react';
import { useSelector } from 'react-redux';

const BASE_URL = 'http://localhost:9090';

const translations = {
    en: {
        featured: "Featured",
        ourCelebrities: "Our Celebrities",
    },
    uz: {
        featured: "Tanlangan",
        ourCelebrities: "Bizning Mashhurlarimiz",
    },
    ru: {
        featured: "Избранный",
        ourCelebrities: "Наши Знаменитости",
    },
};

const CelebritiesDynamicPage = ({data, onCelebrityClick}) => {
    const language = useSelector(state => state.language.current);
    const t = (key) => translations[language][key] || translations.en[key];

    const getImageUrl = (imagePath) => {
        if (!imagePath) return '';
        return imagePath.startsWith('http') ? imagePath : `${BASE_URL}${imagePath}`;
    };

    const getCelebrityTitle = (celebrity) => {
        if (language === 'uz') return celebrity.titleUz || celebrity.titleEn;
        if (language === 'ru') return celebrity.titleRu || celebrity.titleEn;
        return celebrity.titleEn;
    };

    return (
        <div className="min-h-screen bg-black/40 text-white">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-7">
                        <div className="mb-2 text-xs tracking-[0.3em] text-gray-500 uppercase">
                            {t('featured')}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 leading-none">
                            {data.celebrity.name}
                        </h1>
                        <div className="relative mb-8 overflow-hidden bg-zinc-900">
                            <img
                                src={getImageUrl(data.celebrity.image)}
                                alt={data.celebrity.name}
                                className="w-full h-[600px] object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                        </div>
                        <div
                            className="text-lg leading-relaxed text-gray-400 font-light max-w-2xl"
                            dangerouslySetInnerHTML={{__html: data.celebrity.description}}
                        />
                    </div>

                    <div className="lg:col-span-5">
                        <div>
                            <h2 className="text-2xl font-light tracking-wide mb-8 border-b border-zinc-800 pb-4">
                                {t('ourCelebrities')}
                            </h2>
                            <div className="space-y-1">
                                {data.others?.map((celebrity) => (
                                    <div
                                        key={celebrity.id}
                                        onClick={() => onCelebrityClick && onCelebrityClick(celebrity)}
                                        className={`group cursor-pointer border-b px-3 hover:bg-black/20 transition-all duration-300 ${
                                            data.celebrity.name === getCelebrityTitle(celebrity)
                                                ? 'bg-black/20 border-zinc-700'
                                                : 'border-none hover:border-zinc-700'
                                        }`}
                                    >
                                        <div className="flex items-center gap-4 py-4">
                                            <div
                                                className="relative w-20 h-24 flex-shrink-0 overflow-hidden bg-zinc-900">
                                                <img
                                                    src={getImageUrl(celebrity.images?.[0])}
                                                    alt={getCelebrityTitle(celebrity)}
                                                    className={`w-full h-full object-cover  group-hover:grayscale-0 ${
                                                        data.celebrity.name === getCelebrityTitle(celebrity)
                                                            ? 'grayscale-0'
                                                            : 'grayscale'
                                                    } transition-all duration-500`}
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <p className={`text-sm font-light tracking-wide group-hover:text-white ${
                                                    data.celebrity.name === getCelebrityTitle(celebrity)
                                                        ? 'text-white'
                                                        : 'text-gray-400'
                                                }  transition-colors duration-300`}>
                                                    {getCelebrityTitle(celebrity)}
                                                </p>
                                            </div>
                                            <div className={`text-gray-600 group-hover:text-white ${
                                                data.celebrity.name === getCelebrityTitle(celebrity) && 'text-white'
                                            }
                                             transition-colors duration-300`}>
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="square"
                                                        strokeLinejoin="miter"
                                                        strokeWidth={1}
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CelebritiesDynamicPage;