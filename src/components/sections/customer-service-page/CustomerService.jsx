import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const translations = {
    en: {
        customerService: "Customer Service",
        faq: "FAQ",
        sizeGuide: "Size Guide",
        customization: "Customization",
        productCare: "Product Care",
        perfectFitGuide: "Perfect Fit Guide",
        perfectFitDesc: "Discover your ideal size with our detailed sizing charts and measurement guides.",

        faqItems: [
            {
                title: "Which store has the widest assortment?",
                description: "All our branches feature a wide range of jewelry, and our managers will gladly help you choose the perfect piece."
            },
            {
                title: "Do showrooms close for lunch breaks?",
                description: "No, our showrooms are open every day without breaks. You can visit anytime convenient for you."
            },
            {
                title: "Is repair service available in the showrooms?",
                description: "Yes, we offer repair and cleaning services for jewelry made at the Fonon factory. Cleaning is free for Fonon customers (available in Tashkent only)."
            },
            {
                title: "Do official store prices differ?",
                description: "All official Fonon showrooms have fixed and identical prices for jewelry."
            },
            {
                title: "Is delivery service available?",
                description: "You can choose your favorite jewelry from our website and leave a request online."
            }
        ],

        customizationItems: [
            {
                title: "About personalization service",
                description: "Fonon offers you the opportunity to create jewelry designs according to your personal preferences."
            },
            {
                title: "Personalized design experience",
                description: "At Fonon, we offer a unique design experience to make your jewelry dreams come true."
            },
            {
                title: "Handcrafted excellence",
                description: "Our master artisans carefully handcraft each piece with perfection and care."
            },
            {
                title: "Contact us",
                description: "Get in touch today to turn your dream jewelry into reality."
            }
        ],

        productCareItems: [
            {
                title: "Precious stones:",
                points: [
                    { pointTitle: "Cleaning", pointDesc: "Clean the stones regularly to maintain their shine." },
                    { pointTitle: "Protection", pointDesc: "Store each jewelry item in a separate box." },
                    { pointTitle: "Caution", pointDesc: "Avoid contact with chemicals." }
                ]
            },
            {
                title: "Gold:",
                points: [
                    { pointTitle: "Care", pointDesc: "Wipe gently with a soft cloth after each use." },
                    { pointTitle: "Storage", pointDesc: "Keep gold jewelry away from humidity." },
                    { pointTitle: "Maintenance", pointDesc: "Use only professional cleaning solutions." }
                ]
            },
            {
                title: "Pearls:",
                points: [
                    { pointTitle: "Gentle Cleaning", pointDesc: "Wipe them with a soft, damp cloth." },
                    { pointTitle: "Storage", pointDesc: "Keep them in a soft pouch or separate space." },
                    { pointTitle: "Caution", pointDesc: "Avoid contact with perfumes or sprays." }
                ]
            }
        ]
    },

    uz: {
        customerService: "Mijozlarga xizmat",
        faq: "Ko'p so'raladigan savollar",
        sizeGuide: "O'lchamlar bo'yicha qo'llanma",
        customization: "Moslashtirish",
        productCare: "Mahsulotga g'amxo'rlik",
        perfectFitGuide: "Mukammal o'lcham qo'llanmasi",
        perfectFitDesc: "Batafsil o'lchov jadvallari yordamida o'zingizga mos o'lchamni toping.",

        faqItems: [
            {
                title: "Qaysi do’konda assortiment kattaroq?",
                description: "Har bir filialimizda keng assortiment mavjud, menejerlar sizga mos buyumni tanlashda yordam berishadi."
            },
            {
                title: "Shourumlarda tushlik tanaffusi bormi?",
                description: "Yo‘q, shourumlar har kuni tanaffussiz ishlaydi. Siz istalgan paytda tashrif buyurishingiz mumkin."
            },
            {
                title: "Shourumlarda ta’mirlash xizmati bormi?",
                description: "Ha, bizda Fonon zavodida ishlab chiqarilgan buyumlar uchun ta’mirlash va tozalash xizmati mavjud (faqat Toshkentda). Tozalash Fonon mijozlari uchun bepul."
            },
            {
                title: "Rasmiy do’konlarda narxlar farqlanadimi?",
                description: "FONONning barcha rasmiy shourumlarida narxlar bir xil belgilangan."
            },
            {
                title: "Yetkazib berish xizmati bormi?",
                description: "Siz bizning saytimizda yoqqan zargarlik buyumini tanlab, ariza qoldirishingiz mumkin."
            }
        ],

        customizationItems: [
            {
                title: "Shaxsiylashtirish xizmati haqida",
                description: "Fonon sizga xohlagan dizayndagi zargarlik buyumlarini yaratish imkoniyatini beradi."
            },
            {
                title: "Shaxsiy dizayn tajribasi",
                description: "Fonon sizga orzudagi zargarlikni yaratish imkonini beruvchi dizayn tajribasini taklif qiladi."
            },
            {
                title: "Qo‘lda yasalgan mukammallik",
                description: "Ustalarimiz har bir buyumni mukammallik bilan qo‘lda yasashadi."
            },
            {
                title: "Biz bilan bog‘laning",
                description: "Orzuyingizdagi zargarlikni haqiqatga aylantirish uchun bugunoq biz bilan bog‘laning."
            }
        ],

        productCareItems: [
            {
                title: "Qimmatbaho toshlar:",
                points: [
                    { pointTitle: "Tozalash", pointDesc: "Toshlarni muntazam tozalang, ularning yorqinligini saqlang." },
                    { pointTitle: "Himoya", pointDesc: "Har bir zargarlik buyumini alohida qutida saqlang." },
                    { pointTitle: "Ehtiyotkorlik", pointDesc: "Kimyoviy moddalar bilan aloqa qilishdan saqlaning." }
                ]
            },
            {
                title: "Oltin:",
                points: [
                    { pointTitle: "Parvarish", pointDesc: "Har safar ishlatgandan so‘ng yumshoq mato bilan arting." },
                    { pointTitle: "Saqlash", pointDesc: "Oltin buyumlarni namlikdan uzoq joyda saqlang." },
                    { pointTitle: "Tozalash", pointDesc: "Faqat professional vositalardan foydalaning." }
                ]
            },
            {
                title: "Marvaridlar:",
                points: [
                    { pointTitle: "Yumshoq tozalash", pointDesc: "Nam yumshoq mato bilan artib turing." },
                    { pointTitle: "Saqlash", pointDesc: "Ularni yumshoq qopda yoki alohida joyda saqlang." },
                    { pointTitle: "Ehtiyotkorlik", pointDesc: "Atir va purkagichlardan uzoq tuting." }
                ]
            }
        ]
    },

    ru: {
        customerService: "Обслуживание клиентов",
        faq: "Часто задаваемые вопросы",
        sizeGuide: "Руководство по размерам",
        customization: "Персонализация",
        productCare: "Уход за изделием",
        perfectFitGuide: "Идеальное руководство по размеру",
        perfectFitDesc: "Найдите свой идеальный размер с помощью наших таблиц и советов по измерению.",

        faqItems: [
            {
                title: "В каком магазине самый большой ассортимент?",
                description: "Во всех наших филиалах представлен широкий выбор украшений, менеджеры помогут вам выбрать идеальное изделие."
            },
            {
                title: "Есть ли перерыв на обед в шоурумах?",
                description: "Нет, шоурумы работают ежедневно без перерыва. Вы можете прийти в любое удобное время."
            },
            {
                title: "Есть ли в шоурумах услуга ремонта?",
                description: "Да, предоставляется услуга ремонта и чистки изделий, произведенных на заводе Fonon (только в Ташкенте). Чистка для клиентов Fonon — бесплатно."
            },
            {
                title: "Различаются ли цены в официальных магазинах?",
                description: "Во всех официальных шоурумах Fonon цены одинаковые."
            },
            {
                title: "Доступна ли услуга доставки?",
                description: "Вы можете выбрать понравившееся украшение на нашем сайте и оставить заявку онлайн."
            }
        ],

        customizationItems: [
            {
                title: "О персонализации",
                description: "Fonon предоставляет возможность создавать украшения по вашему собственному дизайну."
            },
            {
                title: "Индивидуальный дизайн",
                description: "Мы предлагаем уникальный опыт создания украшений, чтобы воплотить ваши мечты в реальность."
            },
            {
                title: "Ручная работа",
                description: "Наши мастера вручную создают каждое изделие с точностью и вниманием."
            },
            {
                title: "Свяжитесь с нами",
                description: "Свяжитесь с нами сегодня, чтобы воплотить мечту в реальность."
            }
        ],

        productCareItems: [
            {
                title: "Драгоценные камни:",
                points: [
                    { pointTitle: "Чистка", pointDesc: "Регулярно очищайте камни, чтобы сохранить их блеск." },
                    { pointTitle: "Хранение", pointDesc: "Храните каждое украшение в отдельной коробке." },
                    { pointTitle: "Осторожность", pointDesc: "Избегайте контакта с химическими веществами." }
                ]
            },
            {
                title: "Золото:",
                points: [
                    { pointTitle: "Уход", pointDesc: "Протирайте мягкой тканью после каждого использования." },
                    { pointTitle: "Хранение", pointDesc: "Держите золото вдали от влажности." },
                    { pointTitle: "Чистка", pointDesc: "Используйте только профессиональные чистящие средства." }
                ]
            },
            {
                title: "Жемчуг:",
                points: [
                    { pointTitle: "Мягкая чистка", pointDesc: "Протирайте влажной мягкой тканью." },
                    { pointTitle: "Хранение", pointDesc: "Храните отдельно или в мягком мешочке." },
                    { pointTitle: "Осторожность", pointDesc: "Держите подальше от духов и спреев." }
                ]
            }
        ]
    }
};

