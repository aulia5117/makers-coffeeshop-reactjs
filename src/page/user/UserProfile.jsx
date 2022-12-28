import './style.css'
import UserSidebar from './components/UserSidebar';

function UserProfile() {
    return (
        <>
            <UserSidebar />
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
                                    <label for="input-username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="input-username" />
                                </div>
                                <div className="col-12">
                                    <label for="input-password-lama" className="form-label">Password Lama</label>
                                    <input type="text" className="form-control" id="input-password-lama" />
                                </div>
                                <div className="col-12">
                                    <label for="input-password-baru" className="form-label">Password Baru</label>
                                    <input type="text" className="form-control" id="input-password-baru" />
                                </div>

                                <div className="text-center mt-3">
                                    <button onclick="userUpdateUser()" className="btn btn-info">Update</button>

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