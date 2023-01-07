function Home() {
  return (
          <div className="home-parent">
  
              {/* Start Carousel */}
              <section>
                  <div
                      id="template-mo-zay-hero-carousel"
                      className="carousel slide"
                      data-bs-ride="carousel"
                      >
                      <ol className="carousel-indicators">
                          <li
                          data-bs-target="#template-mo-zay-hero-carousel"
                          data-bs-slide-to="0"
                          className="active"
                          ></li>
                          <li
                          data-bs-target="#template-mo-zay-hero-carousel"
                          data-bs-slide-to="1"
                          ></li>
                          <li
                          data-bs-target="#template-mo-zay-hero-carousel"
                          data-bs-slide-to="2"
                          ></li>
                      </ol>
                      <div className="carousel-inner">
                          <div className="carousel-item active">
                          <div className="container">
                              <div className="row p-5">
                              <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                  <img
                                  className="img-fluid"
                                  src={require("../../assets/img/bag-coffee.png")}
                                  alt=""
                                  />
                              </div>
                              <div className="col-lg-6 mb-0 d-flex align-items-center">
                                  <div className="text-align-left align-self-center">
                                  <h1 className="h1 text-success"><b>Qofi</b></h1>
                                  <h3 className="h2">Coffee, Kopi, dan Qofi</h3>
                                  <p>
                                      Qofi merupakan brand kopi yang menyediakan Kopi
                                  </p>
                                  </div>
                              </div>
                              </div>
                          </div>
                          </div>
                          <div className="carousel-item">
                          <div className="container">
                              <div className="row p-5">
                              <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                  <img
                                  className="img-fluid"
                                  src={require("../../assets/img/bag-coffee.png")}
                                  alt=""
                                  />
                              </div>
                              <div className="col-lg-6 mb-0 d-flex align-items-center">
                                  <div className="text-align-left">
                                  <h1 className="h1 text-success"><b>Qofi</b></h1>
                                  <h3 className="h2">Coffee, Kopi, dan Qofi</h3>
                                  <p>
                                      Qofi merupakan brand kopi yang menyediakan Kopi
                                  </p>
                                  </div>
                              </div>
                              </div>
                          </div>
                          </div>
                          <div className="carousel-item">
                          <div className="container">
                              <div className="row p-5">
                              <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                  <img
                                  className="img-fluid"
                                  src="./assets/img/bottle-coffee.png"
                                  alt=""
                                  />
                              </div>
                              <div className="col-lg-6 mb-0 d-flex align-items-center">
                                  <div className="text-align-left">
                                  <h1 className="h1 text-success"><b>Qofi</b></h1>
                                  <h3 className="h2">Coffee, Kopi, dan Qofi</h3>
                                  <p>
                                      Qofi merupakan brand kopi yang menyediakan Kopi
                                  </p>
                                  </div>
                              </div>
                              </div>
                          </div>
                          </div>
                      </div>
                      <a
                          className="carousel-control-prev text-decoration-none w-auto ps-3"
                          href="#template-mo-zay-hero-carousel"
                          role="button"
                          data-bs-slide="prev"
                      >
                          <i className="fas fa-chevron-left"></i>
                      </a>
                      <a
                          className="carousel-control-next text-decoration-none w-auto pe-3"
                          href="#template-mo-zay-hero-carousel"
                          role="button"
                          data-bs-slide="next"
                      >
                          <i className="fas fa-chevron-right"></i>
                      </a>
                  </div>
              </section>
              {/* End Carousel */}
  
              {/* Start Tipe Kopi */}
              <section className="container py-5">
                  <div className="row text-center pt-3">
                      <div className="col-lg-6 m-auto">
                      <h1 className="h1">Kopi Kita</h1>
                      <p>
                          Kita punya kopi andalan
                      </p>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-12 col-md-4 p-5 mt-3">
                      <a 
                          ><img
                          src={require("../../assets/img/glass-coffee.png")}
                          className="rounded-circle img-fluid border"
                      /></a>
                      <h5 className="text-center mt-3 mb-3">Kopi Biasa</h5>
                      </div>
                      <div className="col-12 col-md-4 p-5 mt-3">
                      <a
                          ><img
                          src={require("../../assets/img/bag-coffee.png")}
                          className="rounded-circle img-fluid border"
                      /></a>
                      <h2 className="h5 text-center mt-3 mb-3">Kopi Bubuk</h2>
                      </div>
                      <div className="col-12 col-md-4 p-5 mt-3">
                      <a 
                          ><img
                          src={require("../../assets/img/bottle-coffee.png")}
                          className="rounded-circle img-fluid border"
                      /></a>
                      <h2 className="h5 text-center mt-3 mb-3">Kopi Botol</h2>
                      </div>
                  </div>
                  </section>
                  {/* End Tipe Kopi */}
                  
              </div>
      )
  }
  
  
  export default Home;