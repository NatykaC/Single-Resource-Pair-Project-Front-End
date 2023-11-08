import {Link} from "react-router-dom"

function Cat({cat}) {
    return (
        <div>
            {/* <h1>
                Testing Cat function connection
            </h1> */}
            <div>
                <Link to={`/cats/${cat.id}`}>{cat.name}</Link>
            </div>
        </div>
    )
}

export default Cat;