import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { content } from '../data/content';

interface GalleryProps {
  currentLanguage: 'hr' | 'en' | 'it';
  apartmentId?: number;
  setPageSeo?: (seo: any) => void;
}

const Gallery: React.FC<GalleryProps> = ({
  currentLanguage,
  apartmentId = 1,
  setPageSeo,
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const apartmentTitle =
    apartmentId === 2
      ? content.aboutSecond[currentLanguage].title
      : content.about[currentLanguage].title;

  const isRenovatingSecond =
    apartmentId === 2 &&
    (content.aboutSecond[currentLanguage] as any)?.renovation?.active;

  // Get gallery data based on apartmentId
  const galleryKey = apartmentId === 2 ? 'gallery2' : 'gallery';
  const galleryContent = (content as any)[galleryKey]?.[currentLanguage] || {};

  const images = (content as any)[`${galleryKey}Images`]?.[
    apartmentId === 2 ? '2' : '1'
  ] || [
    {
      src: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Apartmani Markota Exterior',
    },
    {
      src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Living Room',
    },
    {
      src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bedroom',
    },
    {
      src: 'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Kitchen',
    },
    {
      src: 'https://images.pexels.com/photos/261181/pexels-photo-261181.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Swimming Pool',
    },
    {
      src: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Garden View',
    },
    {
      src: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Terrace',
    },
    {
      src: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bathroom',
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setCurrentSlide(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % images.length);
  };

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // When this section mounts or language/apartmentId changes, allow it to set contextual SEO
  React.useEffect(() => {
    if (typeof setPageSeo === 'function') {
      const seoKey = apartmentId === 2 ? 'gallery2' : 'gallery';
      const seo = (content as any).seoPages?.[seoKey]?.[currentLanguage];
      if (seo) setPageSeo(seo);
    }
  }, [currentLanguage, apartmentId, setPageSeo]);

  if (isRenovatingSecond) return null;

  return (
    <section
      id={apartmentId === 2 ? 'gallery2' : 'gallery'}
      className="py-8 md:py-12 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 hidden md:block">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {apartmentTitle}{' '}
            {currentLanguage === 'hr'
              ? 'Galerija'
              : currentLanguage === 'it'
                ? 'Galleria'
                : 'Gallery'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {currentLanguage === 'hr'
              ? `Otkrij elegantne i udobne prostore ${apartmentTitle} kroz ovu fototeku.`
              : `Discover the elegant and comfortable spaces of ${apartmentTitle} through this photo gallery.`}
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-6 md:mb-8">
          <div className="relative w-full">
            <div className="overflow-hidden rounded-lg aspect-square bg-gray-200">
              <img
                src={images[carouselIndex].src}
                alt={images[carouselIndex].alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevCarousel}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextCarousel}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all z-10"
            >
              <ChevronRight size={24} />
            </button>

            {/* Carousel Dots */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 bg-black/50 px-3 py-1 rounded-full">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCarouselIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === carouselIndex ? 'bg-white w-6' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Carousel Counter */}
            <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
              {carouselIndex + 1} / {images.length}
            </div>
          </div>

          {/* Mobile Tap to Enlarge */}
          <button
            onClick={() => openLightbox(carouselIndex)}
            className="mt-3 w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg text-sm transition-colors"
          >
            {currentLanguage === 'hr'
              ? 'Prikaži veću sliku'
              : currentLanguage === 'it'
                ? 'Visualizza immagine grande'
                : 'View larger'}
          </button>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((image: any, index: number) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto">
                      <span className="text-lg">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X size={32} />
            </button>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft size={48} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight size={48} />
            </button>

            <div className="max-w-4xl max-h-4xl mx-4">
              <img
                src={images[currentSlide].src}
                alt={images[currentSlide].alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
              {currentSlide + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
