
const IsiKeranjang = ({ item }) => {

    const handleDelete = (e) => {
        // console.log(e.currentTarget.id)
        const itemId = e.currentTarget.id
        
        const requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
          };
          
          

          fetch("http://127.0.0.1:5000/order/delete_cart_item/"+itemId, requestOptions)
            .then(response => response.json())
            .then(result => {
            //   console.log(result)
            //   console.log(itemId)
              alert("Item berhasil di delete")
              window.location.reload()
            })
            .catch(error => console.log('error', error));
    }

    return (
        <>
            {item.map(item => (
                <ul key={item.cart_order_id}>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="card-header">
                                <h5>Item</h5>
                            </div>
                            <div className="col-md-4">
                                <img src={require("../../../assets/img/coffee-child-sample.jpg")} className="img-fluid" alt="..." />
                            </div>

                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 id="card-nama-item{item.item_id}" className="card-title">{item.nama_item}</h5>
                                    <div>
                                        <h6 id="card-harga-item{item.item_id}" className="card-title"> IDR {item.total_harga}</h6>
                                        <h6>{item.jumlah_barang} Barang</h6>

                                    </div>
                                    <div className="text-end">
                                        <button type="button" id={item.cart_order_id} className="btn btn-danger" onClick={handleDelete}>Delete</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
            ))}
        </>
    )
}

export default IsiKeranjang;