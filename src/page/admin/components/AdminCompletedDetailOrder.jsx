import { Table } from "react-bootstrap";

export default function AdminCompletedOrderDetail(item) {
    // console.log(item)

    const obj = item?.item
    return (
        <Table borderless>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nama Item</th>
                                <th>Jumlah Sub-Barang</th>
                                <th>Sub-total Harga</th>
                            </tr>
                        </thead>
                        <tbody>
                            {obj?.map((item) =>
                                <tr key={item.item_id}>
                                    <td> </td>
                                    <td>{item.nama_item}</td>
                                    <td>{item.jumlah_subbarang} Barang</td>
                                    <td>IDR {item.subtotal_harga}</td>
                                </tr>   
                            )}
                        </tbody>
                        
        </Table>

    )
}