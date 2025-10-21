const CollectionSlider = () => (
  <>
    <section className="room-slider">
      <div className="container-fluid p-0">
        <div className="row rooms-slider-one">
          <div className="col">
            <div className="slider-img" style={{backgroundImage: 'url(/assets/img/room-slider/01.jpg)'}}>
            </div>
          </div>
          <div className="col">
            <div className="slider-img" style={{backgroundImage: 'url(/assets/img/room-slider/02.jpg)'}}>
            </div>
          </div>
          <div className="col">
            <div className="slider-img" style={{backgroundImage: 'url(/assets/img/room-slider/03.jpg)'}}>
            </div>
          </div>
          <div className="col">
            <div className="slider-img" style={{backgroundImage: 'url(/assets/img/room-slider/04.jpg)'}}>
            </div>
          </div>
          <div className="col">
            <div className="slider-img" style={{backgroundImage: 'url(/assets/img/room-slider/05.jpg)'}}>
            </div>
          </div>
        </div>
      </div>
      <div className="rooms-content-wrap">
        <div className="container">
          <div className="row justify-content-center justify-content-md-start">
            <div className="col-xl-4 col-lg-5 col-sm-8">
              <div className="room-content-box">
                <div className="slider-count" />
                <div className="slider-count-big" />
                <div className="room-content-slider">
                  <div className="single-content">
                    <div className="icon">
                      <i className="flaticon-necklace" />
                    </div>
                    <h3><a href="#">Gold Neckless</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna.</p>
                  </div>
                  <div className="single-content">
                    <div className="icon">
                      <i className="flaticon-ring" />
                    </div>
                    <h3><a href="#">Diamond Ring</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna.</p>
                  </div>
                  <div className="single-content">
                    <div className="icon">
                      <i className="flaticon-bracelet-2" />
                    </div>
                    <h3><a href="#">Silver Bracelet</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna.</p>
                  </div>
                  <div className="single-content">
                    <div className="icon">
                      <i className="flaticon-necklace" />
                    </div>
                    <h3><a href="#">Diamond Necklace</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna.</p>
                  </div>
                  <div className="single-content">
                    <div className="icon">
                      <i className="flaticon-earrings" />
                    </div>
                    <h3><a href="#">Gold Earrings</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default CollectionSlider;
