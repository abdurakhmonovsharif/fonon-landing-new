import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const BrandDynamicPage = ({ title, heroImage, sections, galleryImages }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    const handlePrev = () => {
        setSelectedImageIndex((prev) =>
            prev === 0 ? galleryImages.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setSelectedImageIndex((prev) =>
            prev === galleryImages.length - 1 ? 0 : prev + 1
        );
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        setTouchEnd(e.changedTouches[0].clientX);
        handleSwipe();
    };

    const handleSwipe = () => {
        if (touchStart - touchEnd > 50) {
            // Swiped left
            handleNext();
        }
        if (touchEnd - touchStart > 50) {
            // Swiped right
            handlePrev();
        }
    };

    const handleKeyDown = (e) => {
        if (selectedImageIndex === null) return;
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'Escape') setSelectedImageIndex(null);
    };

    React.useEffect(() => {
        if (selectedImageIndex !== null) {
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }
    }, [selectedImageIndex]);

    return (
        <div className="min-h-screen bg-black/40 text-gray-100 py-3">
            <div className="max-w-4xl mx-auto px-6 py-20">
                <header className="mb-16">
                    <h1 className="text-5xl font-light mb-3 text-white">{title}</h1>
                    <div className="w-16 h-px bg-white/20"></div>
                </header>

                {heroImage && (
                    <div className="mb-16">
                        <img
                            src={heroImage}
                            alt={title}
                            className="w-full h-96 object-cover"
                        />
                    </div>
                )}

                <article className="space-y-8 text-gray-300 leading-relaxed py-4">
                    {sections.map((section, index) => (
                        <div key={index}>
                            {section.heading && (
                                <h2 className="text-2xl font-light text-white mt-16 mb-8">
                                    {section.heading}
                                </h2>
                            )}
                            {section.paragraphs.map((paragraph, pIndex) => (
                                <p key={pIndex} className="py-3">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    ))}
                </article>

                {galleryImages && galleryImages.length > 0 && (
                    <div className="mt-24">
                        <div className="grid grid-cols-3 gap-4">
                            {galleryImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="overflow-hidden aspect-square cursor-pointer"
                                    onClick={() => handleImageClick(index)}
                                >
                                    <img
                                        src={image}
                                        alt={`${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Modal Image Viewer */}
            {selectedImageIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
                    onClick={() => setSelectedImageIndex(null)}
                >
                    <div
                        className="relative w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <img
                            src={galleryImages[selectedImageIndex]}
                            alt={`Image ${selectedImageIndex + 1}`}
                            className="max-w-full max-h-full object-contain"
                        />

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImageIndex(null)}
                            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
                        >
                            <X size={32} />
                        </button>

                        {/* Previous Button */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors hover:scale-125"
                        >
                            <ChevronLeft size={40} />
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors hover:scale-125"
                        >
                            <ChevronRight size={40} />
                        </button>

                        {/* Image Counter */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
                            {selectedImageIndex + 1} / {galleryImages.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BrandDynamicPage;