
import AdminNavbar from "./components/AdminNavbar";
import AdminSidebar from "./components/AdminSidebar";

export default function AdminCreateMenu() {
    return (
        <>
            <AdminNavbar />
            <AdminSidebar />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Create Menu</h1>
                </div>
                {/* <!-- End Page Title --> */}

                <section className="section dashboard">
                    <div className="row">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"></h5>

                                {/* <!-- Start Form --> */}
                                {/* <!-- <form action="" className="row g-3"> --> */}
                                <div className="col-12">
                                    <label for="input-nama-item" className="form-label">Nama Item</label>
                                    <input type="text" className="form-control" id="input-nama-item"/>
                                </div>
                                <div className="col-12">
                                    <label for="input-deskripsi" className="form-label">Deskripsi</label>
                                    <textarea name="input-deskripsi" className="form-control" id="input-deskripsi"></textarea>
                                </div>
                                <div className="col-12">
                                    <label for="input-harga-item" className="form-label">Harga Item (IDR)</label>
                                    <input type="number" className="form-control" id="input-harga-item" min="1000" value="1000" step="1000"/>
                                </div>
                                <div className="col-12">
                                    <label for="input-jumlah-item" className="form-label">Jumlah Item</label>
                                    <input type="number" className="form-control" id="input-jumlah-item" min="1" value="1"/>
                                </div>
                                <div className="col-12 my-3 dropdown">
                                    <label for="input-kategori" className="form-label">Kategori</label>
                                    <select id="input-kategori" name="input-kategori">
                                        <option value="id">Kategori</option>
                                    </select>
                                </div>
                                <div className="text-center">
                                    <button onclick="postMenu()" className="btn btn-primary">Submit</button>
                                    {/* <!-- <button type="reset" className="btn btn-secondary">Reset</button> --> */}
                                </div>
                                {/* <!-- </form> -->
                            <!-- End Form --> */}

                        </div>
                    </div>

                </div>
            </section>

        </main>
        </>
    )


}