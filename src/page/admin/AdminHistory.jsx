import { useEffect, useState } from "react"

import AdminCompletedOrder from "./components/AdminCompletedOrder";


export default function AdminHistory() {

    const [historyFetch, setHistoryFetch] = useState("")
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

    useEffect(() => {
        fetch("http://127.0.0.1:5000/order/get_all_order", requestOptions)
            .then(response => response.json())
            .then((result) => {
                setHistoryFetch(result)
            })
    },[])
    // console.log(historyFetch)

    return (
        <>

            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>History</h1>
                </div>
                {/* <!-- End Page Title --> */}

                <section className="section dashboard">
                    <div className="row">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">All Completed Order History</h5>

                                {/* <!-- Active Table --> */}
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nama User</th>
                                            <th scope="col">Order Status</th>
                                            <th scope="col">Waktu Order</th>
                                            <th scope="col">Jumlah Barang</th>
                                            <th scope="col">Total Harga</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="order-selesai">
                                        {historyFetch && <AdminCompletedOrder item={historyFetch} />}
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