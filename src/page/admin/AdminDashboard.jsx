import { useEffect, useState } from "react"
import AdminTop5User from "./components/AdminDashboard components/AdminTop5User"
import AdminTop5Item from "./components/AdminDashboard components/AdminTop5Item"

export default function AdminDashboard() {

    const [top5User, setTop5User] = useState()
    const [top5Item, setTop5Item] = useState("")
    const token = document.cookie


    useEffect(() => {
        if (token) {

            const requestOptionsUser = {
                method: 'GET'
                // redirect: 'follow'
            };

            fetch("http://127.0.0.1:5000/reporting/top5_user", requestOptionsUser)
                .then(response => response.json())
                .then((resultUser) => {
                    console.log(resultUser)
                    setTop5User(resultUser)
                })
                .catch(error => "fetching error" + error)

                const requestOptionsItem = {
                    method: 'GET'
                    // redirect: 'follow'
                  };
            
                  fetch("http://127.0.0.1:5000/reporting/top5_item", requestOptionsItem)
                    .then(response => response.json())
                    .then((resultItem) => {
                        console.log(resultItem)
                        setTop5Item(resultItem)
                    })
                }
    },[])

    return (
        <>

            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Dashboard</h1>
                </div>
                {/* <!-- End Page Title --> */}

                <section className="section dashboard">
                    <div className="row">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Top 5 User</h5>

                                {/* <!-- Active Table --> */}
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nama</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Total Pembelian</th>
                                        </tr>
                                    </thead>
                                    <tbody id="top-5-user">
                                        {top5User && <AdminTop5User item={top5User} />}
                                    </tbody>
                                </table>
                                {/* <!-- End Tables without borders --> */}

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Top 5 Item</h5>

                                {/* <!-- Active Table --> */}
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nama Item</th>
                                            <th scope="col">Harga Item (Satuan)</th>
                                            <th scope="col">Jumlah Terbeli</th>
                                        </tr>
                                    </thead>
                                    <tbody id="top-5-item">
                                    {top5Item && <AdminTop5Item item={top5Item} />}
                                    </tbody>
                                </table>
                                {/* <!-- End Tables without borders --> */}

                            </div>
                        </div>

                    </div>
                </section>

            </main>
            {/* <!-- End #main --> */}

        </>

    )
}