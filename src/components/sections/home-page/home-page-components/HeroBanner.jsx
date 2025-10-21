import { useSelector } from 'react-redux';

const translations = {
  en: {
    jewelsThatDefineYou: 'Jewels That Define You',
    perfectJewels: 'The Perfect Jewels For You',
    explorMore: 'explore more',
    buyNow: 'Buy Now',
  },
  uz: {
    jewelsThatDefineYou: 'Sizni aniqlash kerak bo\'lgan zinatlart',
    perfectJewels: 'Siz uchun mukammal zinatlar',
    explorMore: 'Ko\'proq o\'rganish',
    buyNow: 'Hozir xarid qiling',
  },
  ru: {
    jewelsThatDefineYou: 'Украшения, которые определяют вас',
    perfectJewels: 'Идеальные украшения для вас',
    explorMore: 'Узнать больше',
    buyNow: 'Купить сейчас',
  },
};

const HeroBanner = () => {
  const language = useSelector(state => state.language.current);
  const t = (key) => translations[language][key] || translations.en[key];

  return (
      <>
        <section className="banner-area banner-style-two" id="bannerSlider">
          <div className="single-banner d-flex align-items-center justify-content-center">
            <div className="circle-out" />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="banner-content text-center">
                    <span className="promo-tag" data-animation="fadeInDown" data-delay=".6s">{t('jewelsThatDefineYou')}</span>
                    <h1 className="title" data-animation="fadeInLeft" data-delay=".9s">{t('perfectJewels')} <br /></h1>
                    <ul>
                      <li data-animation="fadeInUp" data-delay="1.1s">
                        <a className="main-btn btn-filled" href="#info-banner">{t('explorMore')}</a>
                      </li>
                      <li data-animation="fadeInUp" data-delay="1.3s">
                        <a className="main-btn btn-border" href="https://fonon.uz/">{t('buyNow')}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner-bg" style={{backgroundImage: 'url(/assets/img/banner/04.jpg)'}} />
            <div className="banner-overly" />
          </div>
        </section>
      </>
  );
};

export default HeroBanner;