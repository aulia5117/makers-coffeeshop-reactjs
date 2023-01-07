import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function AdminMenuDetail({ menuDetail, modalShow, handleClose, buttonId }) {

    const token = document.cookie
    const split = token.split(';')

    // console.log(buttonId)

    // const [menuDetail, setMenuDetail] = useState([])

  
        // if (typeof buttonId !== 'undefined') {
        //     console.log(buttonId)
        //     const requestOptions = {
        //         method: 'GET',
        //         redirect: 'follow'
        //     };

        //     fetch("http://127.0.0.1:5000/get_item/" + buttonId, requestOptions)
        //         .then(response => response.json())
        //         .then(result => {
        //             setMenuDetail(result)
        //             console.log(result)
        //         })

        // }
    


    console.log(menuDetail)

    const [namaItem, setNamaItem] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [hargaItem, setHargaItem] = useState("");
    const [jumlahItem, setJumlahItem] = useState("");

    // const handleUpdate = (e) => {
    //     const id = e.currentTarget.id
    //     console.log(id)
    //     let myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");

    //     const raw = JSON.stringify({
    //         "nama_item": namaItem,
    //         "deskripsi": deskripsi,
    //         "harga_item": hargaItem,
    //         "jumlah_item": jumlahItem
    //     });

    //     const requestOptions = {
    //         method: 'PUT',
    //         headers: myHeaders,
    //         body: raw,
    //         redirect: 'follow'
    //     };

    //     fetch(`http://127.0.0.1:5000/item/update_item/${id}`, requestOptions)
    //         .then(response => response.json())
    //         .then(result => {
    //             console.log(result)
    //             alert("Item berhasil diupdate")
    //             window.location.reload()
    //         })
    //         .catch(error => console.log('error', error));
    // }

    return (
        <>
            <Modal show={modalShow} onHide={handleClose}>
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
                    {/* <Button id={menuDetail[0]?.item_id} size='sm' variant='warning' onClick={handleUpdate}>
                        Update
                    </Button> */}
                </Modal.Footer>
            </Modal>
            <span> </span>

        </>




    )




}