import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useGetGalleryQuery } from "../../../../lib/redux/services/galleryApi.js";

const BASE_URL = 'http://localhost:9090';

const translations = {
  en: {
    gallery: 'Gallery',
    all: 'All',
    videos: 'Videos',
    photos: 'Photos',
    noItems: 'No items to display',
  },
  uz: {
    gallery: 'Galeriya',
    all: 'Barchasi',
    videos: 'Videolar',
    photos: 'Rasmlar',
    noItems: 'Ko\'rsatish uchun mahsulot yo\'q',
  },
  ru: {
    gallery: 'Галерея',
    all: 'Все',
    videos: 'Видео',
    photos: 'Фото',
    noItems: 'Нет элементов для отображения',
  },
};

const CollectionShowcase = () => {
  const language = useSelector(state => state.language.current);
  const t = (key) => translations[language][key] || translations.en[key];

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [filterType, setFilterType] = useState("all"); // all, image, video
  const [currentPage, setCurrentPage] = useState(0);
  const { data: gallery } = useGetGalleryQuery();

  // Filter items based on selected type
  const filteredItems = useMemo(() => {
    if (!gallery) return [];

    if (filterType === "all") {
      return gallery;
    }
    return gallery.filter(item => item.mediaType === filterType);
  }, [gallery, filterType]);

  // Paginate - show 4 items at a time
  const displayedItems = filteredItems.slice(currentPage * 4, (currentPage + 1) * 4);
  const totalPages = Math.ceil(filteredItems.length / 4);

  const getImageUrl = (url) => {
    if (!url) return '';
    return url.startsWith('http') ? url : `${BASE_URL}${url}`;
  };

  const getYouTubeThumbnail = (youtubeUrl) => {
    // Extract video ID from YouTube URL
    const videoIdMatch = youtubeUrl.match(/embed\/([a-zA-Z0-9_-]+)/);
    if (videoIdMatch) {
      return `https://img.youtube.com/vi/${videoIdMatch[1]}/maxresdefault.jpg`;
    }
    return '';
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
    setCurrentPage(0); // Reset to first page when filter changes
  };

  const handleVideoClick = (item) => {
    if (item.mediaType === "video") {
      setSelectedVideo(item.url);
    }
  };

  // Helper function to determine grid class
  const getGridClass = (index) => {
    if (displayedItems.length === 1) return "col-lg-8";
    if (displayedItems.length === 2) return "col-lg-6 col-sm-6";
    if (displayedItems.length === 3 && index === 0) return "col-lg-8";
    if (displayedItems.length === 3 && index < 2) return "col-lg-6 col-sm-6";
    return "col-lg-6 col-sm-6";
  };

  return (
      <>
        <section
            className="room-type-section pt-115 pb-115 relative"
            style={{
              backgroundImage: "url(/assets/img/room-type/bg.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section-title text-lg-left text-center">
                  <h2>{t('gallery')}</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <ul
                    className="room-filter nav nav-pills justify-content-center justify-content-lg-end gap-2"
                    id="room-tab"
                    role="tablist"
                >
                  {[
                    { type: "all", label: t("all") },
                    { type: "video", label: t("videos") },
                    { type: "image", label: t("photos") },
                  ].map((item) => (
                      <li key={item.type} className="nav-item">
                        <button
                            onClick={() => handleFilterChange(item.type)}
                            className={`nav-link px-5 py-2.5 text-sm font-semibold rounded-md tracking-wide transition-all duration-300 ${
                                filterType === item.type
                                    ? "bg-yellow-400 text-black shadow-[0_0_15px_rgba(255,215,0,0.4)]"
                                    : "bg-gray-900 text-gray-300 border border-gray-700 hover:border-yellow-400 hover:text-yellow-300"
                            }`}
                        >
                          {item.label}
                        </button>
                      </li>
                  ))}
                </ul>

              </div>
            </div>

            <div className="tab-content mt-65" id="room-tabContent">
              <div className="tab-pane fade show active" id="relex" role="tabpanel">
                <div className="room-items">
                  <div className="row">
                    {displayedItems.length > 0 ? (
                        displayedItems.map((item, index) => (
                            <div
                                key={item.id}
                                className={`hover:cursor-pointer ${getGridClass(index)}`}
                                onClick={() => handleVideoClick(item)}
                            >
                              <div className="room-box">
                                <div
                                    className="room-bg"
                                    style={{
                                      backgroundImage: `url(${
                                          item.mediaType === "video"
                                              ? getYouTubeThumbnail(item.url)
                                              : getImageUrl(item.url)
                                      })`
                                    }}
                                />
                                <div className="room-content">
                                  <h4 className="truncate">{item.title}</h4>
                                </div>
                                <span className="room-link">
                            <i className="fal fa-arrow-right" />
                          </span>
                              </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                          <p className="text-gray-500">{t('noItems')}</p>
                        </div>
                    )}
                  </div>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-3">
                      {Array.from({ length: totalPages }).map((_, index) => (
                          <button
                              key={index}
                              onClick={() => setCurrentPage(index)}
                              className={`px-4 py-2 rounded transition-colors ${
                                  currentPage === index
                                      ? "bg-yellow-500 text-black"
                                      : "bg-gray-800 text-white hover:bg-gray-700"
                              }`}
                          >
                            {index + 1}
                          </button>
                      ))}
                    </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {selectedVideo && (
            <div
                className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
                onClick={() => setSelectedVideo(null)}
            >
              <div
                  className="bg-black p-4 rounded-lg relative w-full max-w-3xl border border-gray-800"
                  onClick={(e) => e.stopPropagation()}
              >
                <iframe
                    width="100%"
                    height="500"
                    src={selectedVideo}
                    title="Video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <button
                    onClick={() => setSelectedVideo(null)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
        )}
      </>
  );
};

export default CollectionShowcase;