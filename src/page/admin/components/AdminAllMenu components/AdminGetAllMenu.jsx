import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import AdminMenuDetail from "./AdminMenuDetail";

const AdminGetAllMenu = ({ item }) => {

    // console.log(item)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [buttonId, setButtonId] = useState('')

    const handleId = (e) => {
        setButtonId(e.currentTarget.id)
    }

    const handleDeleteItem = (e) => {
        const buttonId = e.currentTarget.id
        const requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };

        fetch(`http://127.0.0.1:5000/item/delete_item/${buttonId}`, requestOptions)
            .then(response => response.json())
            .then((result) => {
                console.log(result)
                alert("Item berhasil di delete")
                window.location.reload()
            })
            .catch(error => console.log('error', error));
    }

    const [menuDetail, setMenuDetail] = useState([])

    const tes = (e) => {
        const buttonId = e.currentTarget.id
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:5000/get_item/" + buttonId, requestOptions)
            .then(response => response.json())
            .then(result => {
                setMenuDetail(result)
                
            })
    }

    const setCookie = (e) => {
        const buttonId = e.currentTarget.id
        let date = new Date();
        date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = 'tes' + "=" + buttonId + "; " + expires + "; path=/";
        };

    console.log(menuDetail)


    return (
        <>
            {item.map(item =>
            (
                <tr key={item.item_id}>
                    <th scope="row"></th>
                    <td>{item.nama_item}</td>
                    <td>{item.deskripsi}</td>
                    <td>IDR {item.harga_item}</td>
                    <td>{item.kategori}</td>
                    <td>{item.jumlah_item} Stok</td>
                    <td>{item.jumlah_terbeli} Barang</td>
                    <td>

                        <Button id={item.item_id} size="sm" variant="warning" onClick={(id) => { handleShow(); tes(id) }}>
                            Update
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                            <AdminMenuDetail id={buttonId} menuDetail={menuDetail}/>
                        </Modal>


                        {/* Cancel Order */}
                        <Button size="sm" variant="danger" onClick={handleShow3}>
                            Delete
                        </Button>
                        <Modal show={show3} onHide={handleClose3}>
                            <Modal.Header closeButton>
                                <Modal.Title>Konfirmasi</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Apakah anda yakin ingin <b>Menghapus</b> item ini ?
                            </Modal.Body>
                            <Modal.Footer>
                                <Button id={item.item_id} size="sm" variant="danger" onClick={handleDeleteItem}>
                                    Delete
                                </Button>
                                <Button size="sm" variant="secondary" onClick={handleClose3}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </td>
                </tr>
            ))}
        </>
    )
}

export default AdminGetAllMenu;