import { useSelector } from 'react-redux';
import BrandDynamicPage from "../BrandDynamicPage.jsx";

const translations = {
    en: {
        title: "About the Brand",
        intro1: "Uzbekistan is a land of Legends. The Silk Road and gold passes through some of the legends told by these lands. We are at the point where legends and the past turn into material.",
        intro2: "Uzbekistan is a land of Masters. You may not see them in person today, but you see their works in the cities, streets, parks, and avenues you visit. Uzbek masters ensouled the Gold, and the Gold entitled them to process itself. No metal could be processed like gold.",
        intro3: "Uzbekistan is a land of Gold. Muruntau, the world's largest gold mine, is located in Uzbekistan.",
        intro4: "Our Intersection, FONON, transforms the products it designs by inspiration it takes from legends into marvelous jewelry through the skills of its highly gifted masters.",

        heritageHeading: "Heritage",
        heritage1: "Uzbekistan has been known for gold production and trade throughout its history, and Uzbekistan gold has been used by various civilizations. Located in the region where the Silk Road stretches throughout, Uzbekistan has particularly been a significant junction in the gold trade.",
        heritage2: "Gold has been extracted here since the 4th century BC, according to historians. It was gold mining that enabled ancient Bukhara to become one of the wealthiest regions on the Great Silk Road route.",
        heritage3: "In the middle of the 19th century, the Hungarian traveler Arminius Vámbéry lived in Bukhara for a year disguised as a dervish. In 1872, he wrote the famous book \"History of Bukhara\". Vámbéry launched a major campaign about Bukhara gold in Europe's largest newspapers, informing readers about the mysterious Zarafshan River and local gold miners. \"Half a kilo of gold comes out of the river every day,\" he said.",
        heritage4: "In 1878, with Vámbéry's initiative, Bukhara participated in the world exhibition in Vienna, where Bukhara gold items of great interest to Europeans were exhibited. Newspapers showed great interest in Bukhara gold items. For Europe, Bukhara has become a true exploration, which is the center of desire for many travelers.",

        masteryHeading: "Mastery",
        mastery1: "It is not enough for gold to be extracted from these lands alone for Uzbekistan Gold to attract attention. Gold is extracted almost everywhere in the world except Antarctica. The dexterity is the ability to process it. Gold is such a suitable metal for processing that 1 gram of gold can be scaled up to cover 1 square meter through forging. 1 gram of gold can be turned into 1 km of wire by milling. Nevertheless, it is the Mastery that gives shape to it…",
        mastery2: "Uzbek masters embroidered gold in such a way that everyone seeing it is amazed. The works of the masters with the ability to embroider clothes with gold made those seeing them lost in amazement, even before silk reached Uzbekistan. The caftans woven with gold by the Uzbek Masters have become legendary. The Emir of Bukhara sometimes wore two or three thick golden caftans. Gold embroidery also adorned the horse rugs of royal horses.",
        mastery3: "Mastery is not limited to weaving as can be seen from the example of Tilla Kari, also known as Gold-Coated Madrasa in Samarkand. Tilla Kari, which gives its name to the madrasa, means goldwork. One understands why this name is given when they enter this large domed structure.",
        mastery4: "Today, gold embroidery patterns of Bukhara masters are exhibited in museums in many countries.",

        todayHeading: "Today",
        today1: "Uzbekistan has a significant position in terms of gold production with its rich gold deposits in Central Asia today. Therefore, Uzbekistan gold is also invaluable and considered a gold type favored for investment purposes.",
        today2: "Uzbekistan ranked second in the world in total gold sales by selling more than 25 tons of precious metals in 2023.",
        today3: "Gold is extracted in Uzbekistan under state control. It is sold as State-Guaranteed. Accordingly, Uzbek Gold sold with certification is one of the most reliable golds. Gold has remained at the center of various tricks throughout the ages, as it is the most desired and pursued metal all over the world. Unfortunately, the concern about counterfeit products has reached a significant point in recent years. It is becoming more and more difficult to distinguish counterfeit products with the advancement of technology. Consumers have no other solution but to purchase from almost reliable sources.",

        diamondHeading: "Diamond",
        diamond1: "The word \"gold\" is derived from the Latin word \"aurum\" meaning \"shining, glittering\". Its symbol AU in science also comes from this word. Even so, the glittering light of gold is crowned as combined with another miracle of nature.",
        diamond2: "Diamond... The Stone at the End of Eros' Arrow, according to some. Stellar Particles Fallen to Earth, according to others.",
        diamond3: "No tool managed to cut it, even the most extreme fires failed to leave a mark on it. This is because, among the precious stones, the most dazzling and hardest one is Diamond. It takes an average of 3 million years to form, so it is the world's oldest object after the world itself.",
        diamond4: "That is why it is a symbol of strength, beauty, and endurance. It signifies that the person on whom it is bestowed is rare, and hence invaluable. No brilliant in the world is equal to another. The World's Hardest Material Represents the Softest Thing… Love.",
        diamond5: "It is only with the Art and magic fingers of Mastery that the Diamond, which comes out of nature, turns into a jewel.",
        diamond6: "FONON harbors the transformation of Gold and Diamond into a unique jewel with the secrets and skills of the Uzbek Mastery.",

        closingText: "We invite you to become acquainted with these works.",
    },
    uz: {
        title: "Brend haqida",
        intro1: "Oʻzbekiston afsona yurtidir. Ipak yo'li va oltin bu yerlarning aytilgan afsonalardan oʻtadi. Biz afsona va oʻtmishnuing moliyaga aylanish nuqtasidamiz.",
        intro2: "Oʻzbekiston ustalari yurtidir. Bugun ularni shaxsan koʻrmasangiz ham, ularni boradigan shahar koʻchasi, park va xiyabonlardan koʻrasiz. Oʻzbek ustalari oltinni ruhga solishtirdi va oltin ularni oʻzini qayta ishlashga huquq berdi. Hech qanday metall oltinga o'xshab qayta ishlanmadi.",
        intro3: "Oʻzbekiston oltin yurtidir. Dunyonning eng katta oltin ko'mizasi Muruntau Oʻzbekistonda joylashgan.",
        intro4: "Bizning kesishuv joyimiz FONON, o'zining yuqori qabiliyatli ustalariga afsonalardan inspiraatsiya qilib loyihalashtirgan mahsulotlarini ajoyib zargarlikka aylantirib yuboradi.",

        heritageHeading: "Meros",
        heritage1: "Oʻzbekiston butun tarixi davomida oltin ishlab chiqarish va savdosi bilan mashhur bo'lgan va oʻzbek oltini turli tamaddun tomonidan foydalanilgan. Ipak yo'li boʻylab cho'zilgan mintaqada joylashgan Oʻzbekiston ayniqsa oltin savdosida muhim o'rinda turgan.",
        heritage2: "Tarixiylarning fikricha, oltinni shu yerda IV asr BC dan chiqarib turildi. Qadimiy Buxoro Buyuk Ipak yo'lining eng boy mintaqalaridan biriga aylanib ketishiga aynan oltin qazilishi sabab bo'ldi.",
        heritage3: "XIX asrning oʻrtasida vengerlik sayohatchi Arminius Vamberiy dervis o'ltinida yashirinib Buxoroda bir yil yasadi. 1872 yilda u \"Buxoro tarixi\" deb nomlanuvchi mashhur kitobni yozdi. Vamberiy Yevropaning eng katta gazetalarida Buxoro oltini haqida katta kampaniya oʻtkazdi, okuyuvchilarni sirli Zarafshon daryo'si va mahalliy oltin qazuvchilar haqida xabardor qildi. \"Har kuni daryodan yarim kilogramm oltin chiqadi,\" dedi.",
        heritage4: "1878 yilda Vamberiy tashabbusi bilan Buxoro Vena shahrida oʻtkazilgan jahon koʻrgazmasida qatnashdi, bu yerda yevropaliklar uchun katta qiziqish o'yga tushirgan Buxoro oltin mahsulotlari namoyish etildi. Gazetalar Buxoro oltin mahsulotlariga katta qiziqish koʻrsatdi. Yevropaliklarning uchun Buxoro haqiqiy tadqiqot bo'lib oʻrni, ko'p sayohatchilarning orzu markazidir.",

        masteryHeading: "Mahirlik",
        mastery1: "Oʻzbekiston oltini diqqat tortishi uchun bu yerlardan faqat oltin chiqarilishi yetarli emas. Oltinni Antaktikadan boshqa deyarli butun dunyo boʻylab chiqariladi. Mahoratlik uni qayta ishlash qobilitidir. Oltin qayta ishlash uchun shunday qulay metall bo'lib, 1 gramm oltinni kovalashtirish orqali 1 kvadrat metrni qoplaydi. 1 gramm oltinni frezalashtirish orqali 1 km simni o'rnatish mumkin. Shunga qaramay, unga shaklni beruvchi Mahirlikdir...",
        mastery2: "Oʻzbek ustalari oltinni shunday tikdi-dib ketdi-ki, uni koʻrgan hamma hayron bo'ldi. Oltinni libosga tikish qobiliyatiga ega bo'lgan ustalari ishing ipak Oʻzbekistonga kelguncha, uni koʻrganlar hayron bo'lib qolishdi. Oʻzbek ustaları tomonidan oltinga to'kilgan chapon-donlar afsona bo'lib qoldi. Buxoro emiri ba'zan ikki-uchta qalin oltin chaponni kiyishi kerak. Oltin tikish shuningdek qoroli otlarning to'rti bilan bezatilgan.",
        mastery3: "Mahirlik, Samarqanddagi \"Oltin qoplamali madrasah\" deb ham ataladigan Tilla Qari misolidan koʻrinib turganidek, nafaqat tikuvchi. Madrasaga nom beruvchi Tilla Qari \"oltin ishi\" manisini anglatadi. Ushbu yirik qushni strukturaga kirganida nega shu nom berilganini tushunsiz.",
        mastery4: "Bugungi kunga Buxoro ustalari tomonidan yasalgan oltin tikish naqshları ko'plab mamlakatlardagi muzeylarida namoyish etilmoqda.",

        todayHeading: "Bugun",
        today1: "Oʻzbekiston bugungi kunda Markaziy Osiyoning boy oltin zaxiralari bilang oltin ishlab chiqarish nuqtai nazaridan muhim o'rinda turadi. Shuning uchun Oʻzbekiston oltini ham beqimmas va sarmaya qo'yish maqsadida mo'ljallangan oltin turi sifatida hisoblanadi.",
        today2: "Oʻzbekiston 2023 yilida 25 tonnadan koʻp qimmatbaho metallarni sotib, jami oltin satishda dunyoda ikkinchi oʻrinda turdi.",
        today3: "Oʻzbekistonda oltin davlat nazorati ostida chiqariladi. U Davlat Kafolati bilan sotiladi. Shunga koʻra, sertifikat bilan sotilgan Oʻzbek oltini eng ishonchli oltinlardan biridir. Oltin barcha asrlarda turli fitna-fitna markazida qoldi, chunki u butun dunyoda eng orzu qilingan va qidirilgan metal. Afsuski, yaqinda soxta mahsulotlar haqidagi tashvish muhim darajaga yetdi. Texnologiya rivojlanganidagi qanday soxta mahsulotlarni farqlash oʻtkazib turish oydinlashmoqda. Foydalanuvchilar faqat deyarli ishonchli manbalarga sotib olishdan boshqa chora yo'q.",

        diamondHeading: "Olmosi",
        diamond1: "\"Oltin\" so'zi lotin so'zi \"aurum\" dan kelib chiqqan bo'lib, \"porlatib, parchalaydigan\" manisini anglatadi. Fanda uning \"AU\" belgisi ham shu so'zdan olingan. Shunga qaramay, oltinning parchalaydigan nur, tabiatning yana bir mo'jizasi bilan tajtaytilgan.",
        diamond2: "Olmosi... Eros o'qining uchidagi tosh, ba'zilar fikricha. Yulduzlardan Yerga tushgan zarralar, boshqalarning fikricha.",
        diamond3: "Uni kesib chiqadinadigan vosita topilmadi, hatto eng ekstremal oʻtlar ham unga iz qolib ketmadi. Buning sababi, qimmatbaho toshlar orasida eng noziki va qattiq bir Olmosi. Uning shakllanishi o'rtacha 3 million yil davom etadi, shuning uchun u dunyo o'zidan keyin dunyo eng qadimgi narsasidir.",
        diamond4: "Shuning uchun u kuch, go'zallik va qat'iyatlik belgisidir. Uni berilgan odam noyob va shuning uchun beqimmas ekanligini bildiradi. Dunyoda bir briyant-boshqa boshqasiga teng emas. Dunyoning qattiq materiali Eng yumshoq narsani ifodalaydi... Sevgi.",
        diamond5: "Tabiatdan chiqadigan Olmosni zargarlikka aylantiradigan faqat San'at va Mahirlik sehri barmog'i bilan bo'ladi.",
        diamond6: "FONON oltinni va Olmosni Oʻzbek Mahirligining sirri va ko'nikmalari bilan noyob zargarlikka aylantirishni boshlaydi.",

        closingText: "Biz sizni ushbu ishlarga tanishtirish uchun taklif qilamiz.",
    },
    ru: {
        title: "О бренде",
        intro1: "Узбекистан - земля легенд. Шелковый путь и золото проходят сквозь легенды этих земель. Мы находимся в точке, где легенды и прошлое превращаются в материал.",
        intro2: "Узбекистан - земля мастеров. Вы не можете видеть их лично сегодня, но вы видите их работы в городах, улицах, парках и проспектах, которые вы посещаете. Узбекские мастера вдохновили золото, и золото дало им право обрабатывать его. Ни один металл не мог быть обработан так, как золото.",
        intro3: "Узбекистан - земля золота. Мурунтау, крупнейшее месторождение золота в мире, находится в Узбекистане.",
        intro4: "Наш перекресток, FONON, преобразует продукты, которые он создает, вдохновленные легендами, в чудесные украшения благодаря умениям своих высокоодаренных мастеров.",

        heritageHeading: "Наследие",
        heritage1: "На протяжении всей истории Узбекистан известен производством и торговлей золотом, и узбекское золото использовалось различными цивилизациями. Расположенный в регионе, где протягивается Шелковый путь, Узбекистан был особенно значительным центром торговли золотом.",
        heritage2: "По словам историков, золото добывается здесь с IV века до н.э. Именно золотодобыча позволила древней Бухаре стать одним из самых богатых регионов Великого Шелкового пути.",
        heritage3: "В середине XIX века венгерский путешественник Арминиус Вамбери прожил в Бухаре год, переодевшись дервишем. В 1872 году он написал знаменитую книгу \"История Бухары\". Вамбери запустил крупную кампанию о бухарском золоте в крупнейших газетах Европы, информируя читателей о таинственной реке Зарафшан и местных золотодобытчиках. \"Из реки выходит полкилограмма золота в день,\" - сказал он.",
        heritage4: "В 1878 году по инициативе Вамбери Бухара участвовала во всемирной выставке в Вене, где были выставлены вызывающие большой интерес у европейцев изделия из бухарского золота. Газеты проявили большой интерес к изделиям из бухарского золота. Для Европы Бухара стала истинным откровением, центром желаний для многих путешественников.",

        masteryHeading: "Мастерство",
        mastery1: "Только добычи золота из этих земель недостаточно, чтобы узбекское золото привлекало внимание. Золото добывается почти везде на земле, кроме Антарктиды. Мастерство - это умение его обрабатывать. Золото - такой подходящий метал для обработки, что 1 грамм золота можно расплющить до площади 1 квадратного метра. 1 грамм золота можно превратить в 1 км проволоки путем прокатки. Тем не менее, мастерство дает ему форму...",
        mastery2: "Узбекские мастера вышивали золотом так, что каждый, кто это видел, был изумлен. Работы мастеров, умеющих вышивать одежду золотом, вызывали восхищение у тех, кто их видел, еще до прихода шелка в Узбекистан. Халаты, вытканные золотом узбекскими мастерами, стали легендарными. Эмир Бухары иногда надевал два или три толстых золотых халата. Золотая вышивка также украшала коврики конских седел королевских лошадей.",
        mastery3: "Мастерство не ограничивается вышивкой, как видно из примера Тилля-Кари, также известной как \"Позолоченная медресе\" в Самарканде. Тилля-Кари, давшая название медресе, означает \"золотая работа\". Когда вы входите в эту большую куполообразную конструкцию, вы понимаете, почему ей дано это имя.",
        mastery4: "Сегодня узоры золотой вышивки бухарских мастеров выставляются в музеях многих стран.",

        todayHeading: "Сегодня",
        today1: "Узбекистан занимает значительное место по производству золота с его богатыми месторождениями в Центральной Азии. Поэтому узбекское золото также неоценимо и считается типом золота, благоприятствующим инвестиционным целям.",
        today2: "Узбекистан занял второе место в мире по общему объему продаж золота, продав более 25 тонн драгоценных металлов в 2023 году.",
        today3: "Золото в Узбекистане добывается под государственным контролем. Оно продается с государственной гарантией. Соответственно, узбекское золото, продаваемое с сертификацией, является одним из самых надежных золот. Золото оставалось в центре различных уловок на протяжении всех веков, так как это наиболее желаемый и преследуемый металл во всем мире. К сожалению, озабоченность контрафактной продукцией достигла значительного уровня в последние годы. С развитием технологии становится все более сложным различать контрафактные продукты. Потребителям не остается ничего другого, как покупать из практически надежных источников.",

        diamondHeading: "Алмаз",
        diamond1: "Слово \"золото\" происходит от латинского слова \"aurum\", означающего \"сияющий, блестящий\". Его символ AU в науке также происходит от этого слова. Несмотря на это, сияющий свет золота венчается союзом с другим чудом природы.",
        diamond2: "Алмаз... Камень на конце стрелы Эроса, по мнению некоторых. Звездные частицы, упавшие на Землю, по мнению других.",
        diamond3: "Ни один инструмент не смог его разрезать, даже самые экстремальные огни не оставили на нем следа. Это потому, что среди драгоценных камней Алмаз является наиболее блестящим и твердым. Его образование занимает в среднем 3 миллиона лет, поэтому это самый старый объект в мире после самой Земли.",
        diamond4: "Именно поэтому он символизирует силу, красоту и стойкость. Он означает, что человек, которому он дарован, редок и поэтому бесценен. Ни один бриллиант в мире не равен другому. Самый твердый материал в мире представляет самое мягкое... Любовь.",
        diamond5: "Только с искусством и волшебными пальцами мастерства алмаз, выходящий из природы, превращается в драгоценность.",
        diamond6: "FONON хранит в себе секреты трансформации золота и алмаза в уникальное украшение с помощью узбекского мастерства и его навыков.",

        closingText: "Мы приглашаем вас познакомиться с этими работами.",
    },
};

