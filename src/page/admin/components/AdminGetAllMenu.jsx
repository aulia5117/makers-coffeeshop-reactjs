import { Button } from "react-bootstrap";

const AdminGetAllMenu = ({item}) => {
    return (
        <>
            {item.map(item =>   
            (
                <tr key={item.item_id}>
                    <th scope="row"></th>
                    <td>{item.nama_item}</td>
                    <td>IDR {item.harga_item}</td>
                    <td>{item.kategori}</td>
                    <td>{item.jumlah_item} Stok</td>
                    <td>{item.jumlah_terbeli} Barang</td>
                    <td>
                        <Button size="sm">
                            Detail
                        </Button>
                        <span> </span>
                        <Button size="sm" variant="warning">
                            Update
                        </Button>

                    </td>
                </tr>
            ))}
        </>
    )
}

export default AdminGetAllMenu;