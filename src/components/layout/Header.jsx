import {NAV_ITEMS} from "../../utils/constants";
import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import Dropdown from "../DropdownComponent.jsx";
import {useGetNavItemsQuery} from "../../lib/redux/services/index";
import {useDispatch, useSelector} from "react-redux";
import {setLanguage} from "../../lib/redux/slices/languageSlice.js";

const translations = {
    en: {
        storeLocator: "Store Locator",
        customerService: "Customer Service",
        appointment: "Book Appointment",
        contactUs: "Contact Us",
        noItems: "No items available",
    },
    uz: {
        storeLocator: "Do'kon joylashuvi",
        customerService: "Mijozlarga xizmat ko'rsatish",
        appointment: "Qabulga yozilish",
        contactUs: "Biz bilan bog'laning",
        noItems: "Elementlar mavjud emas",
    },
    ru: {
        storeLocator: "Поиск магазина",
        customerService: "Обслуживание клиентов",
        appointment: "Запись на прием",
        contactUs: "Свяжитесь с нами",
        noItems: "Нет элементов",
    }
};

const Header = () => {
    const [activeTab, setActiveTab] = useState(null);
    const [activeSubTab, setActiveSubTab] = useState(null);
    const location = useLocation();
    const currentPath = location.pathname;

    const isFixed = currentPath === "/";
    const [openDropdown, setOpenDropdown] = useState(null);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileActiveMenu, setMobileActiveMenu] = useState(null);
    const [mobileActiveSubMenu, setMobileActiveSubMenu] = useState(null);
    const [transformedNavItems, setTransformedNavItems] = useState([]);

    const dispatch = useDispatch();
    const language = useSelector(state => state.language.current);
    const { data: navItems, isLoading, error } = useGetNavItemsQuery();

    const handleLanguageChange = (lang) => {
        dispatch(setLanguage(lang));
    };

    const t = (key) => translations[language][key] || translations.en[key];

    const getLabel = (item) => {
        if (language === 'uz') return item.nameUz;
        if (language === 'ru') return item.nameRu;
        return item.nameEn;
    };

    useEffect(() => {
        if (!navItems) return;

        const result = navItems.map((item) => ({
            type: item.children?.length > 0 ? 'mega' : 'link',
            label: getLabel(item),
            slug: item.slug,
            children: item.children,
            tabs: item.children?.map((child) => ({
                label: getLabel(child),
                slug: child.slug,
                items: child.products || [],
            })) || [],
        }));

        setTransformedNavItems(result);
    }, [navItems, language]);

    const closeDropdown = () => {
        setOpenDropdown(null);
    };

    useEffect(() => {
        setMobileMenuOpen(false);
        setMobileActiveMenu(null);
        setMobileActiveSubMenu(null);
    }, [location.pathname]);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    return (
        <>
            <header
                className={`${
                    isFixed ? "absolute" : "!bg-black/80"
                } top-0 z-10 w-screen py-3 transition-all duration-300`}
            >
                <div className="lr-topbar hidden lg:block">
                    <div className="container container-custom-one">
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <div className="lr-topbar-controls">
                                    <ul className="flex items-center gap-x-3 text-xs xl:text-sm">
                                        <li className="word-break-normal">
                                            <Link to={"/store-locator"}>
                                             <span className={"text-white"}>
                                            <i className="fa-solid fa-location-dot"></i> {t('storeLocator')}
                                             </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/customer-service"}>
                                              <span className={"text-white"}>
                                            <i className="fa-solid fa-bell-concierge"></i> {t('customerService')}
                                        </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/appointment"}>
                                            <span className="text-white">
                                              <i className="fa-solid fa-calendar-check"></i> {t('appointment')}
                                            </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-7 topright">
                                <div className="lr-topbar-controls style-2">
                                    <ul>
                                        <li>
                                            <Link to={"/callcenter"}>
                                                <i className="fa-solid fa-phone-volume"></i> {t('contactUs')}
                                            </Link>
                                        </li>
                                        <li>
                                            <div className="nice-select dildegis" tabIndex="0">
                                                <span className="current">
                                                    {language === 'en' ? 'English' : language === 'uz' ? 'Uzbek' : 'Русский'}
                                                </span>
                                                <ul className="list">
                                                    <li
                                                        data-value="en"
                                                        className={`option ${language === 'en' ? 'selected' : ''}`}
                                                        onClick={() => handleLanguageChange('en')}
                                                    >
                                                        English
                                                    </li>
                                                    <li
                                                        data-value="uz"
                                                        className={`option ${language === 'uz' ? 'selected' : ''}`}
                                                        onClick={() => handleLanguageChange('uz')}
                                                    >
                                                        Uzbek
                                                    </li>
                                                    <li
                                                        data-value="ru"
                                                        className={`option ${language === 'ru' ? 'selected' : ''}`}
                                                        onClick={() => handleLanguageChange('ru')}
                                                    >
                                                        Русский
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-4 lg:pt-6">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden text-white p-2 hover:text-yellow-400 transition-colors z-50"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>

                    {/*/!* LEFT NAVIGATION *!/*/}
                    {/*<ul className="hidden lg:flex items-center gap-x-4 xl:gap-x-6 flex-1 text-sm xl:text-base justify-center">*/}
                    {/*    {transformedNavItems.slice(0, 2).map((item, index) => (*/}
                    {/*        <li*/}
                    {/*            key={index}*/}
                    {/*            className="relative flex-shrink-0"*/}
                    {/*            onMouseEnter={() => setActiveTab(index)}*/}
                    {/*            onMouseLeave={() => {*/}
                    {/*                setActiveTab(null);*/}
                    {/*                setActiveSubTab(null);*/}
                    {/*            }}*/}
                    {/*        >*/}
                    {/*            <div className="flex items-center gap-x-1 cursor-pointer">*/}
                    {/*                {item.type === 'mega' ? (*/}
                    {/*                    <span className="text-white">{item.label}</span>*/}
                    {/*                ) : (*/}
                    {/*                    <a href={`/${item.slug}`}>*/}
                    {/*                        <span className="text-white">{item.label}</span>*/}
                    {/*                    </a>*/}
                    {/*                )}*/}

                    {/*                {item.type === 'mega' && (*/}
                    {/*                    <svg*/}
                    {/*                        xmlns="http://www.w3.org/2000/svg"*/}
                    {/*                        className={`w-4 h-4 text-gray-300 transition-transform duration-200 ${activeTab === index ? 'rotate-180' : ''}`}*/}
                    {/*                        fill="none"*/}
                    {/*                        viewBox="0 0 24 24"*/}
                    {/*                        stroke="currentColor"*/}
                    {/*                        strokeWidth={2}*/}
                    {/*                    >*/}
                    {/*                        <path*/}
                    {/*                            strokeLinecap="round"*/}
                    {/*                            strokeLinejoin="round"*/}
                    {/*                            d="M19 9l-7 7-7-7"*/}
                    {/*                        />*/}
                    {/*                    </svg>*/}
                    {/*                )}*/}
                    {/*            </div>*/}

                    {/*            /!* DROPDOWN *!/*/}
                    {/*            {item.type === 'mega' && activeTab === index && (*/}
                    {/*                <div*/}
                    {/*                    className="fixed left-1/2 -translate-x-1/2 top-[125px] w-[1200px] h-[400px] bg-black text-gray-200 shadow-2xl border border-gray-800 z-50 overflow-hidden flex"*/}
                    {/*                    onMouseEnter={() => setActiveTab(index)}*/}
                    {/*                    onMouseLeave={() => {*/}
                    {/*                        setActiveTab(null);*/}
                    {/*                        setActiveSubTab(null);*/}
                    {/*                    }}*/}
                    {/*                >*/}
                    {/*                    /!* LEFT SIDEBAR *!/*/}
                    {/*                    <div className="flex flex-col w-[225px] bg-black border-r border-gray-800 pt-4">*/}
                    {/*                        {item.tabs?.map((tab, i) => (*/}
                    {/*                            <div*/}
                    {/*                                key={i}*/}
                    {/*                                className="relative cursor-pointer"*/}
                    {/*                                onMouseEnter={() => setActiveSubTab(i)}*/}
                    {/*                            >*/}
                    {/*                                <div*/}
                    {/*                                    className={`px-4 py-3 text-xs font-light flex justify-between items-center transition-all duration-200 border-l-2 ${*/}
                    {/*                                        activeSubTab === i*/}
                    {/*                                            ? 'border-yellow-500 text-yellow-400 bg-gray-900/50'*/}
                    {/*                                            : 'border-transparent text-gray-500 hover:text-gray-300 hover:bg-gray-900/30'*/}
                    {/*                                    }`}*/}
                    {/*                                >*/}
                    {/*                                    <span className="tracking-wide">{tab.label}</span>*/}
                    {/*                                    <svg*/}
                    {/*                                        className="w-3 h-3 text-gray-600"*/}
                    {/*                                        fill="none"*/}
                    {/*                                        stroke="currentColor"*/}
                    {/*                                        viewBox="0 0 24 24"*/}
                    {/*                                    >*/}
                    {/*                                        <path*/}
                    {/*                                            strokeLinecap="round"*/}
                    {/*                                            strokeLinejoin="round"*/}
                    {/*                                            strokeWidth={2}*/}
                    {/*                                            d="M9 5l7 7-7 7"*/}
                    {/*                                        />*/}
                    {/*                                    </svg>*/}
                    {/*                                </div>*/}
                    {/*                            </div>*/}
                    {/*                        ))}*/}
                    {/*                    </div>*/}

                    {/*                    /!* RIGHT PANEL *!/*/}
                    {/*                    {item.tabs?.[activeSubTab] && (*/}
                    {/*                        <div className="w-full h-auto bg-black overflow-y-hidden p-6">*/}
                    {/*                            <div className="mb-6">*/}
                    {/*                                <h3 className="text-sm font-light tracking-widest text-yellow-500 mb-3 uppercase">*/}
                    {/*                                    {item.tabs[activeSubTab].label}*/}
                    {/*                                </h3>*/}
                    {/*                                <div className="w-8 h-px bg-yellow-500/50"></div>*/}
                    {/*                            </div>*/}
                    {/*                            <div className="grid grid-cols-5 gap-3">*/}
                    {/*                                {item.tabs[activeSubTab].items && item.tabs[activeSubTab].items.length > 0 ? (*/}
                    {/*                                    item.tabs[activeSubTab].items.map((imgObj, idx) => (*/}
                    {/*                                        <div*/}
                    {/*                                            key={idx}*/}
                    {/*                                            className="bg-gray-900 hover:bg-gray-800 transition-colors duration-300 border border-gray-800 hover:border-gray-700"*/}
                    {/*                                        >*/}
                    {/*                                            <a*/}
                    {/*                                                href={imgObj.link}*/}
                    {/*                                                target="_blank"*/}
                    {/*                                                rel="noopener noreferrer"*/}
                    {/*                                                className="block w-full h-24 p-2 cursor-pointer flex items-center justify-center"*/}
                    {/*                                            >*/}
                    {/*                                                <img*/}
                    {/*                                                    src={imgObj.img}*/}
                    {/*                                                    alt={imgObj.navitem || 'Product'}*/}
                    {/*                                                    className="w-full h-full object-contain"*/}
                    {/*                                                />*/}
                    {/*                                            </a>*/}
                    {/*                                        </div>*/}
                    {/*                                    ))*/}
                    {/*                                ) : (*/}
                    {/*                                    <p className="text-gray-600 text-xs">{t('noItems')}</p>*/}
                    {/*                                )}*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    )}*/}
                    {/*                </div>*/}
                    {/*            )}*/}
                    {/*        </li>*/}
                    {/*    ))}*/}
                    {/*</ul>*/}

                    {/*/!* LOGO *!/*/}
                    {/*<Link to="/">*/}
                    {/*    <div className="w-32 h-10 sm:w-40 sm:h-12 lg:w-60 lg:h-14 xl:w-[344px] xl:h-[60px] flex-shrink-0 flex items-center justify-center">*/}
                    {/*        <img*/}
                    {/*            src="/assets/img/logo.png"*/}
                    {/*            className="max-w-full max-h-full object-contain"*/}
                    {/*            alt="logo"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</Link>*/}

                    {/*/!* RIGHT NAVIGATION *!/*/}
                    {/*<ul className="hidden lg:flex flex-1 justify-center items-center gap-x-4 xl:gap-x-6 text-sm xl:text-base">*/}
                    {/*    {transformedNavItems.slice(2).map((item, index) => {*/}
                    {/*        const actualIndex = index + 3;*/}

                    {/*        return (*/}
                    {/*            <li*/}
                    {/*                key={index}*/}
                    {/*                className="relative flex items-center group"*/}
                    {/*                onMouseEnter={() => setOpenDropdown(actualIndex)}*/}
                    {/*                onMouseLeave={() => setOpenDropdown(null)}*/}
                    {/*            >*/}
                    {/*                <Link to={`/${item.slug}`} className="w-full">*/}
                    {/*                    <div className="flex items-center gap-x-2 text-sm text-gray-200 hover:text-white transition-colors duration-200 tracking-wide uppercase cursor-pointer">*/}
                    {/*                        {item.label}*/}
                    {/*                        {item.children?.length > 0 && (*/}
                    {/*                            <svg*/}
                    {/*                                xmlns="http://www.w3.org/2000/svg"*/}
                    {/*                                className={`w-4 h-4 transition-transform duration-200 ${*/}
                    {/*                                    openDropdown === actualIndex ? 'rotate-180' : ''*/}
                    {/*                                }`}*/}
                    {/*                                fill="none"*/}
                    {/*                                viewBox="0 0 24 24"*/}
                    {/*                                stroke="currentColor"*/}
                    {/*                                strokeWidth={1.5}*/}
                    {/*                            >*/}
                    {/*                                <path*/}
                    {/*                                    strokeLinecap="square"*/}
                    {/*                                    strokeLinejoin="miter"*/}
                    {/*                                    d="M19 9l-7 7-7-7"*/}
                    {/*                                />*/}
                    {/*                            </svg>*/}
                    {/*                        )}*/}
                    {/*                    </div>*/}
                    {/*                </Link>*/}

                    {/*                /!* Simple Dropdown for right nav *!/*/}
                    {/*                {openDropdown === actualIndex && item.children?.length > 0 && (*/}
                    {/*                    <div*/}
                    {/*                        className="absolute left-1/2 -translate-x-1/2 top-full mt-0 bg-black border border-gray-800 rounded shadow-lg z-50 min-w-48"*/}
                    {/*                        onMouseEnter={() => setOpenDropdown(actualIndex)}*/}
                    {/*                        onMouseLeave={() => setOpenDropdown(null)}*/}
                    {/*                    >*/}
                    {/*                        {item.children.map((child, i) => (*/}
                    {/*                            <Link key={i} to={`/${item.slug}/${child.slug}`} className="block w-full">*/}
                    {/*                                <div className="px-4 py-2 text-gray-200 hover:bg-yellow-500 hover:text-black transition-colors duration-200 border-b border-gray-800 last:border-b-0">*/}
                    {/*                                    {getLabel(child)}*/}
                    {/*                                </div>*/}
                    {/*                            </Link>*/}
                    {/*                        ))}*/}
                    {/*                    </div>*/}
                    {/*                )}*/}
                    {/*            </li>*/}
                    {/*        );*/}
                    {/*    })}*/}
                    {/*</ul>*/}

                    {/* LEFT NAVIGATION WITH MEGA MENU */}
                    {/* LEFT NAVIGATION WITH MEGA MENU */}
                    <ul className="hidden lg:flex items-center gap-x-5 xl:gap-x-6 flex-1 text-sm xl:text-base justify-end">
                        {transformedNavItems.slice(0, 2).map((item, index) => (
                            <li
                                key={index}
                                className="relative flex-shrink-0"
                                onMouseEnter={() => item.type === "mega" && setActiveTab(index)}
                                onMouseLeave={() => item.type === "mega" && setActiveTab(null)}
                            >
                                <div className="flex items-center gap-x-1 cursor-pointer pb-2">
                                    {item.type === "mega" ? (
                                        <span className="text-white font-light tracking-wide hover:text-amber-50 transition-colors duration-300">
                        {item.label}
                    </span>
                                    ) : (
                                        <a href={`/${item.slug}`}>
                        <span className="text-white font-light tracking-wide hover:text-amber-50 transition-colors duration-300">
                            {item.label}
                        </span>
                                        </a>
                                    )}

                                    {item.type === "mega" && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`w-3 h-3 text-amber-100/40 transition-transform duration-300 ${
                                                activeTab === index ? "rotate-180" : ""
                                            }`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2.5}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </div>

                                {/* MEGA DROPDOWN - CENTERED */}
                                {item.type === "mega" && activeTab === index && (
                                    <div
                                        className="fixed left-1/2 -translate-x-1/2 w-full max-w-7xl bg-neutral-900 z-50 shadow-2xl"
                                        style={{
                                            top: "120px",
                                            borderTop: "2px solid #d4af37",
                                        }}
                                        onMouseEnter={() => setActiveTab(index)}
                                        onMouseLeave={() => {
                                            setActiveTab(null);
                                            setActiveSubTab(null);
                                        }}
                                    >
                                        <div className="grid grid-cols-5 gap-0 h-72">
                                            {/* LEFT SIDEBAR - Categories */}
                                            <div className="col-span-1 bg-neutral-800 border-r border-amber-400/20">
                                                {item.tabs?.map((tab, i) => (
                                                    <div
                                                        key={i}
                                                        className="border-b border-neutral-700 last:border-b-0 cursor-pointer"
                                                        onMouseEnter={() => setActiveSubTab(i)}
                                                    >
                                                        <div
                                                            className={`px-5 py-4 text-sm font-light transition-all duration-200 border-l-2 ${
                                                                activeSubTab === i
                                                                    ? "border-amber-400 bg-neutral-700 text-amber-50"
                                                                    : "border-transparent text-neutral-400 hover:text-neutral-200 hover:bg-neutral-700/50"
                                                            }`}
                                                        >
                                                            {tab.label}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* RIGHT PANEL - Products Grid */}
                                            <div className="col-span-4 bg-neutral-900 p-8">
                                                {item.tabs?.[activeSubTab] ? (
                                                    <>
                                                        <h3 className="text-xs font-light tracking-[0.2em] text-amber-200 p-3 uppercase">
                                                            {item.tabs[activeSubTab].label}
                                                        </h3>
                                                        <div className="w-10 h-px bg-gradient-to-r from-amber-400/50 to-transparent mb-6"></div>
                                                        <div className="grid grid-cols-6 gap-6 h-48">
                                                            {item.tabs[activeSubTab].items &&
                                                            item.tabs[activeSubTab].items.length > 0 ? (
                                                                item.tabs[activeSubTab].items.map((imgObj, idx) => (
                                                                    <a
                                                                        key={idx}
                                                                        href={imgObj.link}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="group flex flex-col items-center gap-2"
                                                                    >
                                                                        <div className="w-full h-32 flex items-center justify-center group-hover:opacity-70 transition-opacity duration-300">
                                                                            <img
                                                                                src={imgObj.img}
                                                                                alt={imgObj.navitem || "Product"}
                                                                                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                                                            />
                                                                        </div>
                                                                        <p className="text-xs text-neutral-400 text-center font-light group-hover:text-amber-300 transition-colors duration-300 p-3">
                                                                            {imgObj.navitem}
                                                                        </p>
                                                                    </a>
                                                                ))
                                                            ) : (
                                                                <p className="text-neutral-600 text-xs col-span-6">{t("noItems")}</p>
                                                            )}
                                                        </div>
                                                    </>
                                                ) : (
                                                    <p className="text-neutral-600 text-xs">Select a category</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* LOGO */}
                    <Link to="/" className="mx-8">
                        <div className="w-32 h-9 sm:w-40 sm:h-10 lg:w-56 lg:h-12 flex-shrink-0 flex items-center justify-center">
                            <img
                                src="/assets/img/logo.png"
                                className="max-w-full max-h-full object-contain"
                                alt="logo"
                            />
                        </div>
                    </Link>

                    {/* RIGHT NAVIGATION */}
                    <ul className="hidden lg:flex flex-1 justify-start items-center gap-x-5 xl:gap-x-6 text-sm xl:text-base">
                        {transformedNavItems.slice(2).map((item, index) => {
                            const actualIndex = index + 3;
                            return (
                                <li
                                    key={index}
                                    className="relative flex items-center"
                                    onMouseEnter={() => item.children?.length > 0 && setOpenDropdown(actualIndex)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <Link to={`/${item.slug}`} className="w-full pb-2">
                                        <div className="flex items-center gap-x-2 text-sm text-white font-light tracking-wide uppercase hover:text-amber-50 transition-colors duration-300">
                                            {item.label}
                                            {item.children?.length > 0 && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={`w-3 h-3 text-amber-100/40 transition-transform duration-300 ${
                                                        openDropdown === actualIndex ? "rotate-180" : ""
                                                    }`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2.5}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            )}
                                        </div>
                                    </Link>

                                    {/* SIMPLE DROPDOWN */}
                                    {openDropdown === actualIndex && item.children?.length > 0 && (
                                        <div
                                            className="absolute left-0 top-full mt-0 bg-neutral-900 shadow-2xl z-50 min-w-56 overflow-hidden"
                                            onMouseEnter={() => setOpenDropdown(actualIndex)}
                                            onMouseLeave={() => setOpenDropdown(null)}
                                            style={{
                                                borderTop: "2px solid #d4af37",
                                            }}
                                        >
                                            {item.children.map((child, i) => (
                                                <Link key={i} to={`/${item.slug}/${child.slug}`} className="block w-full">
                                                    <div className="px-2 py-4 text-sm text-neutral-300 font-light hover:bg-neutral-800 hover:text-amber-200 transition-colors duration-200 border-b border-neutral-800 last:border-b-0">
                                                        {getLabel(child)}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                    <Link to="/callcenter" className="text-white p-2 hover:text-yellow-400 transition-colors">
                        <svg className="w-5 h-5 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </Link>
                </div>
            </header>

            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-black/95 z-40 lg:hidden overflow-y-auto">
                    <div className="container mx-auto px-4 pt-20 pb-8">

                        {/* Mobile Top Links */}
                        <div className="mb-8 pb-6 border-b border-gray-700">
                            <Link to="/store-locator" className="block py-3 text-white hover:text-yellow-400 transition-colors">
                                <i className="fa-solid fa-location-dot mr-2"></i> {t('storeLocator')}
                            </Link>
                            <Link to="/customer-service" className="block py-3 text-white hover:text-yellow-400 transition-colors">
                                <i className="fa-solid fa-bell-concierge mr-2"></i> {t('customerService')}
                            </Link>
                            <Link to="/appointment" className="block py-3 text-white hover:text-yellow-400 transition-colors">
                                <i className="fa-solid fa-calendar-check mr-2"></i> {t('appointment')}
                            </Link>
                        </div>

                        <nav>
                            {NAV_ITEMS.map((item, index) => (
                                <div key={index} className="border-b border-gray-800">
                                    {/* Simple Link */}
                                    {item.type === "link" && (
                                        <Link
                                            to={item.href || "/highjewelry"}
                                            className="block py-4 text-lg text-white hover:text-yellow-400 transition-colors uppercase font-medium tracking-wide"
                                        >
                                            {item.label}
                                        </Link>
                                    )}

                                    {/* Dropdown Menu */}
                                    {item.children && !item.tabs && (
                                        <div>
                                            <button
                                                onClick={() => setMobileActiveMenu(mobileActiveMenu === index ? null : index)}
                                                className="w-full flex items-center justify-between py-4 text-lg text-white hover:text-yellow-400 transition-colors uppercase font-medium tracking-wide"
                                            >
                                                <span>{item.label}</span>
                                                <svg
                                                    className={`w-5 h-5 transition-transform duration-200 ${
                                                        mobileActiveMenu === index ? "rotate-180" : ""
                                                    }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            {mobileActiveMenu === index && (
                                                <div className="pb-4 pl-4 flex flex-col">
                                                    {item.children?.map((child, i) => (
                                                        <Link
                                                            key={i}
                                                            to={child.href || "/"}
                                                            className="py-2 text-gray-300 hover:text-yellow-400 transition-colors"
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}

                                        </div>
                                    )}

                                    {item.type === "mega" && (
                                        <div>
                                            <button
                                                onClick={() => setMobileActiveMenu(mobileActiveMenu === index ? null : index)}
                                                className="w-full flex items-center justify-between py-4 text-lg text-white hover:text-yellow-400 transition-colors uppercase font-medium tracking-wide"
                                            >
                                                <span>{item.label}</span>
                                                <svg
                                                    className={`w-5 h-5 transition-transform duration-200 ${
                                                        mobileActiveMenu === index ? "rotate-180" : ""
                                                    }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            {mobileActiveMenu === index && (
                                                <div className="pb-4 pl-4">
                                                    {item.tabs?.map((tab, i) => (
                                                        <div key={i} className="mb-2">
                                                            <button
                                                                onClick={() => setMobileActiveSubMenu(mobileActiveSubMenu === i ? null : i)}
                                                                className="w-full flex items-center justify-between py-2 text-gray-300 hover:text-yellow-400 transition-colors"
                                                            >
                                                                <span>{tab.label}</span>
                                                                <svg
                                                                    className={`w-4 h-4 transition-transform duration-200 ${
                                                                        mobileActiveSubMenu === i ? "rotate-180" : ""
                                                                    }`}
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                                </svg>
                                                            </button>
                                                            {mobileActiveSubMenu === i && (
                                                                <div className="grid grid-cols-2 gap-2 mt-2 pl-2">
                                                                    {tab.items?.map((imgObj, idx) => (
                                                                        <div key={idx} className="bg-gray-800 rounded overflow-hidden">
                                                                            <a href="https://fonon.uz" target="_blank" rel="noopener noreferrer" className="block p-2">
                                                                                <img src={imgObj.src} alt={imgObj.alt} className="w-full h-auto object-contain" />
                                                                            </a>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Mobile Language Selector */}
                        <div className="mt-8 pt-6 border-t border-gray-700">
                            <label className="block text-white text-sm font-medium mb-2">Language</label>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleLanguageChange('en')}
                                    className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-colors ${
                                        language === 'en'
                                            ? 'bg-yellow-400 text-black'
                                            : 'bg-gray-800 text-white border border-gray-600 hover:border-yellow-400'
                                    }`}
                                >
                                    English
                                </button>
                                <button
                                    onClick={() => handleLanguageChange('uz')}
                                    className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-colors ${
                                        language === 'uz'
                                            ? 'bg-yellow-400 text-black'
                                            : 'bg-gray-800 text-white border border-gray-600 hover:border-yellow-400'
                                    }`}
                                >
                                    Uzbek
                                </button>
                                <button
                                    onClick={() => handleLanguageChange('ru')}
                                    className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-colors ${
                                        language === 'ru'
                                            ? 'bg-yellow-400 text-black'
                                            : 'bg-gray-800 text-white border border-gray-600 hover:border-yellow-400'
                                    }`}
                                >
                                    Русский
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;