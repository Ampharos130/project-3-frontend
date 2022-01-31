import { Link } from "react-router-dom";

function Header(props) {
    return (
        <div>
            <nav className="nav">
                <Link to='/'>
                    <h2>The Last Chapter</h2>
                </Link>
            </nav>
        </div>
    )
}

export default Header;