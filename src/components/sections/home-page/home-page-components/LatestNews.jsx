import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {useGetNewsQuery} from "../../../../lib/redux/services/newsApi.js";
import {useSelector} from "react-redux";

const BASE_URL = 'http://localhost:9090';

const translations = {
  en: {
    blog: 'Blog',
    newsFeeds: 'News Feeds',
    findMore: 'Find More',
  },
  uz: {
    blog: 'Blog',
    newsFeeds: 'Yangiliklar',
    findMore: 'Ko\'proq o\'qish',
  },
  ru: {
    blog: 'Блог',
    newsFeeds: 'Новости',
    findMore: 'Подробнее',
  },
};

const LatestNews = () => {
  const navigate = useNavigate();
  const language = useSelector(state => state.language.current);
  const t = (key) => translations[language][key] || translations.en[key];
  const {data: news} = useGetNewsQuery()

  const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    return imagePath.startsWith('http') ? imagePath : `${BASE_URL}${imagePath}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getNewsTitle = (item) => {
    if (language === 'uz') return item.titleUz || item.titleEn;
    if (language === 'ru') return item.titleRu || item.titleEn;
    return item.titleEn;
  };

  const newsItems = news || [];

  return (
      <>
        <section className="latest-news pt-115 pb-115">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-8 col-sm-7">
                <div className="section-title">
                  <span className="title-tag">{t('blog')}</span>
                  <h2>{t('newsFeeds')}</h2>
                </div>
              </div>

              <div className="col-lg-6 col-md-4 col-sm-5 d-none d-sm-block">
                <div className="latest-post-arrow arrow-style text-right flex justify-end gap-3">
                  <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition swiper-button-prev-custom">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition swiper-button-next-custom">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <Swiper
                  spaceBetween={24}
                  modules={[Autoplay, Navigation]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  slidesPerView={3}
                  navigation={{
                    prevEl: ".swiper-button-prev-custom",
                    nextEl: ".swiper-button-next-custom",
                  }}
                  pagination={{ clickable: true }}
                  loop={true}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  className="px-6"
              >
                {newsItems.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div
                          onClick={() => navigate(`/yangiliklar/${item.id}`)}
                          className="bg-white shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:cursor-pointer flex flex-col h-full">
                        <div
                            className="h-52 bg-cover bg-center"
                            style={{ backgroundImage: `url(${getImageUrl(item.images?.[0])})` }}
                        />
                        <div className="p-4 flex flex-col flex-grow">
                          <p className="text-gray-500 text-xs mb-3">
                            {formatDate(item.publishedAt)}
                          </p>
                          <h6 className="font-semibold text-gray-800 hover:text-yellow-500 transition flex-grow">
                            <button
                                onClick={() => navigate(`/yangiliklar/${item.id}`)}
                                className="block line-clamp-2 text-left hover:text-yellow-500 transition"
                            >
                              {getNewsTitle(item)}
                            </button>
                          </h6>
                          <button
                              onClick={() => navigate(`/yangiliklar/${item.id}`)}
                              className="inline-block mt-4 text-yellow-500 hover:text-yellow-600 transition font-medium text-sm text-left"
                          >
                            {t('findMore')} →
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </>
  );
};

export default LatestNews;