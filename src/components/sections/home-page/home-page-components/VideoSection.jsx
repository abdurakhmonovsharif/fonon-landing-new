import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import "../../../../../public/assets/css/style.css"

const translations = {
    en: {
        brightenYourDay: 'Brighten Your Day',
        videoDescription: 'With Fonon, every moment is touched with brilliance. Our jewellery isn\'t just an accessory — it\'s a statement of elegance. Crafted to make you shine, every piece ensures you feel rare, radiant, and undeniably special.',
        fononBrand: 'Fonon',
        statementOfElegance: 'statement of elegance',
    },
    uz: {
        brightenYourDay: 'Kuningizni yorug\'lik bilan to\'ldiring',
        videoDescription: 'Fonon bilan har bir lahza limonning limonligi bilan teginadi. Bizning zinatlart shunchaki aksessor emas — bu nafislikni ko\'rsatish. Siz yaltirashingiz uchun yasalgan, har bir buyum siz nadir, radiant va shubhasiz maxsus his qilishni ta\'minlaydi.',
        fononBrand: 'Fonon',
        statementOfElegance: 'nafislikni ko\'rsatish',
    },
    ru: {
        brightenYourDay: 'Озарите свой день',
        videoDescription: 'С Fonon каждый момент освещен блеском. Наши украшения — это не просто аксессуар, это заявление об элегантности. Созданные, чтобы вы сияли, каждое изделие гарантирует, что вы почувствуете себя редкой, сияющей и безусловно особенной.',
        fononBrand: 'Fonon',
        statementOfElegance: 'заявление об элегантности',
    },
};

const VideoSection = () => {
    const language = useSelector(state => state.language.current);
    const t = (key) => translations[language][key] || translations.en[key];
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className="relative w-full h-[80vh] md:h-screen bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url(/assets/img/video-section/preview_cover.jpg)",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                <div
                    className="relative z-20 cursor-pointer group"
                    onClick={() => setIsOpen(true)}
                >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/30 shadow-2xl transition transform group-hover:scale-110 group-hover:shadow-yellow-400/40">
                        <img
                            src="/assets/img/icon/07.png"
                            alt="Play Icon"
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 opacity-90"
                        />
                    </div>
                </div>

                <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-4 sm:left-6 md:left-10 max-w-md sm:max-w-xl md:max-w-2xl text-white z-20 space-y-3 sm:space-y-4 md:space-y-5 px-2">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-wide leading-snug bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-white to-yellow-400 drop-shadow-2xl">
                        {t('brightenYourDay')}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed opacity-95 tracking-wide">
                        With <span className="font-semibold">{t('fononBrand')}</span>, every moment is touched
                        with brilliance. Our jewellery isn't just an accessory — it's a{" "}
                        <span className="italic">{t('statementOfElegance')}</span>. Crafted to make you
                        shine, every piece ensures you feel rare, radiant, and undeniably special.
                    </p>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
                    <div className="relative w-full max-w-4xl">
                        <video
                            className="w-full max-h-[70vh] sm:max-h-[80vh] rounded-lg shadow-xl object-contain"
                            src="/assets/img/video-section/fonon_preview.mp4"
                            controls
                            autoPlay
                        />
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute -top-8 sm:-top-10 right-2 sm:right-0 text-white text-2xl sm:text-3xl font-bold hover:text-gray-300"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default VideoSection;