import { useEffect, useState } from "react"
import IsiKeranjang from "./components/IsiKeranjang";


export default function Keranjang() {

    const token = document.cookie
    const split = token.split(".");
    let parsedToken = JSON.parse(atob(split[1]));
    // console.log(parsedToken)
    let username = parsedToken["username"]
    let password = parsedToken["password"]

    const [itemKeranjangUser , setItemKeranjangUser] = useState("")
    console.log(itemKeranjangUser[0]?.cart_total)

    useEffect(() => {

        // console.log(username)

        // const myHeaders = new Headers();
        // myHeaders.append('Authorization', 'Basic ' + btoa(username + ":" + password));
        
        let requestOptions = {
          method: 'POST',
          headers: {
              'Authorization' : "Basic " + btoa(username + ":" + password)
          },
          // redirect: 'follow',
          credential: 'include'
      };
    
        fetch("http://127.0.0.1:5000/order/get_cart_order", requestOptions)
          .then(response => response.json())
          .then((result) => {
          setItemKeranjangUser(result)
        })
        .catch(error => console.log('error fetching', error));
},[])

    const handleCartBuy = () => {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization' : "Basic " + btoa(username + ":" + password)
            },
            // redirect: 'follow',
            credential: 'include'
          };
      
          fetch("http://127.0.0.1:5000/order/add_order", requestOptions)
            .then(response => response.json())
            .then((result) => {
              console.log(result)
              alert("Pesanan Anda Telah Dikirimkan. Tunggu Acc dari Penjual")
              window.location.href = '/menu'
            })
            .catch(error => console.log('error', error));
    }

    return (
        // <!-- Open Content -->
        <section className="bg-light">
            <div className="container pb-5">
                <div className="row">
                    {/* <!-- col rincian belanja start --> */}
                    <div className="col-lg-7 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="mb-3">Keranjang</h2>
                                <hr />
                                {/* <!-- Keranjang Start --> */}
                                {itemKeranjangUser && <IsiKeranjang item={itemKeranjangUser}/>}

                                {/* <!-- Keranjang end --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- col rincian belanja end --> */}

                    {/* <!-- col ringkasan start --> */}
                    <div className="col-lg-5 mt-5 align-items-center">
                        <div className="card p-3" style={{position:"fixed"}}>
                            <h2 className="m-auto">Ringkasan Belanja</h2>
                            <hr />
                            <h6>Total Cart :</h6>
                            <h5 id="total-cart"> Rp {itemKeranjangUser[0]?.cart_total} </h5>
                            <button onClick={handleCartBuy} className="btn btn-primary">Beli</button>
                        </div>
                    </div>
                    {/* <!-- col ringkasan end --> */}


                </div>
            </div>
        </section>

    )
}