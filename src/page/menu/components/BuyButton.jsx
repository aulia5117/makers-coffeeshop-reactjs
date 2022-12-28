import { useParams } from "react-router-dom";

export default function BuyButton(value) {

    const param = useParams()
    const itemIdValue = param.id
    const jumlahBarang = value.item
    console.log(jumlahBarang)

    let token = document.cookie
    console.log(token)
    const beliButton = () => {
        if (token) {
            const split = token.split(".");
            let parsedToken = JSON.parse(atob(split[1]));
            
            let username = parsedToken["username"]
            let password = parsedToken["password"]
            console.log(username)

            const myHeaders = new Headers();
            myHeaders.append("Authorization", "Basic " + btoa(username+":"+password));
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "item_id" : itemIdValue,
                "jumlah_barang" : jumlahBarang
                });
            
            const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw
            // redirect: 'follow'
            };

        
            
            fetch("http://127.0.0.1:5000/order/add_cart_order", requestOptions)
            .then(response => response.json())
            .then((result) => {
                console.log(result)
                alert("Pesanan Masuk Keranjang")
                window.location.href = '/keranjang'
            })
            .catch(error => console.log('error', error));
            
            } else {
                    alert("Silahkan Login")
                    window.location.href = '/login'
                } 
            }
        
        

    return( 
    <button onClick={beliButton} className="btn btn-success btn-lg">Buy</button>
    )
}