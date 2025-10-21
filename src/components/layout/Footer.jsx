import { useSelector } from "react-redux";
import {useGetContactsQuery} from "../../lib/redux/services/callCenterApi.js";

const translations = {
    en: {
        storeLocator: 'Store Locator',
        clientCare: 'Client Care',
        bookAppointment: 'Book an Appointment',
        contactUs: 'Contact Us.',
        phoneNumber: 'Phone Number',
        emailAddress: 'Email Address',
        officeAddress: 'Office Address',
        loading: 'Loading...',
        phoneNotAvailable: 'Phone not available',
        emailNotAvailable: 'Email not available',
        addressNotAvailable: 'Address not available',
        copyrightText: 'Copyright By@',
        copyrightYear: '- 2022',
        termsOfUse: 'Terms of use',
        privacyPolicy: 'Privacy Environmental Policy',
    },
    uz: {
        storeLocator: 'Do\'kon lokatsiyasi',
        clientCare: 'Kliyent xizmati',
        bookAppointment: 'Uchrashuvni band qiling',
        contactUs: 'Biz bilan bog\'lanish.',
        phoneNumber: 'Telefon raqami',
        emailAddress: 'Email manzili',
        officeAddress: 'Ofis manzili',
        loading: 'Yuklanmoqda...',
        phoneNotAvailable: 'Telefon mavjud emas',
        emailNotAvailable: 'Email mavjud emas',
        addressNotAvailable: 'Manzil mavjud emas',
        copyrightText: 'Mualliflik huquqi',
        copyrightYear: '- 2022',
        termsOfUse: 'Foydalanish shartlari',
        privacyPolicy: 'Maxfiylik va Atrof-muhit siyosati',
    },
    ru: {
        storeLocator: 'Поиск магазина',
        clientCare: 'Обслуживание клиентов',
        bookAppointment: 'Забронировать встречу',
        contactUs: 'Свяжитесь с нами.',
        phoneNumber: 'Номер телефона',
        emailAddress: 'Адрес электронной почты',
        officeAddress: 'Адрес офиса',
        loading: 'Загрузка...',
        phoneNotAvailable: 'Телефон недоступен',
        emailNotAvailable: 'Email недоступен',
        addressNotAvailable: 'Адрес недоступен',
        copyrightText: 'Авторское право',
        copyrightYear: '- 2022',
        termsOfUse: 'Условия использования',
        privacyPolicy: 'Политика конфиденциальности и окружающей среды',
    },
};

const Footer = () => {
    const language = useSelector(state => state.language.current);
    const t = (key) => translations[language][key] || translations.en[key];
    const { data: contacts, isLoading, error } = useGetContactsQuery();

    // Get the first contact from API
    const contact = contacts?.[0];

    // Format phone number with + prefix if not already present
    const formatPhoneNumber = (phone) => {
        if (!phone) return t('phoneNotAvailable');
        return phone.startsWith("+") ? phone : `+${phone}`;
    };

    // Map platform names to FontAwesome icons
    const getSocialIcon = (platform) => {
        const platformLower = platform.toLowerCase();
        const iconMap = {
            facebook: "fab fa-facebook-f",
            twitter: "fab fa-twitter",
            telegram: "fab fa-telegram",
            instagram: "fab fa-instagram",
            linkedin: "fab fa-linkedin-in",
            youtube: "fab fa-youtube",
            tiktok: "fab fa-tiktok",
        };
        return iconMap[platformLower] || "fab fa-link";
    };

    return (
        <>
            <footer
                className="footer-two bg-black/80"
                style={{
                    backgroundImage: 'url("/assets/img/icon/pattern-01.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="footer-widget-area pt-100 pb-50 ">
                    <div className="container">
                        <div className="row flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
                            <div className="col-lg-3 col-sm-6 order-1 w-full lg:w-auto">
                                <div className="widget site-info-widget mb-50 w-full text-center lg:text-left">
                                    <div className="footer-logo mb-50 flex justify-center lg:justify-start">
                                        <img
                                            src="/assets/img/footer-logo.png"
                                            alt="Logo"
                                            className="max-w-[200px] lg:max-w-full"
                                        />
                                    </div>

                                    <div className="flex flex-col items-center lg:items-start justify-center gap-3 font-medium">
                                        <a
                                            href="#"
                                            className="hover:!text-gray-400 !text-white transition-colors duration-300"
                                        >
                                            {t('storeLocator')}
                                        </a>
                                        <a
                                            href="#"
                                            className="hover:!text-gray-400 !text-white transition-colors duration-300"
                                        >
                                            {t('clientCare')}
                                        </a>
                                        <a
                                            href="#"
                                            className="hover:!text-gray-400 !text-white transition-colors duration-300"
                                        >
                                            {t('bookAppointment')}
                                        </a>
                                    </div>

                                    <div className="social-links mt-40 flex justify-center lg:justify-start gap-3">
                                        {contact?.socialLinks && contact.socialLinks.length > 0 ? (
                                            contact.socialLinks.map((social, index) => (
                                                <a
                                                    key={index}
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 flex items-center justify-center hover:text-yellow-400 transition-colors duration-300"
                                                >
                                                    <i className={getSocialIcon(social.platform)} />
                                                </a>
                                            ))
                                        ) : (
                                            <>
                                                <a href="#" className="w-10 h-10 flex items-center justify-center">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                                <a href="#" className="w-10 h-10 flex items-center justify-center">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                                <a href="#" className="w-10 h-10 flex items-center justify-center">
                                                    <i className="fab fa-telegram" />
                                                </a>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 order-2 order-lg-3 w-full lg:w-auto">
                                <div className="widget contact-widget mb-50 text-center lg:text-left">
                                    <h4 className="widget-title text-xl lg:text-2xl">{t('contactUs')}</h4>
                                    <div className="contact-lists space-y-4">
                                        <div className="contact-box flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-4">
                                            <div className="icon flex-shrink-0">
                                                <i className="flaticon-phone" />
                                            </div>
                                            <div className="desc text-center lg:text-left">
                                                <h6 className="title text-base lg:text-lg">{t('phoneNumber')}</h6>
                                                <span className="text-sm lg:text-base">
                                                    {isLoading ? t('loading') : formatPhoneNumber(contact?.phoneNumber)}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="contact-box flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-4">
                                            <div className="icon flex-shrink-0">
                                                <i className="flaticon-message" />
                                            </div>
                                            <div className="desc text-center lg:text-left">
                                                <h6 className="title text-base lg:text-lg">{t('emailAddress')}</h6>
                                                <span className="text-sm lg:text-base">
                                                    {isLoading ? t('loading') : contact?.email || t('emailNotAvailable')}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="contact-box flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-4">
                                            <div className="icon flex-shrink-0">
                                                <i className="flaticon-location-pin" />
                                            </div>
                                            <div className="desc text-center lg:text-left">
                                                <h6 className="title text-base lg:text-lg">{t('officeAddress')}</h6>
                                                <span className="text-sm lg:text-base">
                                                    {isLoading ? t('loading') : contact?.address || t('addressNotAvailable')}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area pt-30 pb-30">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-5 order-2 order-md-1">
                                <p className="copyright-text copyright-two">
                                    {t('copyrightText')}@<a href="#">Example</a> {t('copyrightYear')}
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-7 order-1 order-md-2">
                                <div className="footer-menu text-center text-md-right">
                                    <ul>
                                        <li>
                                            <a href="#">{t('termsOfUse')}</a>
                                        </li>
                                        <li>
                                            <a href="#">{t('privacyPolicy')}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;