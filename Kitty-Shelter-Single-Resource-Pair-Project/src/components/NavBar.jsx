import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <nav>
                <h1>Kitty Shelter</h1>
                <h3>
                    <Link to="/cats">See all Cats!!</Link>
                </h3>
                <button>
                    <Link to="/cats/new">Add New Cat Here!</Link>
                </button>
            </nav>
        </div>
    )
}

export default NavBar;