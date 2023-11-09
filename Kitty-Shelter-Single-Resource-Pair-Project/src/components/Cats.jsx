import {useState, useEffect} from "react"
import Cat from "./Cat"
import '../styles/Cats.css'

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
        <div className="cats">
            <h1>
            {cats.map((cat)=>{
                return <Cat key={cat.id} cat={cat} />
            })}
            </h1>
        </div>
    )
}

export default Cats;