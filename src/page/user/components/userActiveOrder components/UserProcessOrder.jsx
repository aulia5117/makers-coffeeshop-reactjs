import { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import UserProcessDetailOrder from "./UserProcessDetailOrder";


const UserProcessOrder = ({ item }) => {

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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {item.map((item) => {

                if (item.order_status === 'activate') {
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
                                    {orderDetail && <UserProcessDetailOrder item={orderDetail} />}
                                </Modal.Body>
                            </Modal>
                            <span> </span>

                            
                        </td>
                    </tr>
                }
            })}
        </>
    );
}

export default UserProcessOrder;