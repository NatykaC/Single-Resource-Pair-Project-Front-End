import {useNavigate, Link} from "react-router-dom"
import {useState} from "react"
import '../styles/CatNewForm.css'

const API = import.meta.env.VITE_API_URL

function CatNewForm() {
    const navigate = useNavigate()
    const [cat, setCat]=useState({
        // get info from table created for this object
        name: "",
        age: "",
        color: "",
        breed: "",
        arrivalDate: "",
        spayed: false
    })
    
    const addNewCat = ()=>{
        const newCatData = {
            name: cat.name,
            age: cat.age,
            color: cat.color,
            breed: cat.breed,
            arrival_date: cat.arrivalDate,
            spayed: cat.spayed
        }
        try {
            fetch(`${API}/cats`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCatData)
            })
            .then(res=>res.json())
            .then(()=>navigate('/cats'))
        } catch (error) {
            return error
        }
    }

    const handleNewFormTextChange = (e)=>{
        setCat({ ...cat, [e.target.id]: e.target.value})
    }

    const handleSpayedCheckboxChange = ()=>{
        setCat({ ...cat, spayed: !cat.spayed})
    }    

    const handleNewFormSubmit = (e)=>{
        e.preventDefault()
        addNewCat()
    }
    return (
        <div className="new-form">
            <h2>Add New Cat Below: </h2>
            <br/>
            <form onSubmit={handleNewFormSubmit}>
                <label htmlFor="name">Cat Name: </label>
                <input
                    id="name"
                    value={cat.name}
                    type="text"
                    onChange={handleNewFormTextChange}
                    placeholder="name of cat"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="age">Age of Cat: </label>
                <input
                    id="age"
                    value={cat.age}
                    type="number"
                    onChange={handleNewFormTextChange}
                    placeholder="Age of Cat"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="color">Color of Cat: </label>
                <input
                    id="color"
                    value={cat.color}
                    type="text"
                    onChange={handleNewFormTextChange}
                    placeholder="Color of Cat"
                    required
                />
                <br/>
                <br/>
                 <label htmlFor="breed">Cat breed: </label>
                <input
                    id="breed"
                    value={cat.breed}
                    type="text"
                    onChange={handleNewFormTextChange}
                    placeholder="Cat Breed"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="arrival">Arrival Date: </label>
                <input
                    id="arrival"
                    value={cat.arrivalDate}
                    type="text"
                    onChange={handleNewFormTextChange}
                    placeholder="Arrival Date"
                    
                /> 
                <br/>
                <br/>   
                <label htmlFor="spayed">Spayed: </label>
                <input
                    id="spayed"
                    type="checkbox"
                    onChange={handleSpayedCheckboxChange}
                    checked={cat.spayed}
                />
                <br/>
                <br/>
                <button type="submit">Add New Cat!</button>
            </form>
            <br/>
            <Link to={`/cats`}>
                <button>Don't Add! Return to All Cats!</button>
            </Link>
        </div>
    )
}

export default CatNewForm;