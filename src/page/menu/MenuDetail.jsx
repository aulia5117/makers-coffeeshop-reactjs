import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BuyButton from "./components/BuyButton"
import AddToCartButton from "./components/AddToCartButton"

export default function MenuDetail() {
    const param = useParams()
    // console.log(param.id)

    const [fetchSingleItem, setFetchSingleItem] = useState([])
    const [totalItem, setTotalItem] = useState(1)

    const [jumlahItem, setJumlahItem] = useState(1)
    // const [itemId, setItemId] = useState()

    const handleTotalItem = (e) => {
        setTotalItem(e.target.value)
        
    }

    const requestOptions = {
        method: 'GET'
        // redirect: 'follow'
    }

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/get_item/` + param.id, requestOptions)
            .then(response => response.json())
            .then(result => {
                setFetchSingleItem(result)

            })
            .catch(error => console.log('error fetching', error));
    }, [])


    return (
        <section className="bg-light">
            <div className="container pb-5">
                <div className="row">
                    <div className="col-lg-5 mt-5">
                        <div className="card mb-3">
                            <img className="card-img img-fluid" src={require("../../assets/img/coffee-child-sample.jpg")} alt="" id="product-detail" />
                        </div>
                        <div className="row">
                            {/* <!--Start Controls--> */}

                            {/* <!--End Controls-->
                        <!--Start Carousel Wrapper--> */}
                            <div id="multi-item-example" className="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                                {/* <!--Start Slides--> */}
                                <div className="carousel-inner product-links-wap" role="listbox">

                                </div>
                                {/* <!--End Slides--> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- col end --> */}
                    <div className="col-lg-7 mt-5">
                        <div className="card">
                            <div className="card-body">
                                
                                <h1 id="single-nama-item" className="h2">{fetchSingleItem[0]?.nama_item}</h1>
                                <span id="single-item-id" hidden>{fetchSingleItem[0]?.item_id}</span>
                                <p id="single-harga-item" className="h3 py-2">{fetchSingleItem[0]?.harga_item}</p>
                                <h6>Deskripsi:</h6>
                                <p id="single-deskripsi">{fetchSingleItem[0]?.deskripsi}</p>

                                <div className="row">

                                    <div className="col-auto">
                                        <ul className="list-inline pb-3">
                                            <li className="list-inline-item text-right">
                                                Quantity
                                            </li>
                                            <li>
                                                <input onChange={handleTotalItem} id="item-quantity" type="number" value={totalItem} min="1" max={fetchSingleItem[0]?.jumlah_item} /><span hidden id="wadah-value"></span>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col d-grid">
                                        <BuyButton item={totalItem}/>
                                    </div>
                                    <div className="col d-grid">
                                        <AddToCartButton item={totalItem}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}