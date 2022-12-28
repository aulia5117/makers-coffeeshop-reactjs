import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AdminCompletedOrderDetail from "./AdminCompletedOrderDetail";


const AdminCompletedOrder = ({ item }) => {

    const [orderDetail, setOrderDetail] = useState([])

    const requestOptions = {
        method: 'GET'
        // redirect: 'follow'
    };

    
    const handleGetId = (e) => {
        const buttonId = e.currentTarget.id
        fetch("http://127.0.0.1:5000/order/get_orderdetail/"+buttonId, requestOptions)
            .then(response => response.json())
            .then((result) => setOrderDetail(result))
     }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            {item.map((item) => {

                if (item.order_status === 'completed') {
                    return <tr id="order-id" key={item.order_id}>
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
                            <Button id={item.order_id} size="sm" onClick={(id) => { handleShow();handleGetId(id) }}>
                                Detail
                            </Button>
                            <Modal size='lg' show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Detail Order</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <AdminCompletedOrderDetail item={orderDetail}/>

                                </Modal.Body>
                            </Modal>

                        </td>
                    </tr>
                }
            })}
        </>
    )
}

export default AdminCompletedOrder;