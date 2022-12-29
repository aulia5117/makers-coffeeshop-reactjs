import { Button, Modal } from "react-bootstrap";
import AdminActiveDetailOrder from "./AdminActiveDetailOrder";
import { useState } from "react";

const AdminActiveOrder = ({ item }) => {

    const [orderDetail, setOrderDetail] = useState([])

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

    const handleFinishOrder = (e) => {
        const buttonId = e.currentTarget.id
        const requestOptions = {
            method: 'PUT',
            // headers: myHeaders,
            redirect: 'follow'
        };

          fetch(`http://127.0.0.1:5000/order/check_order_activate/${buttonId}`, requestOptions)
            .then(response => response.json())
            .then((result) => 
            {
              console.log(result)
              alert(`Order Diselesaikan`)
              window.location.reload()
            
            })
    }

    const handleCancelOrder = (e) => {
        const buttonId = e.currentTarget.id
        const requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };

        fetch(`http://127.0.0.1:5000/order/admin_cancel_order/${buttonId}`, requestOptions)
            .then(response => response.json())
            .then((result) => {
                console.log(result)
                alert("Order Berhasil di Cancel")
                window.location.reload()
            })
            .catch(error => console.log('error', error));
    }




    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    return (
        <>
            {item.map((item) => {

                if (item.order_status === 'activate') {
                    return <tr key={item.order_id}>
                        <th scope="row"></th>
                        <td>{item.nama_user}
                            <span hidden>{item.user_id}</span>
                        </td>
                        <td>{item.order_status}
                            <span hidden>{item.order_id}</span>
                        </td>
                        <td>{item.order_date}</td>
                        <td>{item.jumlah_barang} Barang</td>
                        <td>IDR {item.total_harga}</td>
                        <td>
                            {/* Detail Order */}
                            <Button id={item.order_id} size="sm" onClick={(id) => { handleShow(); handleGetId(id) }}>
                                Detail
                            </Button>
                            <Modal id={item.item_id} size="lg" show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Detail Order</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <AdminActiveDetailOrder item={orderDetail} />
                                </Modal.Body>
                            </Modal>
                            <span> </span>

                            {/* Accept Order */}
                            <Button id={item.order_id} size="sm" variant="success" onClick={handleShow2}>
                                Finish
                            </Button>
                            <Modal show={show2} onHide={handleClose2}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Konfirmasi</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Apakah anda yakin ingin <b>Menyelesaikan</b> pesanan ini ?
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button id={item.order_id} size="sm" variant="success" onClick={handleFinishOrder}>
                                        Finish
                                    </Button>
                                    <Button size="sm" variant="secondary" onClick={handleClose2}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <span> </span>
                            <Button size="sm" variant="danger" onClick={handleShow3}>
                                Close
                            </Button>

                            {/* Cancel Order */}
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
    )
}

export default AdminActiveOrder;