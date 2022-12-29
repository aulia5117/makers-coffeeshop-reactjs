import { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import UserPendingDetailOrder from "./UserPendingDetailOrder";

const UserPendingOrder = ({ item }) => {

    const [orderDetail, setOrderDetail] = useState([])

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);


    const handleGetId = (e) => {
        const buttonId = e.currentTarget.id
        const requestOptions = {
            method: 'GET'
            // redirect: 'follow'
        };
        fetch("http://127.0.0.1:5000/order/get_orderdetail/" + buttonId, requestOptions)
            .then(response => response.json())
            .then((result) => setOrderDetail(result))
    }

    const handleCancelOrder = (e) => {
        const token = document.cookie;
        const buttonId = e.currentTarget.id
        if (token) {

            const split = token.split(".");
            let parsedToken = JSON.parse(atob(split[1]));

            let username = parsedToken["username"]
            let password = parsedToken["password"]

            // console.log(username)

            const myHeaders = new Headers();
            myHeaders.append("Authorization", "Basic " + btoa(username + ":" + password));
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "order_id": buttonId
            });

            var requestOptions = {
                method: 'DELETE',
                headers: myHeaders,
                body: raw,
                //   redirect: 'follow'
            };

            fetch("http://127.0.0.1:5000/order/cancel_order", requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    alert("Order kamu berhasil di cancel")
                    window.location.reload()
                })
                .catch(error => console.log('error', error));
        }
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {item.map((item) => {

                if (item.order_status === 'pending') {
                    return <tr id="order-id" key={item.order_id}>
                        <th scope="row"></th>
                        <td>{item.order_status}
                            <span hidden>{item.order_id}</span>
                        </td>
                        <td>{item.order_date}</td>
                        <td>{item.jumlah_barang} Barang</td>
                        <td>IDR {item.total_harga}</td>
                        <td>

                            <Button id={item.order_id} size="sm" onClick={(id) => { handleShow(); handleGetId(id) }}>
                                Detail
                            </Button>
                            <Modal size='lg' show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Detail Order</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {orderDetail && <UserPendingDetailOrder item={orderDetail} />}
                                </Modal.Body>
                            </Modal>
                            <span> </span>
                            {/* Cancel Order */}

                            <Button size="sm" variant="danger" onClick={handleShow3}>
                                Close
                            </Button>
                            <Modal show={show3} onHide={handleClose3}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Konfirmasi</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Apakah anda yakin ingin <b>Membatalkan</b> pesanan ini ?
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button id={item.order_id} size="sm" variant="danger" onClick={handleCancelOrder}>
                                        Cancel
                                    </Button>
                                    <Button size="sm" variant="secondary" onClick={handleClose3}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </td>
                    </tr>
                }
            })}
        </>
    );
}

export default UserPendingOrder;