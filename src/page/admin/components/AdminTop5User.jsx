
const AdminTop5User = ({item}) => {

    console.log(item.length)
    return (
        <>
            {item.map(user =>   
            (
                <tr>
                    <th scope="row"></th>
                    <td>{user.nama_user}</td>
                    <td>{user.email_user}</td>
                    <td>{user.total_pembelian} Barang</td>
                </tr>
            ))}
        </>
    )
}

export default AdminTop5User;