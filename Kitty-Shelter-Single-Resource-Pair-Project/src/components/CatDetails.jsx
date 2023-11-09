import {Link, useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import "../styles/CatDetails.css"

const API = import.meta.env.VITE_API_URL

function CatDetails() {
    const [cat, setCat] = useState({
        name: "",
        age: "",
        color: "",
        breed: "",
        arrival_date: "",
        spayed: "",
        })
    let navigate = useNavigate()
    let {index} = useParams()

    useEffect(()=>{
        const fetchOneCat = async ()=>{
            try {
                fetch(`${API}/cats/${index}`)
                .then(res=>res.json())
                .then(res=>{
                    setCat(res)
                })
            } catch (error) {
                return error
            }
        }
        fetchOneCat()
    },
        []
    )
    const handleDelete = ()=>{
        try {
            fetch(`${API}/cats/${index}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(cat)
            })
            .then(res=>res.json())
            .then(()=>navigate('/cats'))
        } catch (error) {
            return error
        }
    }
    return (
        <div className="show-cat-details">
            <div>
                <h3>
                 Name: {cat.name}
                </h3>
                <h3>
                    Age: {cat.age}
                </h3>
                <h3>
                    Color: {cat.color}
                </h3>
                <h3>
                    Breed: {cat.breed}
                </h3>
                <h3>
                    Arrival Date: {cat.arrival_date}
                </h3>
                <h3>
                    Spayed: {cat.spayed ? <span>✅</span> : <span>❌</span>}   
                </h3>
            </div>
            <br/>
            <div>
                <Link to={`/cats`}>
                    <button>Back to All Cats!</button>
                </Link>
            </div>
            <br/>
            <div>
                <Link to={`/cats/${index}/edit`}>
                    <button>Edit Cat</button>
                </Link>
            </div>
            <br/>
            <button onClick={handleDelete}>Delete Cat</button>
        </div>
    )
}

export default CatDetails;