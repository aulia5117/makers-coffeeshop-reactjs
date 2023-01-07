import { useEffect, useState } from "react"


export default function AdminCreateMenu() {

    const [kategori, setKategori] = useState([])

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:5000/get_kategori", requestOptions)
            .then(response => response.json())
            .then((result) => {
                setKategori(result)
            })
            .catch(error => console.log('error', error));
    }, [kategori])

    const [namaItem, setNamaItem] = useState("")
    const [deskripsi, setDeskripsi] = useState("")
    const [hargaItem, setHargaItem] = useState("")
    const [jumlahItem, setJumlahItem] = useState("")
    const [nilaiKategori, setNilaiKategori] = useState(1)

    const handleSubmit = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
            "nama_item": namaItem,
            "deskripsi": deskripsi,
            "harga_item": hargaItem,
            "jumlah_item": jumlahItem,
            "kategori_id": nilaiKategori
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            // redirect: 'follow'
        };

        fetch("http://127.0.0.1:5000/item/add_item", requestOptions)
            .then(response => response.json())
            .then((result) => {
                console.log(result)
                alert("Menu baru telah dimasukkan")
            })
            .catch(error => console.log('error', error));
    }

    // useEffect(() => {
    //     handleSubmit()
    // }, [])



    // console.log(namaItem,deskripsi,hargaItem,jumlahItem,nilaiKategori)   


    return (
        <>

            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Create Menu</h1>
                </div>
                {/* <!-- End Page Title --> */}

                <section className="section dashboard">
                    <div className="row">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"> </h5>

                                {/* <!-- Start Form --> */}
                                {/* <!-- <form action="" className="row g-3"> --> */}
                                <div className="col-12">
                                    <label htmlFor="input-nama-item" className="form-label">Nama Item</label>
                                    <input type="text" className="form-control" id="input-nama-item" onChange={(e) => setNamaItem(e.target.value)} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="input-deskripsi" className="form-label">Deskripsi</label>
                                    <textarea name="input-deskripsi" className="form-control" id="input-deskripsi" onChange={(e) => setDeskripsi(e.target.value)}></textarea>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="input-harga-item" className="form-label">Harga Item (IDR)</label>
                                    <input type="number" className="form-control" id="input-harga-item" min="1000" defaultValue="1000" step="1000" onChange={(e) => setHargaItem(e.target.value)} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="input-jumlah-item" className="form-label">Jumlah Item</label>
                                    <input type="number" className="form-control" id="input-jumlah-item" min="1" defaultValue="1" onChange={(e) => setJumlahItem(e.target.value)} />
                                </div>

                                <div className="col-12 my-3 dropdown">
                                    <label htmlFor="input-kategori" className="form-label">Kategori</label>
                                    <span> </span>
                                    <select defaultValue={1} name="input-kategori" onChange={(e) => setNilaiKategori(e.target.value)}>
                                        {kategori.map((item =>
                                            <option key={item.kategori_id} value={item.kategori_id} >{item.nama_kategori}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                                </div>
                                {/* <!-- </form> -->
                            <!-- End Form --> */}

                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </>
    )


}