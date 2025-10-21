import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRequestVacancyMutation } from "../../../../lib/redux/services/vacancyApi.js";
import { useNavigate } from "react-router-dom";

const translations = {
    en: {
        mainHeading: "Fonon Jewellery",
        subHeading: "wants to work with professionals",
        description: "Fill out all fields in the form completely. The application evaluation committee will carefully review every application. Candidates who pass the initial stage will be invited for an interview at Fonon Jewellery.",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
        position: "Position Applied For",
        cvLabel: "Upload CV/Resume (PDF, DOC, DOCX)",
        fileError: "File size must be less than 5MB",
        submit: "Submit Application",
        submitting: "Submitting...",
        success: "Application submitted successfully!",
        errorSubmit: "Error submitting application. Please try again.",
        errorMessage: "Error submitting application",
    },
    uz: {
        mainHeading: "Fonon Zargarlik",
        subHeading: "mutaxassislar bilan ishlashni xohlaydi",
        description: "Formadagi barcha maydonlarni to'liq to'ldiring. Arizani baholash komiteti har bir arizani ehtiyot bilan ko'rib chiqadi. Dastlabki bosqichni o'tgan nomzodlar Fonon Zargarlik Uyiga intervyu uchun taklif qilinadi.",
        firstName: "Ismingiz",
        lastName: "Familiyangiz",
        email: "Email Manzili",
        phone: "Telefon Raqami",
        position: "Kerakli Lavozim",
        cvLabel: "CV/Resume Yuklang (PDF, DOC, DOCX)",
        fileError: "Fayl hajmi 5MB dan kam bo'lishi kerak",
        submit: "Arizani Yuborish",
        submitting: "Yuborilmoqda...",
        success: "Ariza muvaffaqiyatli yuborildi!",
        errorSubmit: "Arizani yuborishda xato. Iltimos, qayta urinib ko'ring.",
        errorMessage: "Arizani yuborishda xato",
    },
    ru: {
        mainHeading: "Fonon Ювелирные изделия",
        subHeading: "хочет работать с профессионалами",
        description: "Заполните все поля формы полностью. Комитет по оценке заявок тщательно рассмотрит каждую заявку. Кандидатов, прошедших первый этап, приглашают на собеседование в Fonon Jewellery.",
        firstName: "Имя",
        lastName: "Фамилия",
        email: "Адрес электронной почты",
        phone: "Номер телефона",
        position: "Должность, на которую вы претендуете",
        cvLabel: "Загрузите резюме/CV (PDF, DOC, DOCX)",
        fileError: "Размер файла должен быть меньше 5 МБ",
        submit: "Отправить заявку",
        submitting: "Отправка...",
        success: "Заявка успешно отправлена!",
        errorSubmit: "Ошибка при отправке заявки. Пожалуйста, попробуйте снова.",
        errorMessage: "Ошибка при отправке заявки",
    },
};

const JobApplication = () => {
    const language = useSelector(state => state.language.current);
    const t = (key) => translations[language][key] || translations.en[key];

    const [requestVacancy, { isLoading, error }] = useRequestVacancyMutation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        file: '',
        position: '',
    });

    const [fileError, setFileError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        setFormData((prev) => ({
            ...prev,
            phoneNumber: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                setFileError(t('fileError'));
                return;
            }
            setFileError('');
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prev) => ({
                    ...prev,
                    file: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await requestVacancy(formData).unwrap();
            console.log('Application Submitted:', response);
            setFormData({
                firstName: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                file: '',
                position: '',
            });
            navigate("/")
            alert(t('success'));
        } catch (err) {
            console.error('Error submitting application:', err);
            alert(t('errorSubmit'));
        }
    };

    return (
        <div className="min-h-screen bg-black/40 text-white px-4 lg:px-8 py-12 lg:py-20 flex items-center">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start lg:items-center">

                <div className="space-y-6 lg:space-y-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider leading-tight">
                        {t('mainHeading')} <br />
                        <span className="font-semibold">{t('subHeading')}</span>
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed border-l-2 border-gray-700 pl-4 lg:pl-6">
                        {t('description')}
                    </p>
                </div>

                <div className="p-6 lg:p-10 shadow-2xl border-none rounded-lg">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-8">
                        {/* First Name */}
                        <input
                            type="text"
                            name="firstName"
                            placeholder={t('firstName')}
                            value={formData.firstName}
                            onChange={handleChange}
                            className="bg-transparent border border-transparent hover:border-white focus:border-yellow-500 transition-all outline-none py-2 lg:py-3 text-base lg:text-lg"
                            required
                        />

                        {/* Last Name */}
                        <input
                            type="text"
                            name="lastName"
                            placeholder={t('lastName')}
                            value={formData.lastName}
                            onChange={handleChange}
                            className="bg-transparent border border-transparent hover:border-white focus:border-yellow-500 transition-all outline-none py-2 lg:py-3 text-base lg:text-lg"
                            required
                        />

                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            placeholder={t('email')}
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-transparent border border-transparent hover:border-white focus:border-yellow-500 transition-all outline-none py-2 lg:py-3 text-base lg:text-lg"
                            required
                        />

                        {/* Phone Number */}
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handlePhoneChange}
                            placeholder={t('phone')}
                            className="bg-transparent border border-transparent hover:border-yellow-500/50 focus:border-yellow-500 transition-all outline-none py-2 lg:py-3 text-base font-light"
                            required
                        />

                        {/* Position */}
                        <input
                            type="text"
                            name="position"
                            placeholder={t('position')}
                            value={formData.position}
                            onChange={handleChange}
                            className="bg-transparent border border-transparent hover:border-white focus:border-yellow-500 transition-all outline-none py-2 lg:py-3 text-base lg:text-lg"
                            required
                        />

                        {/* File Upload */}
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">
                                {t('cvLabel')}
                            </label>
                            <input
                                type="file"
                                name="file"
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx"
                                className="w-full bg-transparent border border-transparent hover:border-white focus:border-yellow-500 transition-all outline-none py-2 lg:py-3 text-sm lg:text-base file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-yellow-500 file:text-black hover:file:bg-yellow-400"
                                required
                            />
                            {fileError && <p className="text-red-500 text-xs mt-1">{fileError}</p>}
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="text-red-500 text-sm">
                                {error?.data?.message || t('errorMessage')}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:bg-gray-600 text-black py-3 lg:py-4 rounded font-semibold tracking-wide text-base lg:text-lg transition"
                        >
                            {isLoading ? t('submitting') : t('submit')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApplication;