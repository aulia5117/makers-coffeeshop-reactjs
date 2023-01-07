import './style.css'
import { useEffect, useState } from 'react';

function UserProfile() {

    const [dataUser, setDataUser] = useState("")
    const [updateNama, setUpdateNama] = useState(dataUser[0]?.nama_user)
    const [updateEmail, setUpdateEmail] = useState(dataUser[0]?.email_user)

    const token = document.cookie
    useEffect(() => {
        if (token) {

            const split = token.split(".");
            let parsedToken = JSON.parse(atob(split[1]));
            // console.log(parsedToken)
            let id = parsedToken["id"]
            // let password = parsedToken["password"]
            // console.log(id)

            const requestOptions = {
                method: 'GET'
                // redirect: 'follow'
            };

            fetch(`http://127.0.0.1:5000/user/get_update_data/${id}`, requestOptions)
                .then(response => response.json())
                .then((result) => { setDataUser(result) })
                .catch(error => console.log('error', error));
        }
    }, [])

    const updateProfile = () => {
        if (token) {

            const split = token.split(".");
            let parsedToken = JSON.parse(atob(split[1]));
            // console.log(parsedToken)
            let username = parsedToken["username"]
            let password = parsedToken["password"]
            // console.log(username)

            const myHeaders = new Headers();
            myHeaders.append("Authorization", "Basic " + btoa(username + ":" + password));
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "nama_user": updateNama,
                "email_user": updateEmail,
                // "username" : username_user
            });

            const requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: raw,
                credential: "include"
                // redirect: 'follow'
            };

            fetch("http://127.0.0.1:5000/user/update", requestOptions)
                .then(response => response.json())
                .then((result) => {
                    alert("Update Sukses")
                    window.location.reload()
                    // console.log(result)
                })
                .catch(error => console.log('error', error));
        }
    }



    // console.log(dataUser)

    return (
        <>
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Profile</h1>
                </div>


                <section className="section dashboard">
                    <div className="row">

                        <div className="card">
                            <div className="card-body">
                                <div className="card-title"></div>

                                <div className="col-12">
                                    <label htmlFor="input-nama-user" className="form-label mt-2">Nama User</label>
                                    <input defaultValue={dataUser[0]?.nama_user} type="text" className="form-control" id="input-nama-user" onChange={e => setUpdateNama(e.target.value)} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="input-email-user" className="form-label mt-2">Email User</label>
                                    <input defaultValue={dataUser[0]?.email_user} type="text" className="form-control" id="input-email-user" onChange={e => setUpdateEmail(e.target.value)} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="input-username" className="form-label mt-2">Username</label>
                                    <h6 id="input-username"> {dataUser[0]?.username} </h6>
                                </div>

                                <div className="text-center mt-3">
                                    <button className="btn btn-info" onClick={updateProfile}>Update</button>
                                </div>


                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </>

    );
}

export default UserProfile;