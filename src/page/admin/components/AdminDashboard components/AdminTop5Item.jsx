
const AdminTop5Item = ({item}) => {

    console.log(item.length)
    return (
        <>
            {item.map(item =>   
            (
                <tr>
                    <td></td>
                    <td>{item.nama_item}</td>
                    <td>IDR {item.harga_item}</td>
                    <td>{item.jumlah_terbeli} Barang</td>
                </tr>
            ))}
        </>
    )
}

export default AdminTop5Item;