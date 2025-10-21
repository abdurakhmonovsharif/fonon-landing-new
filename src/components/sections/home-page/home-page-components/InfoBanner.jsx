import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import React from 'react';

const translations = {
    en: {
        bookAppointment: 'Book Your Appointment',
        bookAppointmentDesc: 'Reserve your spot today to receive an exclusive service. Explore our jewellery up close and enjoy a private consultation with our experts.',
        askExperts: 'Ask the Fonon Experts',
        askExpertsDesc: 'Meet our specialists face-to-face and receive bespoke guidance.',
        discoverFonon: 'This is Fonon… Discover it',
        discoverFononDesc: 'Every jewel at Fonon unites nature\'s elegance with masterful artistry.',
    },
    uz: {
        bookAppointment: 'Uchrashuvni band qiling',
        bookAppointmentDesc: 'Bugunday o\'z joyingizni band qiling va eksklyuziv xizmat oling. Bizning ziynetlarni yaqindan ko\'ring va muvaffaqiyatli mutaxassislar bilan shaxsiy maslahat oling.',
        askExperts: 'Fonon Mutaxassislaridan so\'rang',
        askExpertsDesc: 'Bizning mutaxassislar bilan bevosita uchrashing va shaxsiy yo\'l-yo\'riq oling.',
        discoverFonon: 'Bu Fonon… Kashf qiling',
        discoverFononDesc: 'Fondagi har bir ziynet tabiatning nafisligini va ohotnoma san\'atini birlashtiradi.',
    },
    ru: {
        bookAppointment: 'Забронируйте встречу',
        bookAppointmentDesc: 'Зарезервируйте место сегодня и получите эксклюзивный сервис. Посмотрите нашу драгоценность вблизи и насладитесь частной консультацией с нашими экспертами.',
        askExperts: 'Спросите экспертов Fonon',
        askExpertsDesc: 'Встретьтесь с нашими специалистами лично и получите индивидуальное руководство.',
        discoverFonon: 'Это Fonon… Откройте для себя',
        discoverFononDesc: 'Каждое украшение в Fonon объединяет элегантность природы с мастерским мастерством.',
    },
};

const InfoBanner = () => {
    const language = useSelector(state => state.language.current);
    const t = (key) => translations[language][key] || translations.en[key];

    const nextIcon = <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
    >
        <line x1="3" y1="12" x2="21" y2="12" />
        <polyline points="15 6 21 12 15 18" />
    </svg>

    return (
        <div id={"info-banner"}>
            <section className="py-12 md:py-16 lg:py-24 bg-black/80" id="bannerSlider">

                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-12 py-5">


                    <div
                        className="relative w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden flex items-end text-white group my-2 lg:my-5 rounded-lg">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                            style={{backgroundImage: 'url("/assets/img/info-banner/01.webp")'}}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>

                        <div className="relative z-10 p-4 md:p-6 lg:p-8 w-full">
                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans tracking-wide mb-3 md:mb-4 leading-tight">
                                {t('bookAppointment')}
                            </h1>
                            <p className="text-xs sm:text-sm md:text-base leading-relaxed opacity-90 pr-12 md:pr-0">
                                {t('bookAppointmentDesc')}
                            </p>
                        </div>

                        <div
                            className="absolute rounded-full bg-none border border-white/30 hover:bg-white/20 bottom-4 right-4
    opacity-100 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0
    transition-all duration-500 ease-out z-10">
                            <Link to={"/appointment"}>
                                <button
                                    className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12
        hover:scale-110 transition-all duration-300 ease-out"
                                    aria-label="Book appointment"
                                >
                                    {nextIcon}
                                </button>
                            </Link>
                        </div>

                    </div>

                    <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-1/2 h-auto lg:h-[600px] my-2 lg:my-5">
                        <div className="relative h-[250px] md:h-[280px] lg:flex-1 overflow-hidden flex items-end text-white group rounded-lg">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                                style={{backgroundImage: 'url("/assets/img/info-banner/02.webp")'}}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                            <div className="relative z-10 p-3 md:p-4">
                                <h2 className="text-lg md:text-xl lg:text-2xl font-serif mb-1 md:mb-2">{t('askExperts')}</h2>
                                <p className="text-xs md:text-sm opacity-90 leading-relaxed">
                                    {t('askExpertsDesc')}
                                </p>
                            </div>

                            <div
                                className="absolute bottom-0 right-0 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-10">
                                <div
                                    className="absolute rounded-full bg-none border border-white/30 hover:bg-white/20 bottom-3 right-3 md:bottom-4 md:right-4
    opacity-100 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0
    transition-all duration-500 ease-out z-10">
                                    <Link to={"/callcenter"}>
                                        <button
                                            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12
            hover:scale-110 transition-all duration-300 ease-out"
                                            aria-label="Contact experts"
                                        >
                                            {nextIcon}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[250px] md:h-[280px] lg:flex-1 overflow-hidden flex items-end text-white group rounded-lg">

                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                                style={{backgroundImage: 'url("/assets/img/info-banner/03.webp")'}}
                            />
                            <div className="absolute inset-0 bg-black/20"/>
                            <div className="relative z-10 p-3 md:p-4">
                                <h2 className="text-lg md:text-xl lg:text-2xl font-serif mb-1 md:mb-2">{t('discoverFonon')}</h2>
                                <p className="text-xs md:text-sm opacity-90 leading-relaxed">
                                    {t('discoverFononDesc')}
                                </p>
                            </div>

                            <div
                                className="absolute bottom-0 right-0 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-10">
                                <div
                                    className="absolute rounded-full bg-none border border-white/30 hover:bg-white/20 bottom-3 right-3 md:bottom-4 md:right-4
    opacity-100 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0
    transition-all duration-500 ease-out z-10">
                                    <Link to={"/fonon-haqida/bu-fonon"}>
                                        <button
                                            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12
            hover:scale-110 transition-all duration-300 ease-out"
                                            aria-label="Discover Fonon"
                                        >
                                            {nextIcon}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InfoBanner;