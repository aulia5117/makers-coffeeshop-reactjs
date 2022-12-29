import { useEffect, useState } from "react";
import UserCompletedOrder from "./components/userOrderHistory components/UserCompletedOrder";


export default function UserOrderHistory() {

    const [historyFetch, setHistoryFetch] = useState([])

    const token = document.cookie
    useEffect(() => {
        if (token) {

            const split = token.split(".");
            let parsedToken = JSON.parse(atob(split[1]));
    
            let username = parsedToken["username"]
            let password = parsedToken["password"]
            let userId = parsedToken["id"]
            // console.log(username)
    
            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
          
          fetch(`http://127.0.0.1:5000/order/get_order/${userId}`, requestOptions)
            .then(response => response.json())
            .then((result) => {
                setHistoryFetch(result)
            })
        }
    },[]
    )
    

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
                            <div className="card-body my-2">

                                {/* <!-- Active Table --> */}
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Waktu Order</th>
                                            <th scope="col">Total Barang</th>
                                            <th scope="col">Total Harga</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="order-history">
                                        {historyFetch && <UserCompletedOrder item={historyFetch}/>}
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
