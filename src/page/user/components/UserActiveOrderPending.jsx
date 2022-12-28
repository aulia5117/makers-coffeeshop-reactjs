import { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";

const UserActiveOrderPending = ({ item }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {item.map(user => (
                <tr key={user.order_id}>
                    <th scope="row">#</th>
                    <td>{user.order_status}</td>
                    <td>{user.order_date}</td>
                    <td>{user.jumlah_barang} Barang</td>
                    <td>IDR {user.total_harga}</td>
                    <td>
                        <Button size="sm" onClick={handleShow} id={user.order_id}>
                            Detail
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Detail Order</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Table borderless>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td colSpan={2}>Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Modal.Body>
                        </Modal>

                        <Button variant="danger" size="sm" id={user.order_id}>
                            Cancel
                        </Button>
                    </td>
                </tr>

            ))}
        </>
    );
}

export default UserActiveOrderPending;