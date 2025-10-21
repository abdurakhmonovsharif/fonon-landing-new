import { useSelector } from 'react-redux';
import BrandDynamicPage from "../BrandDynamicPage.jsx";

const translations = {
    en: {
        title: "This is Fonon",
        intro: "At Fonon, each piece of jewelry undergoes a meticulous process that combines the pure beauty of nature with human craftsmanship. From the source of the diamond to its transformation into the final collection, quality and artistry are always prioritized. Here is the production journey of Fonon's jewelry:",

        heading1: "1. Excellence Starting from the Source",
        heading1Desc: "At Fonon, excellence begins right from the source where our diamonds are extracted. In line with sustainability and ethical values, diamonds obtained from the world's most reliable mines are meticulously selected for their quality and purity. Our sensitivity to the origin of natural diamonds and their environmental impact has become a guiding principle we follow at every step.",

        heading2: "2. Legendary Design Stages",
        heading2Desc: "Another element as important as the diamond's natural form is the design process. At Fonon, each piece represents a unique story blended with a timeless and modern aesthetic. Our designers draw inspiration from nature, art, and cultural richness, transforming these precious stones into elegant jewelry. From the initial sketches, every detail is handled with great care. The pieces are designed to be both stunning and functional, achieving a perfect balance between function and aesthetic.",

        heading3: "3. Flawless Craftsmanship and Advanced Technology",
        heading3Desc: "Fonon's design vision is skillfully brought to life during the diamond processing stage. Each diamond shaped by skilled hands is cut using the most advanced techniques and modern technologies. Cutting the diamonds at the correct angles and proportions enhances their brilliance and sparkle. Our artisans combine centuries-old techniques with modern methods to ensure that each piece of jewelry is unique and flawless.",

        heading4: "4. Meticulous Quality Control",
        heading4Desc: "The rigorous quality controls implemented at every stage of production ensure that each piece of jewelry meets international standards. Diamonds undergo international certification processes concerning color, clarity, cut, and carat weight. These certificates serve as official proof of the value and quality of our jewelry, providing assurance to our customers. At Fonon, only products that are flawless earn the right to join our collection.",

        heading5: "5. Personalized Service and Special Presentation",
        heading5Desc: "Purchasing jewelry at Fonon is not just a transaction; it is a personal and unforgettable experience. Each of our customers receives special service to help them choose the piece that best suits them. The experience we offer to our customers reflects the same level of care both in-store and on digital platforms. Especially for our online shoppers, we provide AR (Augmented Reality) technology, allowing them to virtually try on our jewelry and see how it looks in real-time.",

        heading6: "6. An Unforgettable Ownership Moment",
        heading6Desc1: "The final stage is when the jewelry finds its owner. Fonon not only presents its jewelry in an elegant and aesthetic manner but also considers every detail to make that moment unforgettable. The delivery of jewelry in special boxes, personalized messages, and unique presentation styles creates a special moment for the owner. Thus, our customers gain not just a piece of jewelry but also a story and an experience.",
        heading6Desc2: "Fonon's unique journey in the world of jewelry aims to offer you care and elegance at every step. Discover this enchanting process and experience the luxury that Fonon offers for yourself!",
    },
    uz: {
        title: "Bu Fonon",
        intro: "Fononda, zargarlikni har bir buyumi tabiatning sof go'zalligini inson san'ati bilan birlashtiradigan ehtiyot bilan qayta ishlash jarayonidan o'tadi. Olmosning manbasidan oxirgi kolleksiyaga o'zgarishugunga qadar, sifat va san'atkorlik har doim birinchi o'rinda turadi. Mana Fonon zargarligining ishlab chiqarish yo'li:",

        heading1: "1. Manbasidan Boshlangan Yaqqol",
        heading1Desc: "Fononda yaqqol o'zimizning olmoslarni qayerga chiqarishi bilan boshlanadi. Barqarorlik va etika qiymatlari doirasida, dunyoning eng ishonchli kasalliklaridan olingan olmoslar sifat va shutsshunligi bo'yicha ehtiyot bilan tanlanadi. Tabiiy olmoslarning kelib chiqishi va ekologik ta'siriga bo'lgan bizning sezgili bo'limi har bosqichda amal qiladigan yo'naltirish printsipiga aylandi.",

        heading2: "2. Afsona Dizayn Bosqichlari",
        heading2Desc: "Olmosning tabiiy shakli qadar muhim bo'lgan yana bir element dizayn jarayonidir. Fononda har bir buyum vaqtimizga xos va zamonaviy aesthetik bilan aralashtirgan noyob hikoyani ifodalaydi. Bizning dizaynerlar tabiatan, san'atdan va madaniy boyligidan ilhomlanib, bu qimmatbaho toshlarni nafis zargarlikka aylantiribdi. Dastlabki chizmalardan boshlab, har bir tafsilot buyuk ehtiyot bilan qayta ishlanadi. Buyumlar go'zal ham, funktsional ham bo'lishi uchun ishlab chiqiladi, funktsiya va estetika orasida mukammal muvozanat erishibdi.",

        heading3: "3. Xatosiz San'atkorlik va Ilg'or Texnologiya",
        heading3Desc: "Fonon dizayn ko'rinishi olmoslarni qayta ishlash bosqichida ustalar tomonidan o'zgandiriladi. Ikki qo'lda shakllantirilgan har bir olmosi eng ilg'or usullari va zamonaviy texnologiyalar yordamida kesib chiqiladi. Olmoslarni to'g'ri burchak va mutanosiblikda kesish ularning yorug'ligi va porlashini kuchaytirib yuboradi. Bizning san'atkorlarimiz asrlardagidek usullarni zamonaviy usullari bilan birlashtirib, zargarlikni har bir buyumi noyob va xatosiz ekanligini ta'minlaydi.",

        heading4: "4. Ehtiyot Sifat Nazorati",
        heading4Desc: "Ishlab chiqarish har bosqichida amalga oshirilgan qat'iy sifat nazoratlari zargarlikni har bir buyumining xalqaro standartlarga mos ekanligini ta'minlaydi. Olmoslar xalqaro sertifikatsiya jarayonlaridan rang, sayoqlik, kesim va karat og'irligi bo'yicha o'tadi. Bu sertifikatlar bizning zargarlikti qiymati va sifatining rasmiy isboti bo'lib xizmat qiladi va bizning mijozlarmizga ishonch beradi. Fononda, faqat xatosiz mahsulotlar bizning kolleksiyamizga qo'shilish huquqini oladi.",

        heading5: "5. Shaxsiylashtirilgan Xizmat va Maxsus Taqdim",
        heading5Desc: "Fononda zargarlik sotib olish faqat sauqat emas; bu shaxsiy va unutilmas tajribasi. Bizning har bir mijozi ularni eng mos keladigan buyumni tanlashda yordam berish uchun maxsus xizmatni oladi. Bizning mijozlarga taqdim etadigan tajribamiz do'konida ham raqamli platformalarda ham bir xil ehtiyot darajasini aks ettiradi. Ayniqsa bizning onlayn xaridorlari uchun biz AR (Augmented Reality) texnologiyasini taqdim etamiz, ular virtual ravishda bizning zargarlikni sinashi va uni real vaqtda qanday ko'rinishini ko'rishi mumkin.",

        heading6: "6. Unutilmas Egalik Momentu",
        heading6Desc1: "Oxirgi bosqich zargarlikni o'zining egasini topishi. Fonon nafaqat o'z zargarlikni nafis va estetik tarzda taqdim etmaydi, balki o'sha momentni unutilmas qilish uchun har bir tafsilotni ko'rib chiqadi. Zargarlikni maxsus qutilarda yetkazish, shaxsiylashtirilgan xabarlar va noyob taqdim uslublari egasi uchun maxsus momentni yaratadi. Shunday qilib, bizning mijozlar nafaqat zargarlikni buyumi, balki hikoyat va tajribani oladi.",
        heading6Desc2: "Fonon zargarlik dunyosidagi noyob yo'li sizga har bosqichda ehtiyot va nafislik taqdim qilish maqsadida. Ushbu sehrli jarayonni bilib oling va Fonon taqdim qiladigan luxuriyani o'zing uchun his qiling!",
    },
    ru: {
        title: "Это Fonon",
        intro: "В Fonon каждое украшение проходит тщательный процесс, который сочетает чистую красоту природы с мастерством человека. От источника алмаза до его превращения в окончательную коллекцию качество и художественность всегда остаются приоритетом. Вот путь производства украшений Fonon:",

        heading1: "1. Совершенство, начиная с источника",
        heading1Desc: "В Fonon совершенство начинается прямо из источника, где добываются наши алмазы. В соответствии с принципами устойчивости и этическими ценностями алмазы, полученные из самых надежных месторождений мира, тщательно отбираются по качеству и чистоте. Наша чувствительность к происхождению природных алмазов и их воздействию на окружающую среду стала руководящим принципом, которого мы придерживаемся на каждом этапе.",

        heading2: "2. Легендарные этапы проектирования",
        heading2Desc: "Еще одним элементом, столь же важным, как естественная форма алмаза, является процесс проектирования. В Fonon каждое украшение представляет собой уникальную историю, сочетающую вневременную и современную эстетику. Наши дизайнеры черпают вдохновение из природы, искусства и культурного богатства, превращая эти драгоценные камни в элегантные украшения. Начиная с первоначальных эскизов, каждая деталь обрабатывается с большой тщательностью. Украшения разработаны так, чтобы быть одновременно потрясающими и функциональными, достигая идеального баланса между функцией и эстетикой.",

        heading3: "3. Безупречное мастерство и передовые технологии",
        heading3Desc: "Дизайнерское видение Fonon искусно воплощается на этапе обработки алмазов. Каждый алмаз, обработанный опытными руками, огранивается с использованием самых передовых техник и современных технологий. Огранка алмазов под правильными углами и пропорциями усиливает их блеск и сияние. Наши мастера сочетают вековые техники с современными методами, чтобы гарантировать, что каждое украшение уникально и безупречно.",

        heading4: "4. Тщательный контроль качества",
        heading4Desc: "Строгие проверки качества, реализуемые на каждом этапе производства, гарантируют, что каждое украшение соответствует международным стандартам. Алмазы проходят международные процессы сертификации по цвету, чистоте, огранке и весу в каратах. Эти сертификаты служат официальным подтверждением стоимости и качества нашу украшений, обеспечивая уверенность наших клиентов. В Fonon только безупречные продукты получают право войти в нашу коллекцию.",

        heading5: "5. Персонализированное обслуживание и специальная презентация",
        heading5Desc: "Покупка украшений в Fonon - это не просто транзакция; это личный и незабываемый опыт. Каждый из наших клиентов получает специальное обслуживание, которое помогает им выбрать наиболее подходящее украшение. Опыт, который мы предлагаем нашим клиентам, отражает одинаковый уровень заботы как в магазине, так и на цифровых платформах. Особенно для наших онлайн-покупателей мы предоставляем технологию AR (дополненная реальность), которая позволяет им виртуально примерить наши украшения и увидеть, как они выглядят в реальном времени.",

        heading6: "6. Незабываемый момент владения",
        heading6Desc1: "Завершающий этап - это когда украшение находит своего владельца. Fonon не только представляет свои украшения в элегантной и эстетичной манере, но также тщательно продумывает каждую деталь, чтобы сделать этот момент незабываемым. Доставка украшений в специальных коробках, персонализированные сообщения и уникальные стили презентации создают особенный момент для владельца. Таким образом, наши клиенты получают не только украшение, но и историю и опыт.",
        heading6Desc2: "Уникальный путь Fonon в мире украшений призван предложить вам заботу и элегантность на каждом этапе. Откройте для себя этот чарующий процесс и сами испытайте роскошь, которую предлагает Fonon!",
    },
};

const Info = () => {
    const language = useSelector(state => state.language.current);
    const t = (key) => translations[language][key] || translations.en[key];

    const fononData = {
        title: t('title'),
        heroImage: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1200",
        sections: [
            {
                paragraphs: [
                    t('intro')
                ]
            },
            {
                heading: t('heading1'),
                paragraphs: [
                    t('heading1Desc')
                ]
            },
            {
                heading: t('heading2'),
                paragraphs: [
                    t('heading2Desc')
                ]
            },
            {
                heading: t('heading3'),
                paragraphs: [
                    t('heading3Desc')
                ]
            },
            {
                heading: t('heading4'),
                paragraphs: [
                    t('heading4Desc')
                ]
            },
            {
                heading: t('heading5'),
                paragraphs: [
                    t('heading5Desc')
                ]
            },
            {
                heading: t('heading6'),
                paragraphs: [
                    t('heading6Desc1'),
                    t('heading6Desc2')
                ]
            }
        ],
        galleryImages: []
    };

    return <BrandDynamicPage {...fononData} />;
};

export default Info;