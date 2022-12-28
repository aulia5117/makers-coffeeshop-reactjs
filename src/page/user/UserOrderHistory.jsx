import UserSidebar from "./components/UserSidebar";
import UserNavbar from "./components/UserNavbar";


export default function UserOrderHistory() {
    return (
        <>
            <UserNavbar />
            <UserSidebar />
            <main id="main" class="main">

                <div class="pagetitle">
                    <h1>History</h1>
                </div>
                {/* <!-- End Page Title --> */}

                <section class="section dashboard">
                    <div class="row">

                        <div class="card">
                            <div class="card-body my-2">

                                {/* <!-- Active Table --> */}
                                <table class="table table-borderless">
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
                                        <tr>
                                            <th scope="row">Nomer</th>
                                            <td>Waktu Order</td>
                                            <td>Jumlah Barang</td>
                                            <td>Total Harga</td>
                                            <td>Action</td>
                                        </tr>
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