const CustomerService = () => {
    const [activeTab, setActiveTab] = useState(0);
    const language = useSelector((state) => state.language.current);
    const t = (key) => translations[language][key] || translations.en[key];

    const serviceData = [
        { id: 0, label: t('faq'), content: t('faqItems') },
        { id: 1, label: t('sizeGuide'), title: t('perfectFitGuide'), description: t('perfectFitDesc') },
        { id: 2, label: t('customization'), content: t('customizationItems') },
        { id: 3, label: t('productCare'), content: t('productCareItems') }
    ];

    return (
        <div className="min-h-screen bg-black text-white pt-36">
            <div className="container mx-auto px-6 py-12">
                <div className="text-center py-5">
                    <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-2">{t('customerService')}</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Sidebar Tabs */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-40 space-y-4">
                            {serviceData.map((item, index) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(index)}
                                    className={`w-full text-left px-3 py-4 transition-colors duration-300 ${
                                        activeTab === index
                                            ? 'bg-black/30 text-yellow-400'
                                            : 'bg-black/40 text-gray-300 hover:bg-black/30 hover:text-yellow-400'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-2">
                        <div className="bg-none backdrop-blur-sm p-8 min-h-[400px]">
                            {serviceData[activeTab].content ? (
                                <div className="space-y-8">
                                    {serviceData[activeTab].content.map((c, idx) => (
                                        <div key={idx}>
                                            {c.title && <h3 className="text-2xl font-semibold mb-2 text-yellow-400">{c.title}</h3>}
                                            {c.description && <p className="text-gray-300 leading-relaxed mb-4">{c.description}</p>}
                                            {c.points && (
                                                <ul className="list-disc list-inside space-y-2 text-gray-400 pb-4">
                                                    {c.points.map((p, i) => (
                                                        <li key={i}>
                                                            <span className="font-medium text-white py-2">{p.pointTitle}:</span> {p.pointDesc}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-3xl font-light mb-4">{serviceData[activeTab].title}</h2>
                                    <p className="text-gray-300 leading-relaxed text-lg">{serviceData[activeTab].description}</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerService;
