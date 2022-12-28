import { Link } from "react-router-dom";

const CoffeeItem = ({ item }) => {
    // console.log(item)
    return (
        <>
            {item.map(item => (

                <div className="col-md-4" key={item.item_id}>
                    <Link to={`/menu/${item.item_id}`} >
                    <div className="card mb-4 product-wap rounded-0">
                        <span hidden>{item.item_id}</span>
                        <div className="card rounded-0">
                            <img className="card-img rounded-0 img-fluid" src={require("../../../assets/img/coffee-sample.jpg")} alt='' />
                            <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center"></div>
                        </div>
                    
                        <div className="card-body text-center">
                            <p className="h3 text-decoration-none">{item.nama_item}</p>
                            <p className="text-center mb-0">IDR {item.harga_item}</p>
                        </div>
                    </div>
                    </Link>

                </div>

            ))}
        </>
    );
}

export default CoffeeItem;