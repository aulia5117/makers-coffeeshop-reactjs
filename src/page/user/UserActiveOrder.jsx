
import { useEffect, useState } from "react"
import UserActiveOrderPending from "./components/UserActiveOrderPending"

export default function UserActiveOrder() {

    const token = document.cookie
    const [userOrderPending, setOrderPending] = useState("")
    const [userOrderActive, setOrderActive] = useState("")

    useEffect(() => {
        if (token) {

            const split = token.split(".");
            let parsedToken = JSON.parse(atob(split[1]));
            let userId = parsedToken["id"]

            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
          
          fetch(`http://127.0.0.1:5000/order/get_order/${userId}`, requestOptions)
            .then(response => response.json())
            .then((result) => {
                setOrderPending(result)
                setOrderActive(result)
                console.log(result)
        })
        }
    },[])

    return (
        <>
            
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Order</h1>
                </div>
                {/* <!-- End Page Title --> */}

                <section className="section dashboard">
                    <div className="row">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Order Pending</h5>

                                {/* <!-- Active Table --> */}
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Order Status</th>
                                            <th scope="col">Waktu Order</th>
                                            <th scope="col">Total Barang</th>
                                            <th scope="col">Total Harga</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {userOrderPending && <UserActiveOrderPending item={userOrderPending}/>}
                                    </tbody>
                                </table>
                                {/* <!-- End Tables without borders --> */}

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Order Aktif</h5>

                                {/* <!-- Active Table --> */}
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>

                                            <th scope="col">Order Status</th>
                                            <th scope="col">Waktu Order</th>
                                            <th scope="col">Jumlah Barang</th>
                                            <th scope="col">Total Harga</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="order-aktif">
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
