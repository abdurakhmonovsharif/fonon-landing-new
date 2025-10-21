import React, { useState, useMemo } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useGetLocationsQuery } from "../../../lib/redux/services/locationApi.js";

const BASE_URL = 'http://localhost:9090';

// Translation object
const translations = {
    en: {
        home: 'Home',
        storeLocator: 'Store Locator',
        findYourStore: 'Find Your Store',
        discoverLocations: 'Discover locations near you',
        stores: 'Stores',
        city: 'City',
        store: 'Store',
        chooseCity: 'Choose a city',
        chooseStore: 'Choose a store',
        selectStore: 'Select a Store',
        selectStoreDesc: 'Choose a city and store to view details',
        getDirections: 'Get Directions',
        loadingStores: 'Loading stores...',
        errorStores: 'Error loading stores. Please try again.',
    },
    uz: {
        home: 'Bosh sahifa',
        storeLocator: 'Do\'kon lokatsiyasi',
        findYourStore: 'O\'z do\'koningizni toping',
        discoverLocations: 'Sizga yaqin joylashgan do\'konlarni oching',
        stores: 'Do\'konlar',
        city: 'Shahar',
        store: 'Do\'kon',
        chooseCity: 'Shahar tanlang',
        chooseStore: 'Do\'kon tanlang',
        selectStore: 'Do\'konni tanlang',
        selectStoreDesc: 'Tafsilotlarni ko\'rish uchun shahar va do\'konni tanlang',
        getDirections: 'Yo\'nalishni olish',
        loadingStores: 'Do\'konlar yuklanmoqda...',
        errorStores: 'Do\'konlarni yuklashda xato. Iltimos, qayta urinib ko\'ring.',
    },
    ru: {
        home: 'Главная',
        storeLocator: 'Поиск магазина',
        findYourStore: 'Найти свой магазин',
        discoverLocations: 'Откройте для себя ближайшие местоположения',
        stores: 'Магазины',
        city: 'Город',
        store: 'Магазин',
        chooseCity: 'Выберите город',
        chooseStore: 'Выберите магазин',
        selectStore: 'Выберите магазин',
        selectStoreDesc: 'Выберите город и магазин для просмотра деталей',
        getDirections: 'Получить маршрут',
        loadingStores: 'Загрузка магазинов...',
        errorStores: 'Ошибка при загрузке магазинов. Пожалуйста, попробуйте снова.',
    },
};

const StoreLocator = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedStore, setSelectedStore] = useState('');

    const language = useSelector(state => state.language.current);
    const { data: locationsData, isLoading, isError } = useGetLocationsQuery();
    const allLocations = Array.isArray(locationsData) ? locationsData : [];

    const t = (key) => translations[language][key] || translations.en[key];

    const getImageUrl = (imagePath) => {
        if (!imagePath) return '';
        return imagePath.startsWith('http') ? imagePath : `${BASE_URL}${imagePath}`;
    };

    const MapPinIcon = ({ className = "w-4 h-4" }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
        </svg>
    );

    const PhoneIcon = ({ className = "w-4 h-4" }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round">
            <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
    );

    const ClockIcon = ({ className = "w-4 h-4" }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12,6 12,12 16,14"/>
        </svg>
    );

    const ChevronRightIcon = ({ className = "w-3 h-3" }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9,18 15,12 9,6"/>
        </svg>
    );

    // Get unique cities from locations
    const cities = useMemo(() => {
        const uniqueCities = new Set();
        allLocations.forEach(location => {
            uniqueCities.add(location.mapTag || 'Unknown');
        });
        return Array.from(uniqueCities).sort();
    }, [allLocations]);

    // Filter stores by selected city
    const currentStores = useMemo(() => {
        if (!selectedCity) return [];
        return allLocations.filter(location => location.mapTag === selectedCity);
    }, [allLocations, selectedCity]);

    // Get the current selected store
    const currentStore = useMemo(() => {
        return currentStores.find(store => store.id === parseInt(selectedStore));
    }, [currentStores, selectedStore]);

    // Format time
    const formatTime = (time) => {
        if (!time) return 'N/A';
        if (typeof time === 'string') {
            return time.substring(0, 5);
        }
        const hour = String(time.hour || 0).padStart(2, '0');
        const minute = String(time.minute || 0).padStart(2, '0');
        return `${hour}:${minute}`;
    };

    // Get store name based on language
    const getStoreName = (store) => {
        if (language === 'uz') return store.nameUz || store.nameEn || 'Store';
        if (language === 'ru') return store.nameRu || store.nameEn || 'Store';
        return store.nameEn || 'Store';
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-dark flex items-center justify-center">
                <div className="text-gray-300">{t('loadingStores')}</div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="min-h-screen bg-dark flex items-center justify-center">
                <div className="text-red-400">{t('errorStores')}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-dark">
            <div className="max-w-6xl mx-auto px-4 py-5">
                <div className="flex items-center gap-1 text-xs text-gray-400 mb-6">
                    <Link to={"/"}>
                        <span className="hover:text-gray-300 cursor-pointer transition-colors">{t('home')}</span>
                    </Link>
                    <ChevronRightIcon className="w-3 h-3"/>
                    <span className="text-gray-200">{t('storeLocator')}</span>
                </div>

                <div className="mb-8 py-3">
                    <h1 className="text-3xl font-bold text-white mb-2">{t('findYourStore')}</h1>
                    <p className="text-gray-400 text-sm">{t('discoverLocations')}</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                        <div className="bg-black/50 rounded-xl border border-gray-700 p-5">
                            <div className="flex items-center gap-2 mb-4">
                                <h2 className="text-lg font-medium text-white">{t('stores')}</h2>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-medium text-gray-300 mb-2">
                                        {t('city')}
                                    </label>
                                    <select
                                        value={selectedCity}
                                        onChange={(e) => {
                                            setSelectedCity(e.target.value);
                                            setSelectedStore('');
                                        }}
                                        className="w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-lg text-sm text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    >
                                        <option value="">{t('chooseCity')}</option>
                                        {cities.map(city => (
                                            <option key={city} value={city}>{city}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-300 mb-2">
                                        {t('store')}
                                    </label>
                                    <select
                                        value={selectedStore}
                                        onChange={(e) => setSelectedStore(e.target.value)}
                                        disabled={!selectedCity}
                                        className="w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-lg text-sm text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed"
                                    >
                                        <option value="">{t('chooseStore')}</option>
                                        {currentStores.map(store => (
                                            <option key={store.id} value={store.id}>{getStoreName(store)}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="bg-black/50 rounded-xl border border-gray-700 overflow-hidden">
                            {currentStore ? (
                                <>
                                    <div className="relative h-64">
                                        <img
                                            src={getImageUrl(currentStore.images?.[0])}
                                            alt={`${getStoreName(currentStore)} store`}
                                            className="w-full h-full object-cover object-center"
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        <div className="absolute bottom-2 left-3">
                                            <h3 className="text-base font-semibold text-white">{getStoreName(currentStore)}</h3>
                                            <p className="text-gray-300 text-xs">{selectedCity}</p>
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                            <div className="space-y-3">
                                                <div className="flex items-start gap-2">
                                                    <MapPinIcon className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0"/>
                                                    <div>
                                                        <p className="text-xs text-gray-300 leading-relaxed">{currentStore.address}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <ClockIcon className="w-4 h-4 text-orange-400 flex-shrink-0"/>
                                                    <p className="text-xs text-gray-300">
                                                        {formatTime(currentStore.openTime)} - {formatTime(currentStore.closeTime)}
                                                    </p>
                                                </div>

                                                {currentStore.workDays && Array.isArray(currentStore.workDays) && currentStore.workDays.length > 0 && (
                                                    <div className="flex items-start gap-2">
                                                        <ClockIcon className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0"/>
                                                        <p className="text-xs text-gray-300">
                                                            {currentStore.workDays.filter(day => typeof day === 'string').join(', ')}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-64 text-center p-6">
                                    <MapPinIcon className="w-10 h-10 text-gray-600 mb-2"/>
                                    <h3 className="text-base font-medium text-gray-300 mb-1">{t('selectStore')}</h3>
                                    <p className="text-xs text-gray-500">
                                        {t('selectStoreDesc')}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreLocator;