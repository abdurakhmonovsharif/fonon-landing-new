import React from 'react';
import { useSelector } from 'react-redux';
import {useGetVacanciesQuery} from "../../../../lib/redux/services/vacancyApi.js";
import {Link} from "react-router-dom";

const translations = {
    en: {
        opportunities: "Opportunities",
        vacancies: "Vacancies",
        loading: "Loading...",
        error: "Error loading vacancies",
        noVacancies: "No vacancies available at the moment",
        position: "Position",
        location: "Location",
        type: "Type",
        salary: "Salary",
        deadline: "Deadline",
        apply: "Apply",
        locationLabel: "Location:",
        typeLabel: "Type:",
        salaryLabel: "Salary:",
        deadlineLabel: "Deadline:",
    },
    uz: {
        opportunities: "Imkoniyatlar",
        vacancies: "Bo'sh O'rinlar",
        loading: "Yuklanmoqda...",
        error: "Bo'sh o'rinlarni yuklashda xato",
        noVacancies: "Hozircha bo'sh o'rinlar yo'q",
        position: "Lavozim",
        location: "Joylashuv",
        type: "Tur",
        salary: "Ish haqi",
        deadline: "Muddati",
        apply: "Ariza Qo'yish",
        locationLabel: "Joylashuv:",
        typeLabel: "Tur:",
        salaryLabel: "Ish haqi:",
        deadlineLabel: "Muddati:",
    },
    ru: {
        opportunities: "Возможности",
        vacancies: "Вакансии",
        loading: "Загрузка...",
        error: "Ошибка при загрузке вакансий",
        noVacancies: "В настоящее время вакансии недоступны",
        position: "Должность",
        location: "Местоположение",
        type: "Тип",
        salary: "Зарплата",
        deadline: "Срок подачи",
        apply: "Подать заявку",
        locationLabel: "Местоположение:",
        typeLabel: "Тип:",
        salaryLabel: "Зарплата:",
        deadlineLabel: "Срок подачи:",
    },
};

