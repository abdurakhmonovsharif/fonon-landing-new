import { useSelector } from 'react-redux';
import BrandDynamicPage from "../BrandDynamicPage.jsx";

const translations = {
    en: {
        title: "About the Factory",
        mainDescription: "Fonon is a jewelry manufacturing factory in Uzbekistan built on Italian standards by OOO \"Gold Moon Tashkent\" in 2020. Fonon is the only large enterprise in Central Asia producing jewelry from precious metals in European and Eastern styles.",
        productionHeading: "Production",
        productionDesc1: "The production employs more than 150 professionals: creative designers, goldsmiths, and the country's best jewelers. Our jewelers have gained experience from qualified specialists from Italy, Turkey, and Thailand.",
        productionDesc2: "The production uses advanced jewelry technologies and the most progressive equipment from Italy, Germany, the USA, and Turkey. These technologies include the production of hollow jewelry, laser technology, creating new models using 3D printers, diamond inlay of chains, bracelets, earrings, and rings, as well as giving a bright appearance to semi-finished products' surfaces.",
        productionDesc3: "The quality of our jewelry is the main advantage that we constantly work on. Our masters and jewelers work exclusively with natural stones and high-quality materials.",
        advantagesHeading: "Competitive Advantages",
        advantage1: "Large Production Capacities - Speed and mass without compromising quality",
        advantage2: "World Standards - Certificates and quality comparable to leading global brands",
        advantage3: "Original Design Solutions - A team of experienced designers and 3D modelers on staff",
        advantage4: "Quality Control at Every Stage - Guarantees of the highest quality",
        advantage5: "Wide Range - We produce over 6000 items",
        advantage6: "Advanced Equipment and Technologies from Europe - Production of complex and unique products using Italian technology",
        certificatesHeading: "Certificates",
        certificatesDesc: "Our factory confirms that the produced products fully comply with standards and certificates. To increase the guarantees of our products for national and international customers, the company has received certification from several of the most influential international organizations.",
    },
    uz: {
        title: "Fabrika haqida",
        mainDescription: "Fonon - Oʻzbekistonda OOO \"Gold Moon Tashkent\" tomonidan 2020 yilda Italiya standartlarida qurilgan zargarlik istehsolotining fabrikasi. Fonon - Markaziy Osiyoda qimmatbaho metallardan Yevropaviy va Sharq uslubidagi zargarlikni istehsollaydigan yagona katta korxona.",
        productionHeading: "Istehsolot",
        productionDesc1: "Istehsolotda 150 dan ortiq mutaxassis ishlaydi: ijodiy dizaynerlar, oltin ustalar va davlatning eng yaxshi zargarlar. Bizning zargarlarimiz Italiya, Turkiya va Tailand mutaxassislaridan tajriba oʻrganishgan.",
        productionDesc2: "Istehsolotda Italiya, Germaniya, AQSh va Turkiyadan olingan zamonaviy zargarlik texnologiyalari va eng ilg'or uskunalar qoʻllaniladi. Bu texnologiyalarga koʻngil qoldirilgan zargarlikni istehsolash, lazer texnologiyasi, 3D printerlar yordamida yangi modellarni yaratish, zanjirlarga, bileziklarga, quloqlarga va halkalarga olmosni solishtirish, shuningdek yarim tayyor mahsulotlarning sirtiga yorug'lik berish kiradi.",
        productionDesc3: "Bizning zargarliklarimizning sifati biz doimo ishlayotgan asosiy foydalanuvchi. Bizning ustalar va zargarlar faqat tabiiy toshlar va yuqori sifatli materiallar bilan ishlaydi.",
        advantagesHeading: "Raqobatbardosh afzalliklari",
        advantage1: "Katta ishlab chiqarish quvvati - Sifatga shikoyat qilmasdan tezlik va massa",
        advantage2: "Jahon standartlari - Sertifikatlar va etakchi global brendlarga tenishlik bo'lgan sifat",
        advantage3: "Original dizayn yechimlari - Tajribali dizaynerlar va 3D modelyatorlar jamoasi",
        advantage4: "Har bosqichda sifat nazorati - Eng yuqori sifatning kafolati",
        advantage5: "Keng assortiment - Biz 6000 dan ortiq mahsulot ishlab chiqaramiz",
        advantage6: "Yevropadan olingan zamonaviy uskunalar va texnologiyalar - Italyan texnologiyasidan foydalanib murakkab va noyob mahsulotlar ishlab chiqarish",
        certificatesHeading: "Sertifikatlar",
        certificatesDesc: "Fabrikamiz ishlab chiqargan mahsulotlar to'liq standart va sertifikatlar talablarini bajarishini tasdiqlaydi. Milliy va xalqaro mijozlar uchun mahsulotlarimizning kafolatlari ko'paytirilishi uchun kompaniya eng ta'sirli xalqaro tashkilotlardan sertifikat olgan.",
    },
    ru: {
        title: "О фабрике",
        mainDescription: "Fonon - ювелирная фабрика в Узбекистане, построенная по итальянским стандартам компанией ООО \"Gold Moon Tashkent\" в 2020 году. Fonon - единственное крупное предприятие в Центральной Азии, производящее украшения из драгоценных металлов в европейском и восточном стилях.",
        productionHeading: "Производство",
        productionDesc1: "На производстве работают более 150 профессионалов: творческих дизайнеров, золотых дел мастеров и лучших ювелиров страны. Наши ювелиры получили опыт у квалифицированных специалистов из Италии, Турции и Таиланда.",
        productionDesc2: "Производство использует передовые ювелирные технологии и самое современное оборудование из Италии, Германии, США и Турции. Эти технологии включают производство полого украшения, лазерные технологии, создание новых моделей с помощью 3D-принтеров, алмазную инкрустацию цепочек, браслетов, серег и колец, а также придание яркого вида поверхностям полуфабрикатов.",
        productionDesc3: "Качество нашей продукции - главное преимущество, над которым мы постоянно работаем. Наши мастера и ювелиры работают исключительно с натуральными камнями и качественными материалами.",
        advantagesHeading: "Конкурентные преимущества",
        advantage1: "Большие производственные мощности - скорость и объем без ущерба для качества",
        advantage2: "Мировые стандарты - сертификаты и качество, сопоставимое с ведущими мировыми брендами",
        advantage3: "Оригинальные дизайнерские решения - коллектив опытных дизайнеров и 3D-моделистов",
        advantage4: "Контроль качества на каждом этапе - гарантия наивысшего качества",
        advantage5: "Широкий ассортимент - мы производим более 6000 наименований",
        advantage6: "Современное оборудование и технологии из Европы - производство сложной и уникальной продукции с использованием итальянских технологий",
        certificatesHeading: "Сертификаты",
        certificatesDesc: "Наша фабрика подтверждает, что производимая продукция полностью соответствует стандартам и сертификатам. Для увеличения гарантий нашей продукции для отечественных и зарубежных клиентов компания получила сертификацию от нескольких наиболее влиятельных международных организаций.",
    },
};

const Factory = () => {
    const language = useSelector(state => state.language.current);
    const t = (key) => translations[language][key] || translations.en[key];

    const factoryData = {
        title: t('title'),
        heroImage: "https://fononjewelry.com/tema/genel/uploads/sayfalar/thisisfonon.png",
        sections: [
            {
                paragraphs: [
                    t('mainDescription')
                ]
            },
            {
                heading: t('productionHeading'),
                paragraphs: [
                    t('productionDesc1'),
                    t('productionDesc2'),
                    t('productionDesc3')
                ]
            },
            {
                heading: t('advantagesHeading'),
                paragraphs: [
                    t('advantage1'),
                    t('advantage2'),
                    t('advantage3'),
                    t('advantage4'),
                    t('advantage5'),
                    t('advantage6')
                ]
            },
            {
                heading: t('certificatesHeading'),
                paragraphs: [
                    t('certificatesDesc')
                ]
            }
        ],
        galleryImages: [
            'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
            'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
            'https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?w=800',
            'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800',
            'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800'
        ]
    };

    return <BrandDynamicPage {...factoryData} />;
};

export default Factory;