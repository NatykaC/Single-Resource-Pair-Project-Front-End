import {useState, useEffect} from "react";
import {useParams, Link, useNavigate} from "react-router-dom"
import '../styles/CatEditForm.css'

const API = import.meta.env.VITE_API_URL

function CatEditForm() {
    const navigate = useNavigate()
    let {index} = useParams()

    const [cat, setCat] = useState({
        name: "",
        age: "",
        color: "",
        breed: "",
        arrivalDate: "",
        spayed: false
    })

    const handleEditFormTextChange = (e)=>{
        setCat({ ...cat, [e.target.id]: e.target.value})
    }

    const handleEditSpayedCheckboxChange = ()=>{
        setCat({ ...cat, spayed: !cat.spayed})
    }

    const updateCat = ()=>{
        const editedCatData = {
            name: cat.name,
            age: cat.age,
            color: cat.color,
            breed: cat.breed,
            arrival_date: cat.arrivalDate,
            spayed: cat.spayed

        }
        try {
            fetch(`${API}/cats/${index}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editedCatData)
            })
            .then(res=>res.json())
            .then(()=>navigate(`/cats/${index}`))
            
        } catch (error) {
            return error
        }
    }

    const handleEditFormSubmit = (e)=>{
        e.preventDefault()
        updateCat()
    }

    return (
        <div className="edit-form">
            <br/>
            <h2>
               Edit Cat Below:
            </h2>
            <form onSubmit={handleEditFormSubmit}>
                <label htmlFor="name">Cat Name: </label>
                <input
                    id="name"
                    value={cat.name}
                    type="text"
                    onChange={handleEditFormTextChange}
                    placeholder="Name of cat"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="age">Age of Cat: </label>
                <input
                    id="age"
                    value={cat.age}
                    type="number"
                    onChange={handleEditFormTextChange}
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
                    onChange={handleEditFormTextChange}
                    placeholder="Color of Cat"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="breed"> Cat Breed: </label>
                <input
                    id="breed"
                    value={cat.breed}
                    type="text"
                    onChange={handleEditFormTextChange}
                    placeholder="Cat Breed"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="arrival"> Arrival Date: </label>
                <input
                    id="arrival"
                    value={cat.arrivalDate}
                    type="text"
                    onChange={handleEditFormTextChange}
                    placeholder="Arrival Date"
                    
                />
                <br/>
                <br/>
                <label htmlFor="spayed">Spayed: </label>
                <input
                    id="spayed"
                    type="checkbox"
                    onChange={handleEditSpayedCheckboxChange}
                    checked={cat.spayed}
                    
                />
                <br/>
                <br/>
                <button type="submit">Submit to Edit</button>
            </form>
                <br/>
                <Link to={`/cats/${index}`}>
                    <button>Don't Edit! Return to Cat!</button>
                </Link> 
        </div>
    )
}

export default CatEditForm;