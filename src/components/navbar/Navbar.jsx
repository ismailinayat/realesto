import './navbar.scss';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="logo">

                    Realesto
                </div>

                <div className="nav__menu">
                    <ul className="nav__menu-links">
                        <li className="nav__link">Products</li>
                        <li className="nav__link">About Us</li>
                        <li className="nav__link">Our Team</li>
                        <li className="nav__link">FAQ</li>
                    </ul>
                </div>

                <div className="nav__btn">
                    <div className="signin__btn">
                        <button className="btn__secondary">Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
