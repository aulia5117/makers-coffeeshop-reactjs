import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";

const AdminGetAllMenu = ({ item }) => {

    console.log(item)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [menuDetail, setMenuDetail] = useState([])

    const [inputId, setInputId] = useState()


    const handleDetail = (e) => {
        e.preventDefault()
        const buttonId = e.currentTarget.id
        setInputId(buttonId)
        console.log(inputId)
    }


    useEffect((inputId) => {
        if (inputId) {
            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("http://127.0.0.1:5000/get_item/" + inputId, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    setMenuDetail(result)
                })
        }

    }, [])




    const [namaItem, setNamaItem] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [hargaItem, setHargaItem] = useState("");
    const [jumlahItem, setJumlahItem] = useState("");




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

                        < Button variant="warning" value={item.item_id} id={item.item_id} size="sm" 
                        onClick={(id) => { 
                            
                            handleShow(); 
                            handleDetail(id) 
                        
                        }
                        }>
                            Update
                        </Button >
                        <Modal id={item.item_id} size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Detail Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="col-12">
                        <label htmlFor="input-nama-item" className="form-label">Nama Item</label>
                        <input defaultValue={menuDetail[0]?.nama_item || ''} type="text" className="form-control" id="input-nama-item" onChange={e => setNamaItem(e.target.value)} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="input-deskripsi" className="form-label">Deskripsi</label>
                        <textarea defaultValue={menuDetail[0]?.deskripsi || ''} name="input-deskripsi" className="form-control" id="input-deskripsi" onChange={e => setDeskripsi(e.target.value)}></textarea>
                    </div>
                    <div className="col-12">
                        <label htmlFor="input-harga-item" className="form-label">Harga Item (IDR)</label>
                        <input defaultValue={menuDetail[0]?.harga_item || ''} type="number" className="form-control" id="input-harga-item" min="1000" step="1000" onChange={e => setHargaItem(e.target.value)} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="input-jumlah-item" className="form-label">Jumlah Item</label>
                        <input defaultValue={menuDetail[0]?.jumlah_item || ''} type="number" className="form-control" id="input-jumlah-item" onChange={e => setJumlahItem(e.target.value)} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button size='sm' variant='warning'>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
                        <Button size="sm" variant="danger">
                            Delete
                        </Button>

                    </td>
                </tr>
            ))}
        </>
    )
}

export default AdminGetAllMenu;