import {useState, useEffect} from "react"
import Cat from "./Cat"

const API = import.meta.env.VITE_API_URL

function Cats() {
    const [cats, setCats] = useState([])

    useEffect(()=>{
        const fetchCatsData = async ()=>{
            try {
                fetch(`${API}/cats`)
                .then(res=>res.json())
                .then(res=>{
                    setCats(res)
                })
            } catch (error) {
                return error
            }
        }
        fetchCatsData()
    }, 
    []
    )

    return (
        <div>
            {/* <h1>
                Testing Cats function connection
            </h1> */}
            {cats.length && cats.map((cat)=>{
                return <Cat key={cat.id} cat={cat} />
            })}
        </div>
    )
}

export default Cats;