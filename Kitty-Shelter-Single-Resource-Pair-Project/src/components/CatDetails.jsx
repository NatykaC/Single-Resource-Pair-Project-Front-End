import {Link, useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"

const API = import.meta.env.VITE_API_URL

function CatDetails() {
    const [cat, setCat] = useState({name: ""})
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
        <div>
            {/* <h1>
                Testing CatDetails function connection
            </h1> */}
            <div>
                <Link to={`/cats`}>
                    <button>Back to All Cats!</button>
                </Link>
            </div>
            <div>
                <Link to={`/cats/${index}/edit`}>
                    <button>Edit Cat</button>
                </Link>
            </div>
            <button onClick={handleDelete}>Delete Cat</button>
        </div>
    )
}

export default CatDetails;