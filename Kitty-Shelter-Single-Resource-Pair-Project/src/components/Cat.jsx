import {Link} from "react-router-dom"

function Cat({cat}) {
    return (
        <div>
            <div>
                <Link to={`/cats/${cat.id}`}>{cat.name}</Link>
            </div>
        </div>
    )
}

export default Cat;