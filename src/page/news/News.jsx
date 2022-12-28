import { ReactComponent as HeroImage} from '../../assets/img/about-hero.svg' 

export default function News() {
    return (
        <>
            <section class="bg-success py-5">
                <div class="container">
                    <div class="row align-items-center py-5">
                        <div class="col-md-8 text-white">
                            <h1>Under Maintenance</h1>
                            <p>
                                Halaman sedang dibangun. Silahkan kunjungi lain waktu
                            </p>
                        </div>
                        <div class="col-md-4">
                            <HeroImage />
                        </div>
                    </div>
                </div>
            </section>

            <section className="container py-5">
                <div className="row text-center pt-5 pb-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Layanan Kami</h1>
                        <p>
                            Layanan dari Qofi merupakan layanan terbaik yang selalu kami berikan dalam setiap perjalanan anda menggunakan Qofi
                        </p>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center"><i className="fa fa-truck fa-lg"></i></div>
                            <h2 className="h5 mt-4 text-center">Antar Produk Sampai Tujuan</h2>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center"><i className="fas fa-exchange-alt"></i></div>
                            <h2 className="h5 mt-4 text-center">Transaksi Terluas</h2>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center"><i className="fa fa-percent"></i></div>
                            <h2 className="h5 mt-4 text-center">Diskon</h2>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center"><i className="fa fa-user"></i></div>
                            <h2 className="h5 mt-4 text-center">Layanan Servis Terbaik</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}