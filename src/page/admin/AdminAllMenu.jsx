import { useEffect, useState } from "react"
import AdminGetAllMenu from "./components/AdminGetAllMenu";


export default function AdminAllMenu() {

    const [allMenu, setAllMenu] = useState("")

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://127.0.0.1:5000/get_all_item", requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result)
                setAllMenu(result)
            })
    },[])

    return (
        <>
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>All Item List</h1>
                </div>
                {/* <!-- End Page Title --> */}

                <section className="section dashboard">
                    <div className="row">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"> </h5>

                                {/* <!-- Active Table --> */}
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nama</th>
                                            <th scope="col">Deskripsi</th>
                                            <th scope="col">Harga Per Satuan</th>
                                            <th scope="col">Kategori</th>
                                            <th scope="col">Stok Tersedia</th>
                                            <th scope="col">Total Terbeli</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="item-table">
                                        {allMenu && <AdminGetAllMenu item={allMenu} />}
                                    </tbody>
                                </table>
                                {/* <!-- End Tables without borders --> */}

                            </div>
                        </div>


                    </div>
                </section>

            </main>
        </>

    )
}