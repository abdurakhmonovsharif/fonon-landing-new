import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Clock, User, Mail, Phone, Home, FileText, Calendar } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import {useCreateAppointmentMutation, useRequestAppointmentQuery} from "../../../lib/redux/services/appointmentApi.js";
import {useGetLocationsQuery} from "../../../lib/redux/services/locationApi.js";
import {setLanguage} from "../../../lib/redux/slices/languageSlice.js";

const Appointment = () => {
    const dispatch = useDispatch();
    const language = useSelector(state => state.language.current);
    const { data: appointmentsList, isLoading, error } = useRequestAppointmentQuery();
    const { data: locationsList, isLoading: locationsLoading } = useGetLocationsQuery();
    const [createAppointment] = useCreateAppointmentMutation();

    // Form state
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedType, setSelectedType] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedLocationId, setSelectedLocationId] = useState('');
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: '',
        address: '',
        comment: ''
    });

    // Translation helper
    const getLabel = (item, field) => {
        if (!item) return '';
        if (language === 'uz') return item[`${field}Uz`] || item[`${field}En`];
        if (language === 'ru') return item[`${field}Ru`] || item[`${field}En`];
        return item[`${field}En`] || '';
    };

    const translations = {
        en: {
            bookAppointment: 'Book Your Appointment',
            luxuryConsultation: 'Experience luxury jewelry consultation',
            chooseType: 'Choose Appointment Type',
            chooseService: 'Select Service',
            selectDateTime: 'Select Date & Time',
            chooseDate: 'Choose Date',
            availableTimes: 'Available Times',
            yourInfo: 'Your Information',
            reviewAppointment: 'Review Your Appointment',
            serviceDetails: 'Service Details',
            locationTime: 'Location & Time',
            contactInfo: 'Contact Information',
            firstName: 'First Name',
            lastName: 'Last Name',
            emailAddress: 'Email Address',
            phoneNumber: 'Phone Number',
            address: 'Address',
            notes: 'Notes (Optional)',
            previous: 'Previous',
            next: 'Next',
            review: 'Review',
            confirmAppointment: 'Confirm Appointment',
            appointmentBooked: 'Appointment booked successfully!',
            selectRequired: 'Please complete this step',
            loading: 'Loading...',
            error: 'Error loading appointment data'
        },
        uz: {
            bookAppointment: 'Uchrashuvni Buyurtma Qiling',
            luxuryConsultation: 'Hashamatli zargarlik maslahasini olish',
            chooseType: 'Uchrashuvning Turini Tanlang',
            chooseService: 'Xizmatni Tanlang',
            selectDateTime: 'Sana va Vaqtni Tanlang',
            chooseDate: 'Sanani Tanlang',
            availableTimes: 'Mavjud Vaqtlar',
            yourInfo: 'Sizning Ma\'lumotlaringiz',
            reviewAppointment: 'Uchrashuvni Ko\'rib Chiqing',
            serviceDetails: 'Xizmat Tafsilotlari',
            locationTime: 'Joylashuv va Vaqt',
            contactInfo: 'Aloqa Ma\'lumotlari',
            firstName: 'Ismi',
            lastName: 'Familyasi',
            emailAddress: 'Email Manzili',
            phoneNumber: 'Telefon Raqami',
            address: 'Manzil',
            notes: 'Izohlar (Ixtiyoriy)',
            previous: 'Oldingi',
            next: 'Keyingi',
            review: 'Ko\'rib Chiqish',
            confirmAppointment: 'Uchrashuvni Tasdiqlang',
            appointmentBooked: 'Uchrashuvni muvaffaqiyatli belgilandi!',
            selectRequired: 'Iltimos, ushbu bosqichni to\'ldiring',
            loading: 'Yuklanmoqda...',
            error: 'Ma\'lumotlarni yuklashda xato'
        },
        ru: {
            bookAppointment: 'Забронируйте Встречу',
            luxuryConsultation: 'Испытайте консультацию по роскошным украшениям',
            chooseType: 'Выберите Тип Встречи',
            chooseService: 'Выберите Услугу',
            selectDateTime: 'Выберите Дату и Время',
            chooseDate: 'Выберите Дату',
            availableTimes: 'Доступное Время',
            yourInfo: 'Ваша Информация',
            reviewAppointment: 'Просмотрите Встречу',
            serviceDetails: 'Детали Услуги',
            locationTime: 'Местоположение и Время',
            contactInfo: 'Контактная Информация',
            firstName: 'Имя',
            lastName: 'Фамилия',
            emailAddress: 'Адрес Электронной Почты',
            phoneNumber: 'Номер Телефона',
            address: 'Адрес',
            notes: 'Примечания (Опционально)',
            previous: 'Назад',
            next: 'Далее',
            review: 'Просмотр',
            confirmAppointment: 'Подтвердить Встречу',
            appointmentBooked: 'Встреча успешно забронирована!',
            selectRequired: 'Пожалуйста, завершите этот шаг',
            loading: 'Загрузка...',
            error: 'Ошибка при загрузке данных'
        }
    };

    const t = (key) => translations[language]?.[key] || translations.en[key];

    // Get selected appointment type data
    const selectedTypeData = useMemo(() => {
        if (!appointmentsList) return null;
        return appointmentsList.find(type => type.id === selectedType);
    }, [selectedType, appointmentsList]);

    // Get selected service data
    const selectedServiceData = useMemo(() => {
        if (!selectedTypeData) return null;
        return selectedTypeData.services.find(service => service.id === selectedService);
    }, [selectedService, selectedTypeData]);

    // Generate calendar dates
    const generateCalendarDates = () => {
        const dates = [];
        const today = new Date();
        for (let i = 1; i <= 30; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            dates.push(date);
        }
        return dates;
    };

    // Generate time slots based on location hours
    const generateTimeSlots = (openHour = 9, openMin = 0, closeHour = 18, closeMin = 0) => {
        const slots = [];
        const startTime = openHour + openMin / 60;
        const endTime = closeHour + closeMin / 60;
        for (let time = startTime; time <= endTime; time += 0.5) {
            const hours = Math.floor(time);
            const minutes = (time % 1) * 60;
            const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            slots.push(timeString);
        }
        return slots;
    };

    const calendarDates = generateCalendarDates();

    const selectedLocation = useMemo(() => {
        if (!selectedLocationId) return null;
        return locationsList?.find(loc => loc.id === selectedLocationId);
    }, [selectedLocationId, locationsList]);

    const timeSlots = useMemo(() => {
        if (!selectedLocationId) return [];
        if (!selectedLocation) return [];
        const { openTime, closeTime } = selectedLocation;
        const openHour = openTime?.hour ?? 9;
        const openMin = openTime?.minute ?? 0;
        const closeHour = closeTime?.hour ?? 17;
        const closeMin = closeTime?.minute ?? 30;
        return generateTimeSlots(openHour, openMin, closeHour, closeMin);
    }, [selectedLocationId, selectedLocation]);

    const formatTime = (timeObj) => {
        if (!timeObj) return '--:--';
        // Handle string format (e.g., "09:30")
        if (typeof timeObj === 'string') return timeObj;
        // Handle object format
        const hour = (timeObj.hour ?? 0).toString().padStart(2, '0');
        const minute = (timeObj.minute ?? 0).toString().padStart(2, '0');
        return `${hour}:${minute}`;
    };



    const handleNext = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleFormSubmit = async () => {
        // alert(JSON.stringify(selectedServiceData));
        // if (!selectedServiceData || !selectedDate || !selectedTime || !selectedLocation) {
        //     alert(t('selectRequired'));
        //     return;
        // }
        const payload = {
            id: 0,
            type: selectedType,
            titleUz: selectedService.titleUz,
            titleRu: selectedService.titleRu,
            titleEn: selectedService.titleEn,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            services: [
                {
                    id: 0,
                    appointment: selectedService.titleEn, // ✅ string
                    titleUz: selectedService.titleUz,
                    titleRu: selectedService.titleRu,
                    titleEn: selectedService.titleEn,
                    descriptionUz: selectedService.descriptionUz,
                    descriptionRu: selectedService.descriptionRu,
                    descriptionEn: selectedService.descriptionEn,
                    location: {
                        id: selectedLocation.id,
                        nameUz: selectedLocation.nameUz,
                        nameRu: selectedLocation.nameRu,
                        nameEn: selectedLocation.nameEn,
                        mapTag: selectedLocation.mapTag,
                        openTime: {
                            hour: parseInt(selectedLocation.openTime.split(':')[0]),
                            minute: parseInt(selectedLocation.openTime.split(':')[1]),
                            second: 0,
                            nano: 0,
                        },
                        closeTime: {
                            hour: parseInt(selectedLocation.closeTime.split(':')[0]),
                            minute: parseInt(selectedLocation.closeTime.split(':')[1]),
                            second: 0,
                            nano: 0,
                        },
                        workDays: selectedLocation.workDays || [],
                        address: selectedLocation.address,
                        images: selectedLocation.images || [],
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString(),
                        services: ["string"], // ✅ per Swagger: string array
                    },
                    date: selectedDate,
                    time: {
                        hour: parseInt(selectedTime.split(':')[0]),
                        minute: parseInt(selectedTime.split(':')[1]),
                        second: 0,
                        nano: 0,
                    },
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                    client: {
                        id: 0,
                        service: selectedService.titleEn, // ✅ string
                        firstname: formData.firstname,
                        lastname: formData.lastname,
                        email: formData.email,
                        phoneNumber: formData.phoneNumber,
                        address: formData.address,
                        comment: formData.comment,
                        createdAt: new Date().toISOString(),
                    },
                },
            ],
        };



        console.log("Submitting appointment:", payload);

        try {
            await createAppointment(payload).unwrap();
            alert(t('appointmentBooked'));

            // Reset all fields
            setCurrentStep(1);
            setSelectedType('');
            setSelectedService('');
            setSelectedDate('');
            setSelectedTime('');
            setSelectedLocationId('');
            setFormData({
                firstname: '',
                lastname: '',
                email: '',
                phoneNumber: '',
                address: '',
                comment: ''
            });
        } catch (err) {
            console.error('Appointment booking failed:', err);
        }
    };


    if (isLoading) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <p className="text-xl">{t('loading')}</p>
            </div>
        );
    }

    if (error || !appointmentsList) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <p className="text-xl text-red-500">{error?.message || t('error')}</p>
            </div>
        );
    }

    // Group appointmentsList by type
    const appointmentsByType = {
        personality: appointmentsList.filter(item => item.type === 'personality'),
        store: appointmentsList.filter(item => item.type === 'store')
    };

    return (
        <div className="min-h-screen bg-black/40 text-white p-5">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <div className="text-center flex-1">
                        <h1 className="text-4xl font-light mb-2 text-yellow-400">{t('bookAppointment')}</h1>
                        <p className="text-gray-400 py-3">{t('luxuryConsultation')}</p>
                    </div>
                    <div className="flex gap-2">
                        {['en', 'uz', 'ru'].map((lang) => (
                            <button
                                key={lang}
                                onClick={() => dispatch(setLanguage(lang))}
                                className={`px-3 py-2 rounded-lg transition-colors ${
                                    language === lang
                                        ? 'bg-yellow-400 text-black'
                                        : 'bg-gray-700 hover:bg-gray-600'
                                }`}
                            >
                                {lang.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mb-8">
                    <div className="flex space-x-2">
                        {[1, 2, 3, 4].map((step) => (
                            <div
                                key={step}
                                className={`w-3 h-3 my-3 mx-2 ${
                                    step <= currentStep ? 'bg-yellow-400' : 'bg-gray-700'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {currentStep === 1 && (
                    <div className="fade-in">
                        <h2 className="text-2xl font-light mb-8 text-center">{t('chooseType')}</h2>
                        <div className="grid md:grid-cols-2 gap-6 my-4">
                            {['personality', 'store'].map((typeKey) => (
                                <button
                                    key={typeKey}
                                    onClick={() => {
                                        setSelectedType(typeKey);
                                        setSelectedService('');
                                    }}
                                    className={`p-3 text-center border transition-all duration-300 text-left hover:bg-black/20 ${
                                        selectedType === typeKey
                                            ? 'bg-black/20 border-yellow-400'
                                            : 'border-gray-700 hover:border-yellow-400/50'
                                    }`}
                                >
                                    <h3 className="text-xl font-medium mb-2 capitalize">{typeKey}</h3>
                                </button>
                            ))}
                        </div>

                        {selectedType && (
                            <div className="fade-in">
                                <h2 className="text-2xl font-light my-3 text-center">{t('chooseService')}</h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                    {appointmentsByType[selectedType].map((appointment) => (
                                        <button
                                            key={appointment.id}
                                            onClick={() => setSelectedService(appointment)}
                                            className={`p-3 border transition-all duration-300 text-left hover:bg-black/20 w-full ${
                                                selectedService?.id === appointment.id
                                                    ? 'bg-black/20 border-yellow-400'
                                                    : 'border-gray-700 hover:border-yellow-400/50'
                                            }`}
                                        >
                                            <h4 className="font-medium mb-2">{getLabel(appointment, 'title')}</h4>
                                            {appointment.services && appointment.services.length > 0 && (
                                                <div className="space-y-2">
                                                    {appointment.services.map((service) => (
                                                        <div key={service.id} className="text-sm">
                                                            <p className="text-gray-400">{getLabel(service, 'title')}</p>
                                                            <p className="text-xs text-gray-500">{getLabel(service, 'description')}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}


                        {selectedType && selectedService && (
                            <div className="text-center">
                                <button
                                    onClick={handleNext}
                                    className="bg-yellow-400 text-black px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors duration-300 my-4 w-40 h-15"
                                >
                                    {t('next')}
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="fade-in">
                        <h2 className="text-2xl font-light mb-8 text-center">{t('selectLocation')}</h2>
                        <div className="grid md:grid-cols-3 gap-6 my-4 mb-8">
                            {locationsList?.map((location) => (
                                <button
                                    key={location.id}
                                    onClick={() => {
                                        setSelectedLocationId(location.id);
                                        setSelectedDate('');
                                        setSelectedTime('');
                                    }}

                                    className={`p-4 border transition-all duration-300 text-left hover:bg-black/20 ${
                                        selectedLocation?.id === location.id
                                            ? 'bg-black/20 border-yellow-400'
                                            : 'border-gray-700 hover:border-yellow-400/50'
                                    }`}
                                >
                                    <h4 className="font-medium mb-2">{getLabel(location, 'name')}</h4>
                                    <div className="flex items-start text-sm text-gray-400 mb-2">
                                        <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                                        {location.address}
                                    </div>
                                    <div className="flex items-center text-xs text-gray-400">
                                        <Clock className="w-3 h-3 mr-2" />
                                        {formatTime(location.openTime)} - {formatTime(location.closeTime)}
                                    </div>
                                </button>
                            ))}
                        </div>


                        {selectedLocation && (
                            <div className="fade-in">
                                <h2 className="text-2xl font-light mb-8 text-center">{t('selectDateTime')}</h2>
                                <div className="grid lg:grid-cols-2 gap-8">
                                    <div className="p-6">
                                        <h3 className="text-lg font-medium mb-4 flex items-center">
                                            <Calendar className="w-5 h-5 mr-2" />
                                            {t('chooseDate')}
                                        </h3>
                                        <div className="grid grid-cols-7 gap-2">
                                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                                <div key={day} className="text-center text-sm text-gray-400 p-2">
                                                    {day}
                                                </div>
                                            ))}
                                            {calendarDates.slice(0, 21).map((date) => (
                                                <button
                                                    key={date.toISOString()}
                                                    onClick={() => setSelectedDate(date.toISOString().split('T')[0])}
                                                    className={`p-2 text-sm rounded transition-all duration-200 ${
                                                        selectedDate === date.toISOString().split('T')[0]
                                                            ? 'bg-yellow-400 text-black'
                                                            : 'bg-gray-800 hover:bg-gray-700'
                                                    }`}
                                                >
                                                    {date.getDate()}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {selectedDate && (
                                        <div className="fade-in p-6">
                                            <h3 className="text-lg font-medium mb-4 flex items-center">
                                                <Clock className="w-5 h-5 mr-2" />
                                                {t('availableTimes')}
                                            </h3>
                                            <div className="max-h-80 overflow-y-auto">
                                                <div className="grid grid-cols-2 gap-2">
                                                    {timeSlots.map((time) => (
                                                        <button
                                                            key={time}
                                                            onClick={() => setSelectedTime(time)}
                                                            className={`p-3 text-sm rounded transition-all duration-200 ${
                                                                selectedTime === time
                                                                    ? 'bg-yellow-400 text-black'
                                                                    : 'bg-gray-800 hover:bg-gray-700'
                                                            }`}
                                                        >
                                                            {time}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {selectedLocation && selectedDate && selectedTime && (
                            <div className="flex justify-center space-x-4 mt-8">
                                <button
                                    onClick={handlePrev}
                                    className="flex items-center justify-center px-6 py-3 min-w-[150px] border border-gray-700 rounded-lg hover:border-yellow-400 transition-colors"
                                >
                                    <ChevronLeft className="w-4 h-4 mr-2" />
                                    {t('previous')}
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="flex items-center justify-center px-6 py-3 min-w-[150px] bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-colors"
                                >
                                    {t('next')}
                                    <ChevronRight className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="fade-in">
                        <h2 className="text-2xl font-light mb-8 text-center">{t('yourInfo')}</h2>
                        <div className="max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { key: 'firstname', label: t('firstName'), icon: User },
                                    { key: 'lastname', label: t('lastName'), icon: User },
                                    { key: 'email', label: t('emailAddress'), icon: Mail, type: 'email' },
                                    { key: 'phoneNumber', label: t('phoneNumber'), icon: Phone, type: 'tel' }
                                ].map(({ key, label, icon: Icon, type = 'text' }) => (
                                    <div key={key} className="p-6">
                                        <label className="block text-sm font-medium mb-2 flex items-center">
                                            <Icon className="w-4 h-4 mr-2" />
                                            {label}
                                        </label>
                                        <input
                                            type={type}
                                            value={formData[key]}
                                            onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                                            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none"
                                        />
                                    </div>
                                ))}
                                <div className="md:col-span-2 p-6">
                                    <label className="block text-sm font-medium mb-2 flex items-center">
                                        <Home className="w-4 h-4 mr-2" />
                                        {t('address')}
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none"
                                    />
                                </div>
                                <div className="md:col-span-2 p-6">
                                    <label className="block text-sm font-medium mb-2 flex items-center">
                                        <FileText className="w-4 h-4 mr-2" />
                                        {t('notes')}
                                    </label>
                                    <textarea
                                        value={formData.comment}
                                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                        rows={4}
                                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none resize-none"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={handlePrev}
                                    className="flex-1 flex items-center justify-center px-6 py-3 border border-gray-700 rounded-lg hover:border-yellow-400 transition-colors"
                                >
                                    <ChevronLeft className="w-4 h-4 mr-2" />
                                    {t('previous')}
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={!formData.firstname || !formData.lastname || !formData.email || !formData.phoneNumber}
                                    className="flex-1 flex items-center justify-center bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {t('review')}
                                    <ChevronRight className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {currentStep === 4 && (
                    <div className="fade-in">
                        <h2 className="text-2xl font-light my-3 text-center">{t('reviewAppointment')}</h2>
                        <div className="max-w-3xl mx-auto">
                            <div className="grid gap-6 my-3">
                                <div className="p-3 rounded-lg border border-gray-700">
                                    <h3 className="text-lg font-medium mb-2 text-yellow-400">{t('serviceDetails')}</h3>
                                    <p className="text-gray-300">{getLabel(selectedTypeData, 'title')}</p>
                                    <p className="text-gray-400">{getLabel(selectedServiceData, 'title')}</p>
                                    <p className="text-sm text-gray-500 mt-1">{getLabel(selectedServiceData, 'description')}</p>
                                </div>

                                <div className="p-3 rounded-lg border border-gray-700">
                                    <h3 className="text-lg font-medium mb-2 text-yellow-400">{t('locationTime')}</h3>
                                    <p className="text-gray-300">{getLabel(selectedLocation, 'name')}</p>
                                    <p className="text-sm text-gray-400">{selectedLocation?.address}</p>
                                    <p className="text-gray-400 mt-2">{selectedDate} at {selectedTime}</p>
                                </div>

                                <div className="p-3 rounded-lg border border-gray-700">
                                    <h3 className="text-lg font-medium mb-2 text-yellow-400">{t('contactInfo')}</h3>
                                    <p className="text-gray-300">{formData.firstname} {formData.lastname}</p>
                                    <p className="text-gray-400">{formData.email}</p>
                                    <p className="text-gray-400">{formData.phoneNumber}</p>
                                    <p className="text-gray-400">{formData.address}</p>
                                    {formData.comment && <p className="text-gray-400 mt-2 italic">"{formData.comment}"</p>}
                                </div>
                            </div>

                            <div className="flex justify-center gap-4 mt-8">
                                <button
                                    onClick={handlePrev}
                                    className="flex-1 flex items-center justify-center px-6 py-3 border border-gray-700 rounded-lg hover:border-yellow-400 transition-colors"
                                >
                                    <ChevronLeft className="w-4 h-4 mr-2" />
                                    {t('previous')}
                                </button>
                                <button
                                    onClick={handleFormSubmit}
                                    className="flex-1 flex items-center justify-center bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors font-medium"
                                >
                                    {t('confirmAppointment')}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
                .fade-in {
                    animation: fadeIn 0.5s ease-in-out;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default Appointment;