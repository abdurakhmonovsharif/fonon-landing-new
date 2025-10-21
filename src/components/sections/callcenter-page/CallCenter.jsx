import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from "../../../lib/redux/services/callCenterApi.js";

const translations = {
    en: {
        contactUs: 'Contact Us',
        officeAddress: 'Office Address',
        phoneNumber: 'Phone Number',
        emailAddress: 'Email Address',
        addressNotAvailable: 'Address not available',
        phoneNotAvailable: 'Phone not available',
        emailNotAvailable: 'Email not available',
        fullName: 'Your full name',
        enterEmail: 'Enter email address',
        addPhone: 'Add phone number',
        selectSubject: 'Select subject',
        enterMessage: 'Enter your message',
        getFreeQuote: 'GET FREE QUOTE',
        loadingContacts: 'Loading contact information...',
        errorContacts: 'Error loading contacts',
    },
    uz: {
        contactUs: 'Biz bilan bog\'lanish',
        officeAddress: 'Ofis manzili',
        phoneNumber: 'Telefon raqami',
        emailAddress: 'Email manzili',
        addressNotAvailable: 'Manzil mavjud emas',
        phoneNotAvailable: 'Telefon mavjud emas',
        emailNotAvailable: 'Email mavjud emas',
        fullName: 'To\'liq ismingiz',
        enterEmail: 'Email manzilini kiriting',
        addPhone: 'Telefon raqamini qo\'shing',
        selectSubject: 'Mavzuni tanlang',
        enterMessage: 'Xabaringizni kiriting',
        getFreeQuote: 'BEPUL TAVSIYA OLING',
        loadingContacts: 'Bog\'lanish ma\'lumotlari yuklanmoqda...',
        errorContacts: 'Kontaktlarni yuklashda xato',
    },
    ru: {
        contactUs: 'Свяжитесь с нами',
        officeAddress: 'Адрес офиса',
        phoneNumber: 'Номер телефона',
        emailAddress: 'Адрес электронной почты',
        addressNotAvailable: 'Адрес недоступен',
        phoneNotAvailable: 'Телефон недоступен',
        emailNotAvailable: 'Email недоступен',
        fullName: 'Ваше полное имя',
        enterEmail: 'Введите адрес электронной почты',
        addPhone: 'Добавить номер телефона',
        selectSubject: 'Выберите тему',
        enterMessage: 'Введите ваше сообщение',
        getFreeQuote: 'ПОЛУЧИТЬ БЕСПЛАТНУЮ КОТИРОВКУ',
        loadingContacts: 'Загрузка контактной информации...',
        errorContacts: 'Ошибка при загрузке контактов',
    },
};

const CallCenter = () => {
    const language = useSelector(state => state.language.current);
    const { data: contacts, isLoading, error } = useGetContactsQuery();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const t = (key) => translations[language][key] || translations.en[key];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log("Collected Form Data:", formData);
        alert("Form submitted! Check console for data ✅");
    };

    // Get the first contact (assuming single contact for now)
    const contact = contacts?.[0];

    if (isLoading) {
        return <div className="max-w-5xl mx-auto px-6 py-12 text-center">{t('loadingContacts')}</div>;
    }

    if (error) {
        return <div className="max-w-5xl mx-auto px-6 py-12 text-center text-red-500">{t('errorContacts')}</div>;
    }

    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-light text-center my-3">{t('contactUs')}</h1>

            <div className="grid md:grid-cols-2 gap-8 my-5">
                <div className="flex items-start p-4 rounded-lg border border-gray-700 hover:border-yellow-400/50 transition-all">
                    <MapPin className="w-6 h-6 text-yellow-400 mr-4 my-2 flex-shrink-0" />
                    <div>
                        <h2 className="text-lg font-medium mb-1">{t('officeAddress')}</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {contact?.address || t('addressNotAvailable')}
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex items-start p-4 mb-3 rounded-lg border border-gray-700 hover:border-yellow-400/50 transition-all">
                        <Phone className="w-6 h-6 text-yellow-400 mr-4 my-2 flex-shrink-0" />
                        <div>
                            <h2 className="text-lg font-medium mb-1">{t('phoneNumber')}</h2>
                            <p className="text-gray-400 text-sm">
                                {contact?.phoneNumber ? `+${contact.phoneNumber}` : t('phoneNotAvailable')}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start p-4 rounded-lg border border-gray-700 hover:border-yellow-400/50 transition-all">
                        <Mail className="w-6 h-6 text-yellow-400 mr-4 my-2 flex-shrink-0" />
                        <div>
                            <h2 className="text-lg font-medium mb-1">{t('emailAddress')}</h2>
                            <p className="text-gray-400 text-sm">
                                {contact?.email || t('emailNotAvailable')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-8">
                <img
                    src="/assets/img/banner/04.jpg"
                    alt="Contact Banner"
                    className="w-full aspect-[16/6] object-cover rounded-lg"
                />
            </div>

            <div className="max-w-5xl mx-auto">
                <div className="p-3 mb-4 bg-black/50">
                    <div className="grid md:grid-cols-2 gap-6 mb-3">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t('fullName')}
                            className="w-full p-3 bg-black border border-gray-600 rounded-lg
                                       focus:border-yellow-400 focus:outline-none transition-colors"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t('enterEmail')}
                            className="w-full p-3 bg-black border border-gray-600 rounded-lg
                                       focus:border-yellow-400 focus:outline-none transition-colors"
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mb-3">
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={t('addPhone')}
                            className="w-full p-3 bg-black border border-gray-600 rounded-lg
                                       focus:border-yellow-400 focus:outline-none transition-colors"
                        />
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder={t('selectSubject')}
                            className="w-full p-3 bg-black border border-gray-600 rounded-lg
                                       focus:border-yellow-400 focus:outline-none transition-colors"
                        />
                    </div>
                    <textarea
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('enterMessage')}
                        className="w-full p-3 my-3 bg-black border border-gray-600 rounded-lg
                                   focus:border-yellow-400 focus:outline-none transition-colors resize-none mb-6"
                    />
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-yellow-400 text-black py-3 mb-3 rounded-lg hover:bg-yellow-300
                                   transition-colors duration-300 font-medium"
                    >
                        {t('getFreeQuote')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CallCenter;