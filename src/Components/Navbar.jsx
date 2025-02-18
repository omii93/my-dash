// import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg broder-1"style={{ backgroundColor: '#33ccff' }}>
                <div className="container-fluid p-3">
                    <a className="navbar-brand fw-bold ms-md-5" href="#"> MyDashBoard</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active  fw-semibold me-5" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold me-5" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  fw-semibold" href="#">Contact</a>
                                {/* <AddAPhotoIcon/> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;