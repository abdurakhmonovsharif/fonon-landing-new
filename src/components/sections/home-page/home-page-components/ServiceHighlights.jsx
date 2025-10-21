const ServiceHighlights = () => (
    <>
      <section className="service-sec pt-115 pb-85">
        <div className="container">
          <p className="text-xl text-gray-200 text-center mb-6">
            Be the first to discover captivating new designs, exclusive events,
            boutique openings, and so much more.
          </p>

          <div className="flex w-full justify-center py-4">
            <div className="relative w-3/4">
              <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full lg:w-1/3 pl-4 pr-28 py-3 bg-gray-900 text-gray-200 placeholder-gray-400 border border-gray-600 focus:border-gray-400 focus:ring-0 focus:outline-none transition"
              />

              <button
                  className="absolute top-1/2 right-1.5 -translate-y-1/2
  px-2 py-1 text-xs                /* phones */
  sm:px-4 sm:py-2 sm:text-sm       /* tablets */
  md:px-6 md:py-3 md:text-base     /* laptops/desktops */
  lg:px-8 lg:py-4 lg:text-lg       /* large screens */
  xl:px-10 xl:py-5 xl:text-xl      /* extra large screens */
  rounded-full bg-amber-900 text-white font-medium
  transition-colors duration-300 ease-in-out
  hover:bg-white hover:!text-amber-900"
              >
                Subscribe
              </button>





            </div>
          </div>
        </div>
      </section>
    </>

);

export default ServiceHighlights;
