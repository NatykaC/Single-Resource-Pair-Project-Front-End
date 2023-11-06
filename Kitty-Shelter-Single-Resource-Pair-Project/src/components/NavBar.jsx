import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <h1>
                <Link to="/cats">See all Cats!!</Link>
            </h1>
            <button>
                <Link to="/cats/new">Add New Cat Here!</Link>
            </button>
        </div>
    )
}

export default NavBar;