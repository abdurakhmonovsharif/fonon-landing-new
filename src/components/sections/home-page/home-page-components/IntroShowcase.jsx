import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import { useSelector } from 'react-redux';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const translations = {
    en: {
        fononEliteCollection: 'FONON ELITE COLLECTION',
        collectionDescription: 'Our collections embody the perfect harmony of elegance and craftsmanship, each piece designed with exquisite attention to detail. Every creation carries a unique story, inspired by both timeless classics and contemporary artistry. Whether you seek a refined jewel to celebrate life\'s special moments or a touch of brilliance to elevate your everyday style, you\'ll find a design in the Fonon Collection that truly reflects you.',
        discoverDetails: 'Discover the Details',
        search: 'SEARCH',
    },
    uz: {
        fononEliteCollection: 'FONON ELITE KOLLEKSIYASI',
        collectionDescription: 'Bizning kolleksiyalari nafislik va san\'atkarning mukammal uyg\'unligini ifodalaydi, har bir buyum ehtiyotkorlik bilan ishlab chiqilgan. Har bir ijod tarixiy klassiklar va zamonaviy san\'atdan ilhomlanib, o\'ziga xos hikoya ko\'taradi. Siz hayotning maxsus lahazimlari selebrate qilish uchun sof zinatlarga yoki kundalik uslubingizni ko\'tarish uchun limonning qamchisiga Fonon Kolleksiyasida siz haqiqatan ham sizni aks ettiruvchi designni topasiz.',
        discoverDetails: 'Tafsilotlarni kashf qiling',
        search: 'IZLASH',
    },
    ru: {
        fononEliteCollection: 'ЭЛИТНАЯ КОЛЛЕКЦИЯ FONON',
        collectionDescription: 'Наши коллекции воплощают идеальную гармонию элегантности и мастерства, каждое изделие разработано с тщательным вниманием к деталям. Каждое творение несет в себе уникальную историю, вдохновленную как вневременной классикой, так и современным искусством. Ищете ли вы изысканное украшение для особых моментов жизни или блеск, чтобы улучшить ваш повседневный стиль, вы найдете дизайн в коллекции Fonon, который действительно отражает вас.',
        discoverDetails: 'Откройте детали',
        search: 'ПОИСК',
    },
};

const IntroShowcase = () => {
    const language = useSelector(state => state.language.current);
    const t = (key) => translations[language][key] || translations.en[key];

    const items = [
        {title: t('discoverDetails'), icon: "flaticon-ring", bg: "/assets/img/intro-showcase/01.png"},
        {title: t('discoverDetails'), icon: "flaticon-bracelet-2", bg: "/assets/img/intro-showcase/02.png"},
        {title: t('discoverDetails'), icon: "flaticon-necklace", bg: "/assets/img/intro-showcase/03.png"},
        {title: t('discoverDetails'), icon: "flaticon-diamond", bg: "/assets/img/intro-showcase/04.png"},
        {title: t('discoverDetails'), icon: "flaticon-ring", bg: "/assets/img/intro-showcase/05.png"},
        {title: t('discoverDetails'), icon: "flaticon-bracelet-2", bg: "/assets/img/intro-showcase/06.png"},
        {title: t('discoverDetails'), icon: "flaticon-necklace", bg: "/assets/img/intro-showcase/07.png"},
        {title: t('discoverDetails'), icon: "flaticon-ring", bg: "/assets/img/intro-showcase/09.png"},
    ];

    return (
        <section className="condos-overlay-sec pt-12 md:pt-20 lg:pt-[115px] pb-3 md:pb-24 lg:pb-[155px] bg-black/100 relative overflow-hidden">
            <img
                src="/assets/img/intro-showcase/jewellery-bg-image.png"
                alt=""
                className="hidden lg:block absolute top-20 right-10 w-1/5 p-5 max-w-xs opacity-30 rotate-45 pointer-events-none select-none"
            />

            <img
                src="/assets/img/intro-showcase/jewellery-bg-image.png"
                alt=""
                className="hidden lg:block absolute top-50 left-10 w-1/3 p-5 max-w-xs opacity-30 rotate-320 pointer-events-none select-none"
            />

            <img
                src="/assets/img/intro-showcase/bgdoku.png"
                alt="asdasd"
                className="hidden md:block absolute top-0 left-10 h-full p-5 max-w-xs pointer-events-none select-none opacity-50 md:opacity-100"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="section-title text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16 space-y-4 md:space-y-6 px-4">

                    <section className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-semibold tracking-wide text-yellow-300 leading-tight">
                        {t('fononEliteCollection')}
                    </section>

                    <div className="section-title-icon flex justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            width={30}
                            height={30}
                            viewBox="0 0 512 512"
                            fill="white"
                            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-[45px] lg:h-[45px]"
                        >
                            <path
                                d="M369.853,250.251l-100-241C267.53,3.65,262.062,0,255.999,0s-11.531,3.65-13.854,9.251l-100,241c-1.527,3.681-1.527,7.817,0,11.498l100,241c2.323,5.601,7.791,9.251,13.854,9.251s11.531-3.65,13.854-9.251l100-241C371.381,258.068,371.381,253.932,369.853,250.251z M255.999,457.861L172.239,256l83.76-201.861L339.759,256L255.999,457.861z"/>
                        </svg>
                    </div>

                    <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed px-2 md:px-0">
                        {t('collectionDescription')}
                    </p>

                    <div className="py-2 md:py-4">
                        <button
                            className="m-6 py-3 px-5 text-lg font-medium text-white bg-yellow-400 shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
                        >
                            {t('search')}
                        </button>
                    </div>
                </div>

                <div className="w-full py-6 md:py-10">
                    <Swiper
                        spaceBetween={24}
                        slidesPerView={4}
                        modules={[Autoplay]}
                        navigation
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{clickable: true}}
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 12
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 18
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 24
                            },
                        }}

                        className="px-6"
                    >
                        {items.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-center group">

                                    <div
                                        className="relative w-full h-64 sm:h-72 md:h-80 lg:h-80 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105">
                                        <img
                                            src={item.bg}
                                            alt={item.title}
                                            className="absolute top-0 left-0 h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                                        />
                                        <div
                                            className="absolute inset-0 bg-black/25 transition-all duration-300 group-hover:bg-black/40"/>
                                    </div>

                                    <button
                                        className="mt-4 md:mt-6 p-3 md:p-4 text-base md:text-lg lg:text-xl font-semibold rounded-2xl md:rounded-3xl bg-white/20 backdrop-blur-sm text-white shadow-lg transition-all duration-300 hover:bg-white/40 hover:text-black hover:scale-105">
                                        {item.title}
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default IntroShowcase;