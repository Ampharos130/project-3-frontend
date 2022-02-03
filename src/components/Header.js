import { Link } from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import Create from "../pages/Create";

function Header(props) {
    return (
        <div>
            <nav className="nav" >
                <Link to='/'>
                    <h2 style={{fontFamily: 'Quintessential, cursive'}}>The Last Chapter</h2>
                </Link>
                <Link to='/create'>
                    <h4 style={{fontFamily: 'Quintessential, cursive'}}>Create New Book</h4>
                </Link>
            </nav>
        </div>
    )
}

export default Header;