const About = () => {
    const language = useSelector(state => state.language.current);
    const t = (key) => translations[language][key] || translations.en[key];

    const aboutData = {
        title: t('title'),
        heroImage: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1200",
        sections: [
            {
                paragraphs: [
                    t('intro1'),
                    t('intro2'),
                    t('intro3'),
                    t('intro4')
                ]
            },
            {
                heading: t('heritageHeading'),
                paragraphs: [
                    t('heritage1'),
                    t('heritage2'),
                    t('heritage3'),
                    t('heritage4')
                ]
            },
            {
                heading: t('masteryHeading'),
                paragraphs: [
                    t('mastery1'),
                    t('mastery2'),
                    t('mastery3'),
                    t('mastery4')
                ]
            },
            {
                heading: t('todayHeading'),
                paragraphs: [
                    t('today1'),
                    t('today2'),
                    t('today3')
                ]
            },
            {
                heading: t('diamondHeading'),
                paragraphs: [
                    t('diamond1'),
                    t('diamond2'),
                    t('diamond3'),
                    t('diamond4'),
                    t('diamond5'),
                    t('diamond6')
                ]
            },
            {
                paragraphs: [
                    t('closingText')
                ]
            }
        ],
        galleryImages: [
            'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800',
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800',
            'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800',
            'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800',
            'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800',
            'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800'
        ]
    };

    return <BrandDynamicPage {...aboutData} />;
};

export default About;