const Vacancies = () => {
    const language = useSelector(state => state.language.current);
    const t = (key) => translations[language][key] || translations.en[key];

    const {data: vacancies, isLoading, error} = useGetVacanciesQuery();

    const formatSalary = (min, max) => {
        return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const getVacancyTitle = (vacancy) => {
        if (language === 'uz') return vacancy.titleUz || vacancy.titleEn;
        if (language === 'ru') return vacancy.titleRu || vacancy.titleEn;
        return vacancy.titleEn;
    };

    const getSubtitleTitle = (vacancy) => {
        if (language === 'uz') return vacancy.titleRu || vacancy.titleEn;
        if (language === 'ru') return vacancy.titleUz || vacancy.titleEn;
        return vacancy.titleRu || vacancy.titleEn;
    };

    if (isLoading) return <div className="min-h-screen bg-black/40 flex items-center justify-center text-white">{t('loading')}</div>;
    if (error) return <div className="min-h-screen bg-black flex items-center justify-center text-white">{t('error')}</div>;

    return (
        <div className="min-h-screen bg-black/40 text-white py-12 lg:py-16">
            <div className="max-w-6xl mx-auto px-4 py-3 lg:px-6">
                {/* Header */}
                <div className="mb-8 lg:mb-12">
                    <div className="mb-2 text-xs tracking-[0.3em] text-gray-500 uppercase">
                        {t('opportunities')}
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4 leading-none">
                        {t('vacancies')}
                    </h1>
                    <div className="w-12 h-[2px] bg-yellow-500"></div>
                </div>

                {/* Desktop Table */}
                <div className="hidden md:block overflow-hidden border border-yellow-600/30 rounded-lg">
                    <table className="w-full">
                        <thead>
                        <tr className="border-b border-yellow-600/20 bg-black/50">
                            <th className="px-4 lg:px-6 py-4 text-left text-xs lg:text-sm font-light tracking-wide text-yellow-500 uppercase">
                                {t('position')}
                            </th>
                            <th className="px-4 lg:px-6 py-4 text-left text-xs lg:text-sm font-light tracking-wide text-yellow-500 uppercase">
                                {t('location')}
                            </th>
                            <th className="px-4 lg:px-6 py-4 text-left text-xs lg:text-sm font-light tracking-wide text-yellow-500 uppercase">
                                {t('type')}
                            </th>
                            <th className="px-4 lg:px-6 py-4 text-left text-xs lg:text-sm font-light tracking-wide text-yellow-500 uppercase">
                                {t('salary')}
                            </th>
                            <th className="px-4 lg:px-6 py-4 text-left text-xs lg:text-sm font-light tracking-wide text-yellow-500 uppercase">
                                {t('deadline')}
                            </th>
                            <th className="px-4 lg:px-6 py-4 text-center text-xs lg:text-sm font-light tracking-wide text-yellow-500 uppercase">
                                {t('apply')}
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {vacancies?.map((vacancy, index) => (
                            <tr
                                key={vacancy.id}
                                className={`border-b border-yellow-600/10 hover:bg-yellow-500/5 transition-colors duration-300 ${
                                    index % 2 === 0 ? 'bg-black/30' : 'bg-black'
                                }`}
                            >
                                <td className="px-4 lg:px-6 py-4">
                                    <div>
                                        <p className="text-sm lg:text-base font-light text-white tracking-wide">
                                            {getVacancyTitle(vacancy)}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1 font-light">
                                            {getSubtitleTitle(vacancy)}
                                        </p>
                                    </div>
                                </td>
                                <td className="px-4 lg:px-6 py-4">
                                    <p className="text-xs lg:text-sm text-gray-300 font-light">
                                        {vacancy.location}
                                    </p>
                                </td>
                                <td className="px-4 lg:px-6 py-4">
                                        <span
                                            className="text-xs font-light px-2 lg:px-3 py-1.5 bg-yellow-500/10 border border-yellow-600/30 text-yellow-400 rounded tracking-wide whitespace-nowrap">
                                            {vacancy.employmentType}
                                        </span>
                                </td>
                                <td className="px-4 lg:px-6 py-4">
                                    <p className="text-xs lg:text-sm text-gray-300 font-light">
                                        {formatSalary(vacancy.salaryMin, vacancy.salaryMax)}
                                    </p>
                                </td>
                                <td className="px-4 lg:px-6 py-4">
                                    <p className="text-xs lg:text-sm text-gray-400 font-light">
                                        {formatDate(vacancy.deadline)}
                                    </p>
                                </td>
                                <td className="px-4 lg:px-6 py-4 text-center">
                                    <Link
                                        to="/fonon-haqida/ishga-ariza"
                                        className="block w-full text-xs font-light tracking-widest text-yellow-500 hover:text-yellow-400 uppercase transition-colors duration-300 py-2 border border-yellow-600/30 hover:border-yellow-500 rounded text-center"
                                    >
                                        {t('apply')}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden space-y-4">
                    {vacancies?.map((vacancy) => (
                        <div
                            key={vacancy.id}
                            className="border border-yellow-600/30 rounded-lg p-4 bg-black/50 hover:bg-yellow-500/5 transition-colors duration-300"
                        >
                            <div className="mb-3">
                                <h3 className="text-lg font-light text-white tracking-wide">
                                    {getVacancyTitle(vacancy)}
                                </h3>
                                <p className="text-xs text-gray-500 mt-1 font-light">
                                    {getSubtitleTitle(vacancy)}
                                </p>
                            </div>

                            <div className="space-y-2 mb-4 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500 font-light">{t('locationLabel')}</span>
                                    <span className="text-gray-300 font-light">{vacancy.location}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500 font-light">{t('typeLabel')}</span>
                                    <span
                                        className="text-yellow-400 text-xs px-2 py-1 bg-yellow-500/10 border border-yellow-600/30 rounded">
                                        {vacancy.employmentType}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500 font-light">{t('salaryLabel')}</span>
                                    <span
                                        className="text-gray-300 font-light">{formatSalary(vacancy.salaryMin, vacancy.salaryMax)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500 font-light">{t('deadlineLabel')}</span>
                                    <span className="text-gray-400 font-light">{formatDate(vacancy.deadline)}</span>
                                </div>
                            </div>

                            <Link
                                to="/fonon-haqida/ishga-ariza"
                                className="block w-full text-xs font-light tracking-widest text-yellow-500 hover:text-yellow-400 uppercase transition-colors duration-300 py-2 border border-yellow-600/30 hover:border-yellow-500 rounded text-center"
                            >
                                {t('apply')}
                            </Link>

                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {!vacancies || vacancies.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 font-light tracking-wide">{t('noVacancies')}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Vacancies;