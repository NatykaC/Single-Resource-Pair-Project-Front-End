import {Link} from 'react-router-dom'
import '../styles/NavBar.css'

function NavBar() {
    return (
        <nav>
            <div className='nav-inner'>
                <span className='kitty-logo'> Welcome to Our Kitty Shelter!!</span>
                <br/>
                <br/>
                <div className='links'>
                    <button className='all-cats'>
                        <Link to="/cats">See all Cats!!</Link>
                    </button>
                    <br/>
                    <br/>    
                    <button className='new-cats'>
                        <Link to="/cats/new">Add New Cat Here!</Link>
                    </button>
                    <br/>
                    <br/> 
                    </div>
                </div>
        </nav>
    )
}

export default NavBar;